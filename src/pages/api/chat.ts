// Astro charge `.env` dans `import.meta.env`, jamais dans `process.env` : sans
// cet import, `SITE_CHAT_SHARED_SECRET` est introuvable côté serveur et la
// passerelle échouerait fermé sur un déploiement pourtant correct (voir
// l'en-tête de `mail.ts` pour le détail). À placer en premier import.
// dotenv n'écrase pas une variable déjà définie : en production, les vraies
// variables d'environnement de l'hébergeur restent prioritaires.
import 'dotenv/config';
import type { APIRoute } from 'astro';
import { chatErrorKey, chatRequestSchema, type ChatErrorKey } from '../../lib/chat-schema';
import { createRateLimiter, clientIp } from '../../lib/rate-limit';
import { verifyTurnstile } from '../../lib/turnstile';
import { localizeAnswerLinks } from '../../lib/localizeAnswerLinks';
import { articlesIn } from '../../lib/blog';
import { getDictionary } from '../../i18n';
import { DEFAULT_LOCALE, isLocale, type Locale } from '../../i18n/config';

// Seules les routes d'API sont rendues à la demande : tout le reste est prérendu.
export const prerender = false;

/**
 * Budget propre au chat, distinct de celui du formulaire de contact : une
 * conversation normale coûte plusieurs messages, un formulaire un seul.
 */
const checkChatRate = createRateLimiter({ windowMs: 15 * 60 * 1000, max: 30 }).check;

/**
 * `ClaudeHttpClient` immobilise un worker php-fpm pendant tout l'appel
 * (30 s × jusqu'à 4 itérations). Le délai est plus large que le pire cas
 * attendu, mais il existe : sans lui, une API bloquée retiendrait aussi les
 * connexions du site.
 */
const API_TIMEOUT_MS = 45_000;

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
 * Le visiteur ne lit que de la copie du dictionnaire. Rien de ce que dit
 * l'API — code, message anglais, corps brut — ne traverse cette fonction.
 */
function fail(
  locale: Locale,
  key: ChatErrorKey,
  status: number,
  options: { headers?: Record<string, string>; retryable?: boolean } = {},
) {
  const body: Record<string, unknown> = {
    ok: false,
    error: getDictionary(locale).common.supportChat.errors[key],
  };
  if (options.retryable) body.retryable = true;
  return json(body, status, options.headers);
}

/**
 * Carte des slugs FR → langue cible, pour la liste blanche de liens.
 *
 * Mémoïsée par langue : la collection de contenu ne change pas pendant la vie
 * du processus, et refaire un `getCollection` à chaque question serait du
 * gaspillage. La promesse est mise en cache dès son démarrage pour que deux
 * questions simultanées ne construisent pas deux fois la même carte.
 */
const blogSlugsByLocale = new Map<Locale, Promise<Map<string, string>>>();

function blogSlugs(locale: Locale): Promise<Map<string, string>> {
  const cached = blogSlugsByLocale.get(locale);
  if (cached) return cached;

  const pending = buildBlogSlugs(locale).catch((error: unknown) => {
    // Un échec ne doit pas se figer en cache : la question suivante réessaie.
    blogSlugsByLocale.delete(locale);
    throw error;
  });
  blogSlugsByLocale.set(locale, pending);
  return pending;
}

async function buildBlogSlugs(locale: Locale): Promise<Map<string, string>> {
  const [source, target] = await Promise.all([articlesIn(DEFAULT_LOCALE), articlesIn(locale)]);
  const slugByKey = new Map(target.map((article) => [article.key, article.slug]));

  const map = new Map<string, string>();
  for (const article of source) {
    const slug = slugByKey.get(article.key);
    if (slug !== undefined) map.set(article.slug, slug);
  }
  return map;
}

/** Réponse de succès de l'API, telle qu'on la relit — jamais telle qu'on la renvoie. */
type ApiSuccess = {
  conversationId: string;
  messageId: string;
  answer: string;
  refused: boolean;
  unanswered: boolean;
  remainingToday: number;
};

