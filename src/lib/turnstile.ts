// Astro charge `.env` dans `import.meta.env`, jamais dans `process.env` : sans
// cet import, TURNSTILE_SECRET_KEY est introuvable côté serveur (voir
// l'en-tête de `mail.ts` pour le détail). dotenv n'écrase pas une variable
// déjà définie : en production, la vraie variable d'environnement reste
// prioritaire.
import 'dotenv/config';

/**
 * Vérification anti-robot Turnstile, appelée uniquement au premier message
 * d'une conversation du chat.
 *
 * Deux asymétries volontaires et opposées :
 *  - clé absente (`TURNSTILE_SECRET_KEY` non configurée) => `true`. Le widget
 *    peut être livré avant que les clés existent ; le durcissement se fait
 *    ensuite par configuration seule, sans redéploiement de code.
 *  - erreur réseau vers Cloudflare (panne, timeout) => `false`. On échoue
 *    fermé : une panne du vérificateur ne doit pas ouvrir la vanne du chat.
 */

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const TIMEOUT_MS = 5000;

export async function verifyTurnstile(
  token: string | undefined,
  ip: string,
  deps: { fetch?: typeof fetch; secret?: string } = {}
): Promise<boolean> {
  const secret = deps.secret ?? process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;

  if (!token) {
    console.error('[turnstile] Jeton absent alors qu’une clé est configurée.');
    return false;
  }

  const fetchFn = deps.fetch ?? fetch;
  const body = new URLSearchParams({ secret, response: token, remoteip: ip });

  try {
    const response = await fetchFn(SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    if (!response.ok) {
      console.error(`[turnstile] Réponse HTTP ${response.status}`);
      return false;
    }

    const data = await response.json();
    if (!data || typeof data !== 'object' || data.success !== true) {
      console.error('[turnstile] Vérification refusée par Cloudflare');
      return false;
    }

    return true;
  } catch (error) {
    // Rassemble timeout (AbortSignal.timeout) et panne réseau : les deux
    // doivent échouer fermé.
    console.error('[turnstile] Erreur réseau vers Cloudflare', error);
    return false;
  }
}
