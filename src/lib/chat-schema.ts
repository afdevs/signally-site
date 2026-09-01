import { z } from 'zod';
import { LOCALES } from '../i18n/config';

/**
 * Contrat d'entrée de la passerelle du chat.
 *
 * Les bornes sont une **seconde copie** de celles du DTO de l'API :
 * `API/src/Dto/Support/SupportSiteChatRequest.php`. Les deux doivent bouger
 * ensemble — un écart ici ne produit pas une erreur de validation propre côté
 * site, il produit un aller-retour réseau qui se fait rejeter par l'API.
 *
 * Aucun champ de transcription : l'historique vit côté API, rejoué depuis sa
 * base à partir du `conversationId`. Un client ne peut donc pas se fabriquer
 * un passé.
 */
export const chatRequestSchema = z.object({
  question: z.string().trim().min(1).max(2000),

  /**
   * Identifiant opaque frappé par le navigateur. Le motif est volontairement
   * étroit : cette valeur voyage jusqu'à l'API, elle ne doit rien porter
   * d'autre qu'un jeton alphanumérique.
   */
  visitorId: z.string().regex(/^[A-Za-z0-9_-]{8,64}$/),

  /** Absent = premier message de la conversation. C'est ce qui déclenche le Turnstile. */
  conversationId: z.string().uuid().optional(),

  locale: z.enum(LOCALES).optional(),

  pageKey: z.string().max(64).optional(),

  /** Jeton Turnstile, présent au seul premier message. */
  turnstileToken: z.string().optional(),
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;

/** Clés de `common.supportChat.errors` du dictionnaire. */
export type ChatErrorKey = 'rateLimit' | 'dailyLimit' | 'tooLong' | 'unavailable' | 'generic';

/**
 * Code d'erreur de l'API → clé du dictionnaire.
 *
 * Le repli sur `generic` est délibéré et couvre tout le reste : `unauthorized`,
 * les `invalid_*`, `empty_question`, un code inconnu d'une version plus récente
 * de l'API. Ce sont des défauts de configuration ou de programmation, pas des
 * situations que le visiteur peut corriger ; lui en dire davantage ne
 * l'aiderait pas et renseignerait un sondeur.
 *
 * `rateLimit` n'apparaît pas ici : il n'existe aucun code d'API correspondant,
 * cette clé appartient à la limite par IP que la passerelle porte elle-même.
 */
export function chatErrorKey(code: string): ChatErrorKey {
  switch (code) {
    case 'daily_limit_reached':
      return 'dailyLimit';
    case 'question_too_long':
      return 'tooLong';
    case 'assistant_unavailable':
    case 'site_chat_disabled':
      return 'unavailable';
    default:
      return 'generic';
  }
}
