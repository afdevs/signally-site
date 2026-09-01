// Même raison que dans `chat.ts` : Astro charge `.env` dans `import.meta.env`
// et non dans `process.env`. Sans cet import, le secret serait introuvable et
// la passerelle échouerait fermé sur un déploiement pourtant correct.
// À placer en premier import.
import 'dotenv/config';
import type { APIRoute } from 'astro';
import { chatFeedbackSchema } from '../../lib/chat-schema';
import { createRateLimiter, clientIp } from '../../lib/rate-limit';
import { getDictionary } from '../../i18n';
import { DEFAULT_LOCALE, isLocale, type Locale } from '../../i18n/config';

// Seules les routes d'API sont rendues à la demande : tout le reste est prérendu.
export const prerender = false;

/**
 * Budget propre au pouce, séparé de celui du chat.
 *
 * Instance dédiée plutôt que partagée avec `chat.ts` : partager reviendrait à
 * laisser des pouces consommer les jetons des questions, or c'est la question
 * qui est chère (un worker php-fpm, un appel au modèle) et c'est elle qu'on
 * protège. Plus généreuse que le chat (60 contre 30 sur la même fenêtre) parce
 * qu'une conversation produit au plus un pouce par réponse, plus les
 * changements d'avis, et qu'une écriture d'un booléen en base ne justifie pas
 * de couper un visiteur normal. Ce n'est pas pour autant une route libre : ça
 * reste une écriture en base, donc une limite existe.
 */
const checkFeedbackRate = createRateLimiter({ windowMs: 15 * 60 * 1000, max: 60 }).check;

/**
 * Bien plus court que les 45 s du chat : aucun appel au modèle derrière, juste
 * une écriture. Un pouce qui traîne doit lâcher la connexion, pas l'occuper.
 */
const API_TIMEOUT_MS = 10_000;

function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...headers },
  });
}

/**
 * Langue du visiteur, lue avant la validation zod : un corps invalide doit
 * quand même produire un message d'erreur dans la langue de la page. Toute
 * valeur inattendue retombe sur le français.
 */
function localeOf(payload: unknown): Locale {
  const value = (payload as { locale?: unknown } | null | undefined)?.locale;
  return typeof value === 'string' && isLocale(value) ? value : DEFAULT_LOCALE;
}

/**
 * Une seule copie pour tous les échecs, `errors.generic`.
 *
 * Un pouce perdu n'est pas un incident pour le visiteur : distinguer les cas
 * lui demanderait de comprendre une panne qu'il ne peut pas corriger, et
 * renseignerait un sondeur sur ce que fait l'API. Rien de ce qu'elle dit —
 * code, message anglais, corps brut — ne traverse cette fonction.
 */
function fail(locale: Locale, status: number, headers: Record<string, string> = {}) {
  return json(
    { ok: false, error: getDictionary(locale).common.supportChat.errors.generic },
    status,
    headers,
  );
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    // La langue est illisible en même temps que le reste : repli français.
    return fail(DEFAULT_LOCALE, 400);
  }

  const locale = localeOf(payload);

  // ---- 1. Validation ----
  // Le contrôle le moins cher d'abord : rien d'invalide ne doit consommer un
  // jeton de débit ni un aller-retour vers l'API.
  const parsed = chatFeedbackSchema.safeParse(payload);
  if (!parsed.success) return fail(locale, 400);
  const data = parsed.data;

  // ---- 2. Limitation de débit par IP ----
  const rate = checkFeedbackRate(clientIp(request, clientAddress));
  if (!rate.allowed) {
    return fail(locale, 429, { 'retry-after': String(rate.retryAfterSeconds) });
  }

  // Pas de Turnstile : le visiteur a passé le contrôle au premier message de la
  // conversation, et une note ne déclenche aucun appel au modèle.

  // ---- 3. Appel serveur-à-serveur ----
  // Échec fermé : un déploiement qui a oublié une variable ne doit pas produire
  // de requêtes anonymes vers l'API.
  const secret = process.env.SITE_CHAT_SHARED_SECRET;
  const apiUrl = process.env.SITE_CHAT_API_URL;
  if (!secret || !apiUrl) {
    console.error(
      `[api/chat-feedback] Configuration incomplète : ${!secret ? 'SITE_CHAT_SHARED_SECRET' : 'SITE_CHAT_API_URL'} absente. Aucun appel émis.`,
    );
    return fail(locale, 503);
  }

  let response: Response;
  try {
    // Le schéma garantit un uuid : le `messageId` ne peut rien injecter dans le
    // chemin. C'est aussi l'API qui vérifie en base que ce message appartient
    // bien à ce visiteur (`findOwnedByVisitor`) ; la passerelle ne le vérifie
    // pas et ne doit pas laisser croire qu'elle le fait.
    response = await fetch(
      `${apiUrl.replace(/\/+$/, '')}/support/site-chat/${data.messageId}/feedback`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-Signally-Site-Key': secret,
        },
        body: JSON.stringify({ visitorId: data.visitorId, feedback: data.feedback }),
        signal: AbortSignal.timeout(API_TIMEOUT_MS),
      },
    );
  } catch (error) {
    // Rassemble expiration (AbortSignal.timeout) et panne réseau.
    console.error('[api/chat-feedback] API injoignable ou expirée :', error);
    return fail(locale, 502);
  }

  if (!response.ok) {
    let body: unknown;
    try {
      body = await response.json();
    } catch {
      body = undefined;
    }
    const raw = (typeof body === 'object' && body !== null ? body : {}) as Record<string, unknown>;
    // Le code de l'API sert ici, et seulement ici : il aide à diagnostiquer
    // (`unauthorized`, `invalid_message`, `invalid_visitor`, `message_not_found`),
    // il n'a jamais sa place devant le visiteur. Ni `visitorId` ni `messageId`
    // dans cette ligne : elle voisine l'IP dans le journal du serveur.
    console.error(
      `[api/chat-feedback] API ${response.status} (${typeof raw.error === 'string' ? raw.error : 'unknown'}).`,
    );
    return fail(locale, response.status);
  }

  // Le corps de succès de l'API (`{ messageId, feedback }`) n'apprend rien au
  // widget : il sait déjà ce qu'il a envoyé.
  return json({ ok: true });
};

/** Les autres méthodes ne sont pas supportées sur cette route. */
export const ALL: APIRoute = () =>
  json({ ok: false, error: 'Méthode non autorisée.' }, 405, { allow: 'POST' });
