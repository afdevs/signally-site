import type { APIRoute } from 'astro';
import { makeContactSchema, fieldErrors, MIN_FILL_MS } from '../../lib/contact-schema';
import { checkRateLimit, clientIp } from '../../lib/rate-limit';
import { sendContactEmail } from '../../lib/mail';
import { CONTACT_EMAIL } from '../../data/nav';
import { getDictionary } from '../../i18n';
import { DEFAULT_LOCALE, isLocale, type Locale } from '../../i18n/config';
import { localizedPath } from '../../i18n/routes';

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

/**
 * Langue du visiteur, transportée par un champ caché du formulaire.
 * Sans elle, un envoi depuis /es/contacto renverrait sur la page
 * française. Toute valeur inattendue retombe sur le français.
 */
function localeOf(payload: Record<string, unknown>): Locale {
  const value = payload.locale;
  return typeof value === 'string' && isLocale(value) ? value : DEFAULT_LOCALE;
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
    // La langue est illisible en même temps que le reste : repli français.
    return html
      ? redirect(`${localizedPath('contact', DEFAULT_LOCALE)}?erreur=format`)
      : json({ ok: false, error: getDictionary(DEFAULT_LOCALE).contact.form.alerts.format }, 400);
  }

  const locale = localeOf(payload);
  const t = getDictionary(locale).contact.form;
  const contactPath = localizedPath('contact', locale);

  // ---- Limitation de débit ----
  const ip = clientIp(request, clientAddress);
  const rate = checkRateLimit(ip);
  if (!rate.allowed) {
    return html
      ? redirect(`${contactPath}?erreur=frequence`)
      : json({ ok: false, error: t.alerts.frequence }, 429, {
          'retry-after': String(rate.retryAfterSeconds),
        });
  }

  // ---- Validation ----
  const parsed = makeContactSchema(t.errors).safeParse(payload);
  if (!parsed.success) {
    return html
      ? redirect(`${contactPath}?erreur=validation`)
      : json({ ok: false, errors: fieldErrors(parsed.error) }, 400);
  }

  const data = parsed.data;

  // ---- Anti-spam ----
  // Pot de miel rempli, ou formulaire soumis trop vite pour un humain :
  // on répond « succès » sans envoyer, pour ne rien apprendre au robot.
  const tooFast = typeof data.ts === 'number' && Date.now() - data.ts < MIN_FILL_MS;
  if (data.website || tooFast) {
    return html ? redirect(`${contactPath}?envoye=1`) : json({ ok: true });
  }

  // ---- Envoi ----
  try {
    const { previewUrl } = await sendContactEmail(data);
    return html ? redirect(`${contactPath}?envoye=1`) : json({ ok: true, previewUrl });
  } catch (error) {
    console.error('[api/contact] Échec de l’envoi :', error);
    return html
      ? redirect(`${contactPath}?erreur=envoi`)
      : json({ ok: false, error: `${t.alerts.envoi} ${CONTACT_EMAIL}.` }, 502);
  }
};

/** Les autres méthodes ne sont pas supportées sur cette route. */
export const ALL: APIRoute = () =>
  json({ ok: false, error: 'Méthode non autorisée.' }, 405, { allow: 'POST' });
