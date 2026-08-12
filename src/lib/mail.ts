// Astro charge `.env` dans `import.meta.env`, jamais dans `process.env` : sans
// cet import, la configuration ci-dessous est introuvable côté serveur et le
// formulaire échoue alors que `npm run check:mail` (qui charge dotenv lui-même)
// fonctionne. À placer en premier — les constantes du module sont évaluées
// après les imports, mais avant tout code appelant.
// dotenv n'écrase pas une variable déjà définie : en production, les vraies
// variables d'environnement injectées par l'hébergeur restent prioritaires.
import 'dotenv/config';
import nodemailer, { type Transporter } from 'nodemailer';
import type { ContactInput } from './contact-schema';
import { parseMailerDsn, maskSecret } from './mailer-dsn';

/**
 * Envoi des demandes de démonstration vers contacts@signally.io.
 *
 * La configuration est lue dans cet ordre de priorité :
 *  1. MAILER_DSN — syntaxe Symfony Mailer, déjà utilisée par Signally
 *     (« sendgrid://<clé>@default »). Une seule valeur à maintenir.
 *  2. SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS — repli explicite.
 *
 * Dans les deux cas, la valeur « ethereal » bascule sur un compte de test
 * Nodemailer : rien n'est réellement délivré, et une URL de
 * prévisualisation est journalisée.
 */

const MAIL_TO = process.env.MAIL_TO ?? 'contacts@signally.io';
const MAIL_FROM = process.env.MAIL_FROM ?? 'Signally <no-reply@signally.io>';

let transporterPromise: Promise<Transporter> | null = null;

async function etherealTransport(): Promise<Transporter> {
  const account = await nodemailer.createTestAccount();
  console.info(
    `[mail] Mode Ethereal — compte de test ${account.user}. ` +
      'Aucun e-mail réel ne sera envoyé.'
  );
  return nodemailer.createTransport({
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure,
    auth: { user: account.user, pass: account.pass },
  });
}

async function createTransporter(): Promise<Transporter> {
  const dsn = process.env.MAILER_DSN?.trim();

  if (dsn) {
    const config = parseMailerDsn(dsn);
    if (config === 'ethereal') return etherealTransport();

    console.info(
      `[mail] Transport ${config.provider} — ${config.host}:${config.port} ` +
        `(secure=${config.secure}, user=${config.auth?.user ?? 'anonyme'}` +
        `${config.auth ? `, secret=${maskSecret(config.auth.pass)}` : ''})`
    );

    return nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
    });
  }

  // ---- Repli : variables SMTP_* explicites ----
  const host = process.env.SMTP_HOST;
  if (!host) {
    throw new Error(
      "Aucune configuration d'envoi. Renseignez MAILER_DSN (ou les variables " +
        'SMTP_*) dans .env, ou utilisez MAILER_DSN=ethereal:// pour une ' +
        'vérification locale.'
    );
  }

  if (host.toLowerCase() === 'ethereal') return etherealTransport();

  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  return nodemailer.createTransport({
    host,
    port,
    // `secure` vaut true pour le port 465 (TLS implicite), false sinon
    // (STARTTLS négocié sur 587).
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
    auth: user && pass ? { user, pass } : undefined,
  });
}

/**
 * Teste la connexion et l'authentification sans envoyer de message.
 * Utilisé par `npm run check:mail`.
 */
export async function verifyMailer(): Promise<void> {
  const transporter = await getTransporter();
  await transporter.verify();
}

/** Transport unique, réutilisé entre les requêtes (pool de connexions). */
function getTransporter(): Promise<Transporter> {
  if (!transporterPromise) {
    transporterPromise = createTransporter().catch((error) => {
      // Sans cette remise à zéro, une panne de configuration au premier
      // appel condamnerait le formulaire jusqu'au redémarrage.
      transporterPromise = null;
      throw error;
    });
  }
  return transporterPromise;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildBodies(data: ContactInput) {
  const headcount = data.headcount?.trim() || 'non précisé';

  const rows: [string, string][] = [
    ['Nom', data.name],
    ['E-mail', data.email],
    ['Entreprise', data.company],
    ['Collaborateurs', headcount],
    ['Environnement', data.environment],
  ];

  const text = [
    'Nouvelle demande de démonstration — signally.io',
    '',
    ...rows.map(([label, value]) => `${label} : ${value}`),
    '',
    'Besoin exprimé :',
    data.message,
    '',
    '—',
    'Envoyé depuis le formulaire de contact du site.',
  ].join('\n');

  const html = `
<div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#1a1a1a;line-height:1.6">
  <h2 style="font-size:18px;margin:0 0 4px">Nouvelle demande de démonstration</h2>
  <p style="font-size:13px;color:#8c8a84;margin:0 0 20px">Formulaire de contact — signally.io</p>
  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px">
    ${rows
      .map(
        ([label, value]) => `<tr>
      <td style="padding:6px 18px 6px 0;color:#5c5c58;vertical-align:top;white-space:nowrap">${label}</td>
      <td style="padding:6px 0;font-weight:600">${escapeHtml(value)}</td>
    </tr>`
      )
      .join('')}
  </table>
  <div style="margin-top:22px;padding-top:18px;border-top:2px solid #f2c531">
    <div style="font-size:12px;letter-spacing:.08em;color:#8c8a84;margin-bottom:8px">BESOIN EXPRIMÉ</div>
    <div style="font-size:14px;white-space:pre-wrap">${escapeHtml(data.message)}</div>
  </div>
</div>`.trim();

  return { text, html };
}

export type SendResult = { previewUrl: string | null };

export async function sendContactEmail(data: ContactInput): Promise<SendResult> {
  const transporter = await getTransporter();
  const { text, html } = buildBodies(data);
  const headcount = data.headcount?.trim();

  const info = await transporter.sendMail({
    from: MAIL_FROM,
    to: MAIL_TO,
    // Répondre au message ouvre directement un e-mail au prospect.
    replyTo: `${data.name} <${data.email}>`,
    subject: headcount
      ? `Demande de démo — ${data.company} (${headcount} collaborateurs)`
      : `Demande de démo — ${data.company}`,
    text,
    html,
  });

  console.info(
    `[mail] Envoyé à ${info.accepted.join(', ') || '(aucun destinataire accepté)'} ` +
      `— id ${info.messageId}`
  );
  if (info.rejected.length > 0) {
    console.warn(`[mail] Destinataires refusés : ${info.rejected.join(', ')}`);
  }

  const preview = nodemailer.getTestMessageUrl(info);
  if (preview) console.info(`[mail] Prévisualisation Ethereal : ${preview}`);

  return { previewUrl: typeof preview === 'string' ? preview : null };
}
