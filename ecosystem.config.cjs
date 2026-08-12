/**
 * Configuration PM2 — site marketing Signally.
 *
 * Extension .cjs volontaire : package.json déclare « type: module », donc
 * un fichier .js serait interprété comme un module ES et PM2 ne saurait
 * pas le lire.
 *
 * Démarrage :
 *   npm ci && npm run build
 *   pm2 start ecosystem.config.cjs --env production
 *   pm2 save
 *
 * Secrets : ce fichier est versionné dans un dépôt public, il ne doit
 * donc contenir aucune clé. La configuration d'envoi est lue depuis un
 * fichier `.env` placé dans `cwd` (chargé par dotenv, importé en tête de
 * src/lib/mail.ts), ou depuis les vraies variables d'environnement du
 * serveur — qui restent prioritaires, dotenv n'écrasant jamais une
 * variable déjà définie.
 *
 *   MAILER_DSN   sendgrid://<clé>@default
 *   MAIL_FROM    "Signally <no-reply@signally.io>"
 *   MAIL_TO      contacts@signally.io
 */

module.exports = {
  apps: [
    {
      name: 'signally-site',
      script: './dist/server/entry.mjs',
      cwd: __dirname,

      /**
       * Fork, une seule instance — surtout pas le mode cluster.
       *
       * La limitation de débit du formulaire de contact
       * (src/lib/rate-limit.ts) compte les requêtes dans la mémoire du
       * processus. Avec N instances, chacune tiendrait son propre
       * compteur et la limite réelle serait N fois plus permissive.
       * Passer en cluster suppose d'abord un compteur partagé (Redis).
       */
      exec_mode: 'fork',
      instances: 1,

      env: {
        NODE_ENV: 'production',
        // 127.0.0.1 : le service n'est joignable que par le reverse
        // proxy local. Mettre 0.0.0.0 uniquement si le port doit être
        // exposé directement, ce qui n'est pas recommandé.
        HOST: '127.0.0.1',
        PORT: 4322,
      },

      // `pm2 start ecosystem.config.cjs --env production` charge ce bloc
      // par-dessus le précédent.
      env_production: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: 4322,
      },

      autorestart: true,
      // Évite la boucle de redémarrage si la configuration est fautive
      // (DSN illisible, port déjà pris) : au-delà, PM2 marque « errored ».
      max_restarts: 10,
      min_uptime: '20s',
      restart_delay: 2000,

      // Le serveur est léger ; au-delà, on redémarre plutôt que de fuir.
      max_memory_restart: '400M',

      // Laisse le temps aux requêtes en cours de se terminer.
      kill_timeout: 5000,

      watch: false,

      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
    },
  ],
};
