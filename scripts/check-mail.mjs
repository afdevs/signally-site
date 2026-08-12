#!/usr/bin/env node
/**
 * Vérifie la configuration d'envoi.
 *
 *   node scripts/check-mail.mjs           connexion + authentification seules
 *   node scripts/check-mail.mjs --send    envoie en plus un message de test
 *
 * Sans --send, aucun e-mail n'est émis : on ouvre la session SMTP, on
 * s'authentifie, puis on referme. C'est suffisant pour valider un DSN.
 */

import 'dotenv/config';
import nodemailer from 'nodemailer';
import { parseMailerDsn, maskSecret } from '../src/lib/mailer-dsn.ts';

const SEND = process.argv.includes('--send');

const dsn = process.env.MAILER_DSN?.trim();
const from = process.env.MAIL_FROM ?? 'Signally <no-reply@signally.io>';
const to = process.env.MAIL_TO ?? 'contacts@signally.io';

if (!dsn && !process.env.SMTP_HOST) {
  console.error('✗ Ni MAILER_DSN ni SMTP_HOST ne sont définis dans .env.');
  process.exit(1);
}

let config;
try {
  config = dsn
    ? parseMailerDsn(dsn)
    : {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth:
          process.env.SMTP_USER && process.env.SMTP_PASS
            ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
            : undefined,
        provider: process.env.SMTP_HOST,
      };
} catch (error) {
  console.error(`✗ ${error.message}`);
  process.exit(1);
}

if (config === 'ethereal') {
  console.log('Mode ethereal:// — aucun envoi réel, rien à vérifier.');
  process.exit(0);
}

console.log('Configuration lue :');
console.log(`  fournisseur : ${config.provider}`);
console.log(`  hôte        : ${config.host}:${config.port} (secure=${config.secure})`);
console.log(`  utilisateur : ${config.auth?.user ?? '(anonyme)'}`);
console.log(`  secret      : ${config.auth ? maskSecret(config.auth.pass) : '(aucun)'}`);
console.log(`  expéditeur  : ${from}`);
console.log(`  destinataire: ${to}\n`);

const transporter = nodemailer.createTransport({
  host: config.host,
  port: config.port,
  secure: config.secure,
  auth: config.auth,
  connectionTimeout: 15000,
  greetingTimeout: 15000,
});

try {
  process.stdout.write('Connexion et authentification… ');
  await transporter.verify();
  console.log('✓ ok');
} catch (error) {
  console.log('✗ échec');
  console.error(`\n  ${error.message}`);
  if (/535|authentication|credentials/i.test(String(error.message))) {
    console.error(
      "\n  → Clé d'API refusée. Vérifiez qu'elle est active dans SendGrid et " +
        "qu'elle dispose au minimum de la permission « Mail Send »."
    );
  }
  process.exit(1);
}

if (!SEND) {
  console.log('\nAucun e-mail envoyé. Relancez avec --send pour un test réel.');
  process.exit(0);
}

try {
  process.stdout.write(`Envoi d'un message de test à ${to}… `);
  const info = await transporter.sendMail({
    from,
    to,
    subject: '[TEST] Configuration du formulaire de contact — signally.io',
    text:
      "Message de test émis par scripts/check-mail.mjs.\n\n" +
      "Si vous le recevez, le formulaire de contact du site est opérationnel.\n" +
      'Aucune action requise.\n',
  });
  console.log('✓ ok');
  console.log(`  accepté par le serveur pour : ${info.accepted.join(', ')}`);
  if (info.rejected.length) console.log(`  refusé : ${info.rejected.join(', ')}`);
  console.log(`  id : ${info.messageId}`);
  console.log(
    "\n  Note : « accepté » signifie que SendGrid a pris le message en charge, " +
      'pas qu\'il est arrivé en boîte. Vérifiez la réception, et l\'onglet ' +
      'Activity de SendGrid en cas de doute.'
  );
} catch (error) {
  console.log('✗ échec');
  console.error(`\n  ${error.message}`);
  if (/verified Sender|from address/i.test(String(error.message))) {
    console.error(
      `\n  → SendGrid refuse l'expéditeur ${from}. Ajoutez cette adresse comme ` +
        'Verified Sender, ou authentifiez le domaine signally.io ' +
        '(Settings → Sender Authentication).'
    );
  }
  process.exit(1);
}
