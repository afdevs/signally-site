/**
 * Lecture d'un MAILER_DSN à la syntaxe Symfony Mailer.
 *
 * Signally utilise déjà cette syntaxe côté application ; on l'accepte ici
 * telle quelle pour n'avoir qu'une seule valeur à maintenir entre les
 * deux environnements, plutôt que de dupliquer hôte, port et
 * identifiants dans des variables séparées.
 *
 * Formats reconnus :
 *   sendgrid://<clé_api>@default          relais SMTP SendGrid
 *   sendgrid+smtp://<clé_api>@default     variante Symfony explicite
 *   smtp://<user>:<pass>@<hôte>:<port>    SMTP générique (STARTTLS)
 *   smtps://<user>:<pass>@<hôte>:<port>   SMTP générique (TLS implicite)
 *   ethereal://                           compte de test Nodemailer
 *
 * Les transports « API » de Symfony (sendgrid+api://, +https://) ne sont
 * pas pris en charge : ils supposent un client HTTP propre au
 * fournisseur, là où ce projet n'utilise que SMTP via Nodemailer.
 */

export type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  auth?: { user: string; pass: string };
  /** Nom du fournisseur, pour les messages de journal. */
  provider: string;
};

/** Relais SMTP SendGrid : l'utilisateur est littéralement « apikey ». */
const SENDGRID = { host: 'smtp.sendgrid.net', user: 'apikey' } as const;

export class DsnError extends Error {}

export function parseMailerDsn(dsn: string): SmtpConfig | 'ethereal' {
  const trimmed = dsn.trim();

  if (trimmed === 'ethereal://' || trimmed === 'ethereal') return 'ethereal';

  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    throw new DsnError(
      `MAILER_DSN illisible. Formats attendus : sendgrid://<clé>@default, ` +
        `smtp://<user>:<pass>@<hôte>:<port>, ou ethereal://`
    );
  }

  // « sendgrid+smtp: » → « sendgrid »
  const scheme = url.protocol.replace(/:$/, '').split('+')[0]!.toLowerCase();
  const transport = url.protocol.replace(/:$/, '').split('+')[1]?.toLowerCase();

  if (transport && transport !== 'smtp') {
    throw new DsnError(
      `Transport « ${transport} » non pris en charge : ce projet n'envoie qu'en SMTP. ` +
        `Utilisez ${scheme}+smtp:// ou ${scheme}://.`
    );
  }

  // Le userinfo peut être encodé (une clé d'API contient parfois des
  // caractères réservés) : on décode systématiquement.
  const decode = (value: string) => {
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  };

  const username = decode(url.username);
  const password = decode(url.password);

  switch (scheme) {
    case 'sendgrid': {
      // La clé est portée par le userinfo ; « default » signifie
      // « utilise l'hôte standard du fournisseur ».
      const key = password || username;
      if (!key) {
        throw new DsnError("MAILER_DSN sendgrid:// sans clé d'API.");
      }
      if (!key.startsWith('SG.')) {
        // Non bloquant : SendGrid a déjà changé de préfixe par le passé.
        console.warn(
          "[mail] La clé SendGrid ne commence pas par « SG. » — vérifiez qu'il " +
            "s'agit bien d'une clé d'API et non d'un mot de passe de compte."
        );
      }
      const port = url.port ? Number(url.port) : 587;
      return {
        host: SENDGRID.host,
        port,
        secure: port === 465,
        auth: { user: SENDGRID.user, pass: key },
        provider: 'SendGrid',
      };
    }

    case 'smtp':
    case 'smtps': {
      if (!url.hostname || url.hostname === 'default') {
        throw new DsnError('MAILER_DSN smtp:// doit préciser un hôte.');
      }
      const secure = scheme === 'smtps';
      const port = url.port ? Number(url.port) : secure ? 465 : 587;
      return {
        host: url.hostname,
        port,
        secure: secure || port === 465,
        auth: username ? { user: username, pass: password } : undefined,
        provider: url.hostname,
      };
    }

    default:
      throw new DsnError(
        `Schéma MAILER_DSN « ${scheme} » non pris en charge. ` +
          `Attendu : sendgrid, smtp, smtps ou ethereal.`
      );
  }
}

/**
 * Masque une clé d'API pour les journaux : on garde de quoi identifier
 * la clé sans la divulguer.
 */
export function maskSecret(secret: string): string {
  if (secret.length <= 12) return '***';
  return `${secret.slice(0, 6)}…${secret.slice(-4)}`;
}
