/**
 * Navigation et liens externes.
 *
 * Tous les liens vers l'application Signally passent par ce fichier :
 * si une route dédiée d'inscription apparaît (app.signally.io/signup),
 * il n'y a qu'une constante à changer.
 *
 * Depuis le passage au multilingue, ce fichier ne porte plus que la
 * *structure* des menus — quels groupes, quelles pages, dans quel ordre.
 * Les libellés viennent du dictionnaire (`src/i18n/`) et les chemins de
 * la table de routes (`src/i18n/routes.ts`), afin qu'aucune URL ni aucun
 * texte ne soit écrit en dur ici.
 */

import { getDictionary } from '../i18n';
import { hasBlog, type Locale } from '../i18n/config';
import { localizedPath, type PageKey } from '../i18n/routes';

export const APP_URL = 'https://app.signally.io';
export const APP_LOGIN_URL = 'https://app.signally.io/login';

/** Destination du CTA « Créer ma signature » : l'éditeur de gabarits. */
export const APP_SIGNUP_URL = `${APP_URL}/templates`;

export const CONTACT_EMAIL = 'contacts@signally.io';

/**
 * Identité du site, indépendante de la langue. Le nom de marque et le
 * domaine ne se traduisent pas ; la description, la signature et la
 * langue du document sont dans le dictionnaire.
 */
export const SITE = {
  name: 'Signally',
  url: 'https://www.signally.io',
} as const;

export type NavLink = {
  label: string;
  href: string;
  desc?: string;
  external?: boolean;
};

export type NavGroup = {
  id: string;
  label: string;
  items: NavLink[];
};

/** Les trois méga-menus survolables de l'en-tête, par clé de page. */
const NAV_STRUCTURE = [
  { id: 'product', items: ['features', 'campaigns', 'useCases'] },
  { id: 'integrations', items: ['microsoft', 'google', 'security'] },
  { id: 'resources', items: ['blog', 'compare', 'contact'] },
] as const satisfies readonly { id: 'product' | 'integrations' | 'resources'; items: readonly PageKey[] }[];

/** Le blog n'est proposé que dans les langues où il existe. */
function visibleIn(locale: Locale): (key: PageKey) => boolean {
  return (key) => key !== 'blog' || hasBlog(locale);
}

export function navGroups(locale: Locale): NavGroup[] {
  const { common } = getDictionary(locale);
  const keep = visibleIn(locale);
  return NAV_STRUCTURE.map((group) => ({
    id: group.id,
    label: common.nav[group.id],
    items: group.items.filter(keep).map((key) => ({
      label: common.pages[key].label,
      href: localizedPath(key, locale),
      desc: common.pages[key].desc,
    })),
  }));
}

/** Lien simple, hors méga-menu. */
export function navPricing(locale: Locale): NavLink {
  const { common } = getDictionary(locale);
  return { label: common.pages.pricing.label, href: localizedPath('pricing', locale) };
}

export function footerColumns(locale: Locale): { title: string; items: NavLink[] }[] {
  const { common } = getDictionary(locale);
  const link = (key: PageKey, label = common.pages[key].label): NavLink => ({
    label,
    href: localizedPath(key, locale),
  });

  return [
    {
      title: common.footer.columns.product,
      items: [
        link('features'),
        link('campaigns'),
        // Ancre interne à la page Fonctionnalités : le fragment est
        // stable d'une langue à l'autre, seul le chemin change.
        { label: common.footer.teams, href: `${localizedPath('features', locale)}#equipes` },
        link('pricing', common.footer.pricingFull),
      ],
    },
    {
      title: common.footer.columns.integrations,
      items: [link('microsoft'), link('google'), link('security')],
    },
    {
      title: common.footer.columns.resources,
      // « Plan éditorial SEO » retiré volontairement : la page reste
      // accessible par URL mais n'est ni liée ni indexée.
      items: (['blog', 'compare', 'useCases'] as const)
        .filter(visibleIn(locale))
        .map((key) => link(key)),
    },
    {
      title: common.footer.columns.company,
      items: [
        link('contact'),
        { label: common.actions.login, href: APP_LOGIN_URL, external: true },
      ],
    },
  ];
}