function readSuccess(body: unknown): ApiSuccess | undefined {
  if (typeof body !== 'object' || body === null) return undefined;
  const raw = body as Record<string, unknown>;
  if (
    typeof raw.conversationId !== 'string' ||
    typeof raw.messageId !== 'string' ||
    typeof raw.answer !== 'string'
  ) {
    return undefined;
  }
  return {
    conversationId: raw.conversationId,
    messageId: raw.messageId,
    answer: raw.answer,
    refused: raw.refused === true,
    unanswered: raw.unanswered === true,
    remainingToday: typeof raw.remainingToday === 'number' ? raw.remainingToday : 0,
  };
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    // La langue est illisible en même temps que le reste : repli français.
    return fail(DEFAULT_LOCALE, 'generic', 400);
  }

  const locale = localeOf(payload);

  // ---- 1. Validation ----
  // Le contrôle le moins cher d'abord : rien d'invalide ne doit consommer un
  // jeton de débit, un appel à Cloudflare, ni un worker php-fpm.
  const parsed = chatRequestSchema.safeParse(payload);
  if (!parsed.success) {
    // Seul cas qu'un visiteur peut corriger lui-même, et il a sa propre copie.
    const tooLong = parsed.error.issues.some(
      (issue) => issue.path[0] === 'question' && issue.code === 'too_big',
    );
    return fail(locale, tooLong ? 'tooLong' : 'generic', 400);
  }
  const data = parsed.data;

  // ---- 2. Limitation de débit par IP ----
  const ip = clientIp(request, clientAddress);
  const rate = checkChatRate(ip);
  if (!rate.allowed) {
    return fail(locale, 'rateLimit', 429, {
      headers: { 'retry-after': String(rate.retryAfterSeconds) },
    });
  }

  // ---- 3. Turnstile, au seul premier message ----
  // Les tours suivants sont déjà bornés par le quota journalier du visiteur,
  // tenu côté API : redemander un défi à chaque question coûterait un appel
  // réseau de plus sans rien resserrer.
  if (data.conversationId === undefined) {
    const human = await verifyTurnstile(data.turnstileToken, ip);
    if (!human) {
      console.error('[api/chat] Turnstile refusé : requête abandonnée.');
      return fail(locale, 'generic', 403);
    }
  }

  // ---- 4. Appel serveur-à-serveur ----
  // Échec fermé : un déploiement qui a oublié une variable ne doit pas
  // produire de requêtes anonymes vers l'API.
  const secret = process.env.SITE_CHAT_SHARED_SECRET;
  const apiUrl = process.env.SITE_CHAT_API_URL;
  if (!secret || !apiUrl) {
    console.error(
      `[api/chat] Configuration incomplète : ${!secret ? 'SITE_CHAT_SHARED_SECRET' : 'SITE_CHAT_API_URL'} absente. Aucun appel émis.`,
    );
    return fail(locale, 'unavailable', 503);
  }

  let response: Response;
  try {
    response = await fetch(`${apiUrl.replace(/\/+$/, '')}/support/site-chat`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-Signally-Site-Key': secret,
      },
      // Champs du contrat de l'API, et rien d'autre : surtout pas de
      // transcription, que l'API rejoue depuis sa propre base.
      body: JSON.stringify({
        question: data.question,
        visitorId: data.visitorId,
        conversationId: data.conversationId,
        locale,
        pageKey: data.pageKey,
      }),
      signal: AbortSignal.timeout(API_TIMEOUT_MS),
    });
  } catch (error) {
    // Rassemble expiration (AbortSignal.timeout) et panne réseau.
    console.error('[api/chat] API injoignable ou expirée :', error);
    return fail(locale, 'generic', 502);
  }

  let body: unknown;
  try {
    body = await response.json();
  } catch {
    body = undefined;
  }

  if (!response.ok) {
    const raw = (typeof body === 'object' && body !== null ? body : {}) as Record<string, unknown>;
    const code = typeof raw.error === 'string' ? raw.error : 'unknown';
    // Le message anglais de l'API sert ici, et seulement ici : il aide à
    // diagnostiquer, il n'a jamais sa place devant le visiteur.
    console.error(
      `[api/chat] API ${response.status} (${code}) : ${typeof raw.message === 'string' ? raw.message : '—'}`,
    );
    return fail(locale, chatErrorKey(code), response.status, {
      retryable: code === 'assistant_unavailable' && raw.retryable === true,
    });
  }

  const result = readSuccess(body);
  if (!result) {
    console.error(`[api/chat] Réponse ${response.status} inexploitable de l’API.`);
    return fail(locale, 'generic', 502);
  }

  // Liste blanche de liens : frontière de sécurité, pas du formatage. Si la
  // carte des slugs est indisponible, on passe une carte vide plutôt que de
  // court-circuiter la liste — un lien de blog perd alors son URL, jamais son
  // libellé.
  let slugs: Map<string, string>;
  try {
    slugs = await blogSlugs(locale);
  } catch (error) {
    console.error('[api/chat] Carte des slugs de blog indisponible :', error);
    slugs = new Map();
  }

  return json({
    ok: true,
    conversationId: result.conversationId,
    messageId: result.messageId,
    answer: localizeAnswerLinks(result.answer, locale, slugs),
    refused: result.refused,
    unanswered: result.unanswered,
    remainingToday: result.remainingToday,
  });
};

/** Les autres méthodes ne sont pas supportées sur cette route. */
export const ALL: APIRoute = () =>
  json({ ok: false, error: 'Méthode non autorisée.' }, 405, { allow: 'POST' });
