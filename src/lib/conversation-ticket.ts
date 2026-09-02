// Astro charge `.env` dans `import.meta.env`, jamais dans `process.env` : sans
// cet import, `SITE_CHAT_SHARED_SECRET` est introuvable côté serveur et tout
// ticket serait refusé sur un déploiement pourtant correct (voir l'en-tête de
// `mail.ts` pour le détail). À placer en premier import.
import 'dotenv/config';
import { createHmac, timingSafeEqual } from 'node:crypto';

/**
 * Ticket de conversation : la preuve, tenue par la passerelle seule, qu'un
 * `conversationId` vient bien d'elle.
 *
 * Il existe parce que le garde Turnstile ne portait sur rien. L'API démarre
 * **délibérément** une conversation neuve pour un `conversationId` inconnu —
 * voir `resolveConversation()` dans `SupportSiteChatController.php`, où
 * répondre « inconnu » révélerait l'existence d'un uuid. Côté site, le seul
 * test était `conversationId === undefined` : n'importe quel uuid tiré au
 * hasard sautait donc le défi, et le quota journalier de l'API, indexé sur un
 * `visitorId` que le client choisit lui-même, ne rattrapait rien.
 *
 * Le ticket est lié au couple (conversation, visiteur) : celui d'un visiteur
 * ne sert pas à un autre. Il est sans état — aucune table à tenir, rien à
 * perdre au redémarrage de PM2 — et ne coûte aucun appel réseau, là où
 * redemander un jeton Turnstile à chaque tour en coûterait un par question.
 *
 * Ce n'est pas un jeton d'autorisation : la propriété d'une conversation reste
 * vérifiée en base par l'API (`findOwnedByVisitor`). Le ticket ne décide que
 * d'une chose, l'exemption de défi.
 */

/** Douze heures : une conversation vit dans un onglet, pas dans une semaine. */
const TTL_SECONDS = 12 * 60 * 60;

const VERSION = 'v1';

/**
 * Clé dérivée, jamais le secret partagé lui-même : deux usages d'un même
 * secret ne doivent pas pouvoir se prêter leurs signatures. Ailleurs, ce
 * secret ne sert qu'en en-tête `X-Signally-Site-Key`.
 */
function derivedKey(secret: string): Buffer {
  return createHmac('sha256', secret).update(`signally.site-chat.ticket.${VERSION}`).digest();
}

/**
 * Les séparateurs sont sûrs sans échappement : `visitorId` est borné à
 * `[A-Za-z0-9_-]` et `conversationId` à un uuid par `chatRequestSchema`, donc
 * aucun des deux ne peut contenir de point ni déplacer la frontière.
 */
function sign(secret: string, conversationId: string, visitorId: string, expiry: number): string {
  return createHmac('sha256', derivedKey(secret))
    .update(`${VERSION}.${conversationId}.${visitorId}.${expiry}`)
    .digest('base64url');
}

/**
 * Émet le ticket qui accompagne une réponse. `undefined` quand le secret
 * manque : l'appel qui vient de réussir n'a pas pu avoir lieu sans lui, mais
 * le type le dit plutôt que de le supposer.
 */
export function issueConversationTicket(
  conversationId: string,
  visitorId: string,
  secret: string | undefined = process.env.SITE_CHAT_SHARED_SECRET,
): string | undefined {
  if (!secret) return undefined;

  const expiry = Math.floor(Date.now() / 1000) + TTL_SECONDS;
  return `${VERSION}.${expiry}.${sign(secret, conversationId, visitorId, expiry)}`;
}

/**
 * Vrai seulement si ce ticket a été émis ici, pour ce couple, et n'a pas
 * expiré. Échoue fermé : secret absent, format inattendu, version inconnue,
 * expiration illisible — autant de non, et le visiteur repasse par Turnstile.
 */
export function verifyConversationTicket(
  ticket: string | undefined,
  conversationId: string,
  visitorId: string,
  secret: string | undefined = process.env.SITE_CHAT_SHARED_SECRET,
): boolean {
  if (!secret || ticket === undefined) return false;

  const parts = ticket.split('.');
  if (parts.length !== 3) return false;

  const [version, rawExpiry, mac] = parts as [string, string, string];
  if (version !== VERSION) return false;

  const expiry = Number(rawExpiry);
  if (!Number.isSafeInteger(expiry) || expiry * 1000 <= Date.now()) return false;

  const provided = Buffer.from(mac);
  const expected = Buffer.from(sign(secret, conversationId, visitorId, expiry));

  // Longueurs comparées d'abord : `timingSafeEqual` lève sur deux tampons de
  // tailles différentes, et une signature tronquée est un cas courant.
  return provided.length === expected.length && timingSafeEqual(provided, expected);
}
