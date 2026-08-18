/**
 * Accès au blog, par langue.
 *
 * Ces fonctions remplacent l'ancien tableau `PLANNED_ARTICLES`, qui
 * dupliquait en dur les titres et les slugs des quarante articles déjà
 * présents dans la collection. En trois langues cette duplication
 * n'était pas tenable : la collection est désormais la seule source.
 *
 * L'identité d'un article est son `key` — le nom de fichier, commun aux
 * trois langues. Son URL, elle, dépend de la langue.
 */

import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, isLocale, type Locale } from '../i18n/config';
import { blogArticlePath } from '../i18n/routes';
import type { Cluster } from '../data/clusters';

export type BlogEntry = CollectionEntry<'blog'>;

export type Article = {
  /** Nom de fichier, identique dans les trois langues. */
  key: string;
  /** Slug d'URL, propre à la langue. */
  slug: string;
  href: string;
  title: string;
  description: string;
  keyword: string;
  cluster: Cluster;
  entry: BlogEntry;
};

/** « fr/creer-une-signature-mail » → { locale: 'fr', key: 'creer-…' } */
function split(id: string): { locale: Locale; key: string } | undefined {
  const [prefix, ...rest] = id.split('/');
  if (!prefix || rest.length === 0 || !isLocale(prefix)) return undefined;
  return { locale: prefix, key: rest.join('/') };
}

function toArticle(entry: BlogEntry, locale: Locale, key: string): Article {
  return {
    key,
    slug: entry.data.slug,
    href: blogArticlePath(entry.data.slug, locale),
    title: entry.data.title,
    description: entry.data.description,
    keyword: entry.data.keyword,
    cluster: entry.data.cluster,
    entry,
  };
}

/**
 * Articles publiés d'une langue, du plus récent au plus ancien.
 * Les brouillons sont exclus, comme avant.
 */
export async function articlesIn(locale: Locale): Promise<Article[]> {
  const entries = await getCollection('blog', ({ data }) => !data.draft);
  return entries
    .flatMap((entry) => {
      const parsed = split(entry.id);
      return parsed && parsed.locale === locale ? [toArticle(entry, locale, parsed.key)] : [];
    })
    .sort((a, b) => b.entry.data.pubDate.valueOf() - a.entry.data.pubDate.valueOf());
}

/** Articles d'une grappe, hors article courant. */
export async function articlesInCluster(
  locale: Locale,
  cluster: Cluster,
  exceptKey?: string,
): Promise<Article[]> {
  const all = await articlesIn(locale);
  return all.filter((a) => a.cluster === cluster && a.key !== exceptKey);
}

/** Un article par sa clé, dans une langue donnée. */
export async function articleByKey(locale: Locale, key: string): Promise<Article | undefined> {
  const all = await articlesIn(locale);
  return all.find((a) => a.key === key);
}

/**
 * Ordre de publication du plan éditorial, calé sur le français.
 *
 * Les traductions héritent de cet ordre plutôt que du leur : la
 * couverture éditoriale est décidée une fois, pas trois.
 */
export async function articlesInEditorialOrder(locale: Locale): Promise<Article[]> {
  const reference = await articlesIn(DEFAULT_LOCALE);
  if (locale === DEFAULT_LOCALE) return reference;

  const translated = new Map((await articlesIn(locale)).map((a) => [a.key, a]));
  return reference.flatMap((a) => {
    const match = translated.get(a.key);
    return match ? [match] : [];
  });
}
