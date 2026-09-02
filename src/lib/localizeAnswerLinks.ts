/**
 * Frontière de sécurité, pas du formatage : le modèle qui rédige les réponses
 * du chatbot cite des chemins en dur dans son prompt système, mais rien ne
 * garantit qu'il ne fasse pas survivre une cible hors liste blanche jusqu'au
 * rendu HTML. Ce module réécrit les liens markdown `[libellé](cible)` vers la
 * langue demandée, et réduit en texte brut tout lien dont la cible ne se
 * résout pas sur une clé connue — un lien refusé perd son URL, jamais son
 * libellé.
 *
 * Module pur : aucune dépendance à Astro ni au contenu, pour rester
 * exécutable sous `node --test`. C'est pour ça que la carte des slugs de
 * blog (FR → langue cible) entre en paramètre plutôt que d'être résolue ici.
 */

import { blogArticlePath, localizedPath, normalizePath, pageKeyOf } from '../i18n/routes.ts';
import type { Locale } from '../i18n/config.ts';

/**
 * Ce motif doit reconnaître **au moins** tout ce que `parseAnswer` reconnaîtra
 * ensuite comme lien (`/\[([^\]]+)\]\(([^)\s]+)\)/`) : un lien que ce module
 * ne voit pas traverse la liste blanche intacte et redevient un `href` au rendu.
 * D'où les deux alternatives de la cible, et non le simple `[^)]*` :
 *  - `\([^()]*\)` couvre un niveau de parenthèses appariées, sans quoi la
 *    première `)` de `javascript:alert(1)` coupe la capture trop tôt et laisse
 *    une parenthèse orpheline dans la sortie ;
 *  - `[^)\s]` couvre la parenthèse ouvrante **non** appariée que `parseAnswer`
 *    accepte, elle, sans broncher — c'est ce qui attrape les cibles malformées
 *    du genre `https://evil.example](/tarifs)`.
 * Le libellé exclut `]` seul, comme `parseAnswer`, pour que les deux modules
 * délimitent un lien exactement au même endroit.
 */
const LINK_PATTERN = /\[([^\]]*)\]\(((?:\([^()]*\)|[^)\s])*)\)/g;

/** Schéma d'URI (`mailto:`, `javascript:`, `tel:`, ...) : RFC 3986, ALPHA suivi de ALPHA/DIGIT/+/-/. puis ':'. */
const SCHEME_PATTERN = /^[a-zA-Z][a-zA-Z0-9+.-]*:/;

/** Fragment jugé inoffensif : identifiant simple, rien qui ressemble à du HTML ou du script. */
const SAFE_FRAGMENT_PATTERN = /^#[A-Za-z0-9_-]+$/;

export function localizeAnswerLinks(text: string, locale: Locale, blogSlugs: Map<string, string>): string {
  return text.replace(LINK_PATTERN, (_match, label: string, target: string) => {
    const resolved = resolveTarget(target, locale, blogSlugs);
    return resolved === undefined ? label : `[${label}](${resolved})`;
  });
}

/** Résout une cible vers son chemin localisé, ou `undefined` si elle doit être réduite en texte brut. */
function resolveTarget(target: string, locale: Locale, blogSlugs: Map<string, string>): string | undefined {
  // `//host` se résout hors origine dans un navigateur : aussi dangereux qu'un schéma explicite.
  if (target.includes('://') || target.startsWith('//') || SCHEME_PATTERN.test(target)) return undefined;
  if (!target.startsWith('/')) return undefined;

  const hashIndex = target.indexOf('#');
  const withoutFragment = hashIndex === -1 ? target : target.slice(0, hashIndex);
  const rawFragment = hashIndex === -1 ? '' : target.slice(hashIndex);
  const fragment = SAFE_FRAGMENT_PATTERN.test(rawFragment) ? rawFragment : '';

  const queryIndex = withoutFragment.indexOf('?');
  const path = normalizePath(queryIndex === -1 ? withoutFragment : withoutFragment.slice(0, queryIndex));

  if (path.startsWith('/blog/')) {
    const slug = blogSlugs.get(path.slice('/blog/'.length));
    return slug === undefined ? undefined : `${blogArticlePath(slug, locale)}${fragment}`;
  }

  const pageKey = pageKeyOf(path);
  return pageKey === undefined ? undefined : `${localizedPath(pageKey, locale)}${fragment}`;
}
