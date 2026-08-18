/**
 * Socle du multilingue : liste des langues et métadonnées associées.
 *
 * Le français est la langue par défaut et reste servi à la racine
 * (`/tarifs`), l'anglais et l'espagnol sont préfixés (`/en/pricing`,
 * `/es/precios`). Ce choix est déclaré une fois ici et une fois dans le
 * bloc `i18n` d'`astro.config.mjs` : les deux doivent rester alignés.
 */

export const LOCALES = ['fr', 'en', 'es'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'fr';

/**
 * Langues réellement publiées, dans l'ordre d'affichage du sélecteur.
 *
 * Distinct de `LOCALES` volontairement : la traduction se fait par lots,
 * et tant qu'une langue n'est pas complète elle ne doit ni apparaître
 * dans le sélecteur, ni être annoncée en `hreflang` — annoncer à Google
 * une page qui n'existe pas encore est pire que de ne rien annoncer.
 *
 * Les onze pages marketing existent désormais dans les trois langues.
 * Le blog, lui, reste français : c'est `Satellites.astro` et la page
 * Comparatifs qui masquent ses liens hors français, pas cette liste.
 */
export const PUBLISHED_LOCALES: readonly Locale[] = ['fr', 'en', 'es'];

export type LocaleMeta = {
  /** Libellé court du sélecteur de langue. */
  label: string;
  /** Nom de la langue dans la langue elle-même, pour l'attribut title. */
  name: string;
  /** Attribut `lang` de <html> et valeur `hreflang`. */
  htmlLang: string;
  /** `og:locale` d'Open Graph. */
  ogLocale: string;
  /** Étiquette BCP 47 pour Intl.DateTimeFormat / Intl.NumberFormat. */
  intlLocale: string;
};

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  fr: {
    label: 'FR',
    name: 'Français',
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
    intlLocale: 'fr-FR',
  },
  en: {
    label: 'EN',
    name: 'English',
    htmlLang: 'en',
    ogLocale: 'en_US',
    intlLocale: 'en-US',
  },
  es: {
    label: 'ES',
    name: 'Español',
    htmlLang: 'es',
    ogLocale: 'es_ES',
    intlLocale: 'es-ES',
  },
};

/**
 * Langues dans lesquelles le blog existe.
 *
 * Les 40 articles sont désormais écrits dans les trois langues. Ce
 * drapeau reste en place : il pilote l'affichage des liens vers le blog
 * dans la navigation, les articles satellites et les comparatifs, et
 * c'est le seul endroit à modifier si une langue devait être retirée ou
 * ajoutée.
 */
export const BLOG_LOCALES: readonly Locale[] = ['fr', 'en', 'es'];

export function hasBlog(locale: Locale): boolean {
  return BLOG_LOCALES.includes(locale);
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Préfixe d'URL d'une langue : '' pour le français, '/en' et '/es' sinon. */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '' : `/${locale}`;
}

/**
 * Langue déduite d'un chemin. Sert de repli lorsque `Astro.currentLocale`
 * n'est pas exploitable (pages rendues à la demande, scripts de contrôle).
 */
export function localeFromPath(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : DEFAULT_LOCALE;
}
