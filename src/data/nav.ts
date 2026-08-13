/**
 * Navigation et liens externes.
 *
 * Tous les liens vers l'application Signally passent par ce fichier :
 * si une route dédiée d'inscription apparaît (app.signally.io/signup),
 * il n'y a qu'une constante à changer.
 */

export const APP_URL = 'https://app.signally.io';
export const APP_LOGIN_URL = 'https://app.signally.io/login';

/** Destination du CTA « Créer ma signature » : l'éditeur de gabarits. */
export const APP_SIGNUP_URL = `${APP_URL}/templates`;

export const CONTACT_EMAIL = 'contacts@signally.io';

export const SITE = {
  name: 'Signally',
  url: 'https://www.signally.io',
  locale: 'fr_FR',
  lang: 'fr',
  tagline: 'Customized Email Signature',
  description:
    "Le gestionnaire de signatures mail et de campagnes de bannières pour les entreprises. Données hébergées en France.",
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

/** Les trois méga-menus survolables de l'en-tête du prototype. */
export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'produit',
    label: 'Produit',
    items: [
      {
        label: 'Éditeur de signatures',
        href: '/fonctionnalites',
        desc: 'Gabarits, champs dynamiques, équipes',
      },
      {
        label: 'Campagnes & bannières',
        href: '/campagnes',
        desc: 'Planification et ciblage par équipe',
      },
      {
        label: "Cas d'usage",
        href: '/cas-usage',
        desc: 'DSI, marketing, ressources humaines',
      },
    ],
  },
  {
    id: 'integrations',
    label: 'Intégrations',
    items: [
      {
        label: 'Microsoft 365 & Outlook',
        href: '/integrations/microsoft-365-outlook',
        desc: 'Add-in déployé depuis votre tenant',
      },
      {
        label: 'Google Workspace & Gmail',
        href: '/integrations/google-workspace-gmail',
        desc: "Installation à l'échelle du domaine",
      },
      {
        label: 'Sécurité & RGPD',
        href: '/securite-rgpd',
        desc: 'Données en France, aucun e-mail lu',
      },
    ],
  },
  {
    id: 'ressources',
    label: 'Ressources',
    items: [
      { label: 'Blog', href: '/blog', desc: 'Guides, tutoriels et bonnes pratiques' },
      { label: 'Comparatifs', href: '/comparatifs', desc: 'Grille de choix et alternatives' },
      { label: 'Contact & démo', href: '/contact', desc: 'Vingt minutes avec un expert' },
    ],
  },
];

/** Lien simple, hors méga-menu. */
export const NAV_PRICING: NavLink = { label: 'Tarifs', href: '/tarifs' };

export const FOOTER_COLUMNS: { title: string; items: NavLink[] }[] = [
  {
    title: 'PRODUIT',
    items: [
      { label: 'Éditeur de signatures', href: '/fonctionnalites' },
      { label: 'Campagnes & bannières', href: '/campagnes' },
      { label: 'Gestion des équipes', href: '/fonctionnalites#equipes' },
      { label: 'Tarifs & simulateur', href: '/tarifs' },
    ],
  },
  {
    title: 'INTÉGRATIONS',
    items: [
      { label: 'Microsoft 365 & Outlook', href: '/integrations/microsoft-365-outlook' },
      { label: 'Google Workspace & Gmail', href: '/integrations/google-workspace-gmail' },
      { label: 'Sécurité & RGPD', href: '/securite-rgpd' },
    ],
  },
  {
    title: 'RESSOURCES',
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Comparatifs', href: '/comparatifs' },
      { label: "Cas d'usage", href: '/cas-usage' },
      // « Plan éditorial SEO » retiré volontairement : la page reste
      // accessible par URL mais n'est ni liée ni indexée.
    ],
  },
  {
    title: 'ENTREPRISE',
    items: [
      { label: 'Contact & démo', href: '/contact' },
      { label: 'Connexion', href: APP_LOGIN_URL, external: true },
    ],
  },
];
