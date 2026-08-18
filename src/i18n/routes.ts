/**
 * Table des URLs par langue.
 *
 * Source unique des chemins internes : plus aucun `href` en dur dans les
 * composants. C'est ce qui permet des slugs traduits (`/tarifs`,
 * `/en/pricing`, `/es/precios`) tout en gardant un seul corps de page.
 *
 * Toute entrée ajoutée ici doit avoir son fichier de route correspondant
 * sous `src/pages/`, sans quoi `npm run check:links` signalera un lien mort.
 */

import { BLOG_LOCALES, DEFAULT_LOCALE, LOCALES, type Locale } from './config';

export const PAGE_KEYS = [
  'home',
  'features',
  'campaigns',
  'useCases',
  'pricing',
  'compare',
  'security',
  'contact',
  'blog',
  'microsoft',
  'google',
] as const;

export type PageKey = (typeof PAGE_KEYS)[number];

/**
 * Chemins sans préfixe de langue. Le préfixe est ajouté par
 * `localizedPath` : ces valeurs restent lisibles et comparables.
 * `home` vaut '' et non '/' pour que la concaténation reste uniforme.
 */
const PATHS: Record<PageKey, Record<Locale, string>> = {
  home: {
    fr: '',
    en: '',
    es: '',
  },
  features: {
    fr: '/fonctionnalites',
    en: '/features',
    es: '/funcionalidades',
  },
  campaigns: {
    fr: '/campagnes',
    en: '/campaigns',
    es: '/campanas',
  },
  useCases: {
    fr: '/cas-usage',
    en: '/use-cases',
    es: '/casos-de-uso',
  },
  pricing: {
    fr: '/tarifs',
    en: '/pricing',
    es: '/precios',
  },
  compare: {
    fr: '/comparatifs',
    en: '/comparisons',
    es: '/comparativas',
  },
  security: {
    fr: '/securite-rgpd',
    en: '/security-gdpr',
    es: '/seguridad-rgpd',
  },
  contact: {
    fr: '/contact',
    en: '/contact',
    es: '/contacto',
  },
  blog: {
    fr: '/blog',
    en: '/blog',
    es: '/blog',
  },
  microsoft: {
    fr: '/integrations/microsoft-365-outlook',
    en: '/integrations/microsoft-365-outlook',
    es: '/integraciones/microsoft-365-outlook',
  },
  google: {
    fr: '/integrations/google-workspace-gmail',
    en: '/integrations/google-workspace-gmail',
    es: '/integraciones/google-workspace-gmail',
  },
};

/** Chemin absolu d'une page dans une langue, ex. localizedPath('pricing', 'es') → '/es/precios'. */
export function localizedPath(key: PageKey, locale: Locale): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return `${prefix}${PATHS[key][locale]}` || '/';
}

/**
 * Langues dans lesquelles une page existe réellement.
 *
 * Toutes les pages marketing sont traduites ; seul le blog ne l'est pas
 * encore. C'est ce qui empêche `Base.astro` d'annoncer en `hreflang`
 * un /en/blog qui renverrait une 404.
 */
export function localesWithPage(key: PageKey): readonly Locale[] {
  return key === 'blog' ? BLOG_LOCALES : LOCALES;
}

/** Chemin d'un article de blog, ex. '/en/blog/mon-slug'. */
export function blogArticlePath(slug: string, locale: Locale): string {
  return `${localizedPath('blog', locale)}/${slug}`;
}

/** Index inverse chemin → clé de page, construit une fois au chargement du module. */
const KEY_BY_PATH = new Map<string, PageKey>();
for (const key of PAGE_KEYS) {
  for (const locale of LOCALES) {
    KEY_BY_PATH.set(localizedPath(key, locale), key);
  }
}

/** Normalise un pathname : retire le slash final, garde '/' pour la racine. */
export function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/**
 * Clé de page correspondant à un chemin, ou `undefined` pour les pages
 * hors table (article de blog, 404, plan-seo). Le sélecteur de langue
 * s'appuie dessus pour renvoyer vers la page équivalente plutôt que vers
 * l'accueil.
 */
export function pageKeyOf(pathname: string): PageKey | undefined {
  return KEY_BY_PATH.get(normalizePath(pathname));
}

/**
 * Équivalent d'un chemin dans une autre langue.
 *
 * Repli sur l'accueil de la langue cible dans deux cas : le chemin n'a
 * pas de clé connue (article de blog, 404), ou la page existe bien mais
 * pas encore dans cette langue. Sans le second test, le sélecteur de
 * langue de /blog proposerait un /en/blog inexistant.
 */
export function translatePath(pathname: string, target: Locale): string {
  const key = pageKeyOf(pathname);
  const reachable = key !== undefined && localesWithPage(key).includes(target);
  return reachable ? localizedPath(key, target) : localizedPath('home', target);
}
