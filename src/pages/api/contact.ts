import type { APIRoute } from 'astro';
import { contactSchema, fieldErrors, MIN_FILL_MS } from '../../lib/contact-schema';
import { checkRateLimit, clientIp } from '../../lib/rate-limit';
import { sendContactEmail } from '../../lib/mail';

// Seule route rendue à la demande : tout le reste du site est prérendu.
export const prerender = false;

function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...headers },
  });
}

/**
 * Le formulaire fonctionne aussi sans JavaScript : dans ce cas le
 * navigateur poste en `application/x-www-form-urlencoded` et attend une
 * redirection plutôt qu'une réponse JSON.
 */
function wantsHtml(request: Request): boolean {
  const type = request.headers.get('content-type') ?? '';
  return !type.includes('application/json');
}

function redirect(to: string) {
  return new Response(null, { status: 303, headers: { location: to } });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const html = wantsHtml(request);

  let payload: Record<string, unknown>;
  try {
    if (html) {
      payload = Object.fromEntries(await request.formData());
    } else {
      payload = await request.json();
    }
  } catch {
    return html
      ? redirect('/contact?erreur=format')
      : json({ ok: false, error: 'Requête illisible.' }, 400);
  }

  // ---- Limitation de débit ----
  const ip = clientIp(request, clientAddress);
  const rate = checkRateLimit(ip);
  if (!rate.allowed) {
    const message =
      'Trop de demandes envoyées depuis cette adresse. Réessayez dans quelques minutes.';
    return html
      ? redirect('/contact?erreur=frequence')
      : json({ ok: false, error: message }, 429, {
          'retry-after': String(rate.retryAfterSeconds),
        });
  }

  // ---- Validation ----
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return html
      ? redirect('/contact?erreur=validation')
      : json({ ok: false, errors: fieldErrors(parsed.error) }, 400);
  }

  const data = parsed.data;

  // ---- Anti-spam ----
  // Pot de miel rempli, ou formulaire soumis trop vite pour un humain :
  // on répond « succès » sans envoyer, pour ne rien apprendre au robot.
  const tooFast = typeof data.ts === 'number' && Date.now() - data.ts < MIN_FILL_MS;
  if (data.website || tooFast) {
    return html ? redirect('/contact?envoye=1') : json({ ok: true });
  }

  // ---- Envoi ----
  try {
    const { previewUrl } = await sendContactEmail(data);
    return html ? redirect('/contact?envoye=1') : json({ ok: true, previewUrl });
  } catch (error) {
    console.error('[api/contact] Échec de l’envoi :', error);
    const message =
      "L'envoi a échoué. Réessayez dans un instant ou écrivez-nous directement à contacts@signally.io.";
    return html
      ? redirect('/contact?erreur=envoi')
      : json({ ok: false, error: message }, 502);
  }
};

/** Les autres méthodes ne sont pas supportées sur cette route. */
export const ALL: APIRoute = () =>
  json({ ok: false, error: 'Méthode non autorisée.' }, 405, { allow: 'POST' });
