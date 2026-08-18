/**
 * Textes partagés par toutes les pages : en-tête, pied de page, bandeau
 * d'appel à l'action, chaînes d'accessibilité du gabarit.
 *
 * Le français fait référence : `src/i18n/en/common.ts` et `es/common.ts`
 * sont typés `satisfies typeof common`, donc toute clé ajoutée ici doit
 * être traduite ailleurs sous peine d'échec de `npm run check`.
 */

export const common = {
  site: {
    tagline: 'Customized Email Signature',
    description:
      "Le gestionnaire de signatures mail et de campagnes de bannières pour les entreprises. Données hébergées en France.",
  },

  actions: {
    signup: 'Créer ma signature',
    login: 'Connexion',
    demo: 'Voir une démo',
    requestDemo: 'Demander une démo',
  },

  layout: {
    skipToContent: 'Aller au contenu principal',
    homeAria: 'Signally — accueil',
    mainNavAria: 'Navigation principale',
    mobileNavAria: 'Navigation mobile',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    languageAria: 'Choisir la langue',
  },

  /** Libellés des pages. La structure des menus vit dans `src/data/nav.ts`. */
  pages: {
    home: { label: 'Accueil', desc: '' },
    features: {
      label: 'Éditeur de signatures',
      desc: 'Gabarits, champs dynamiques, équipes',
    },
    campaigns: {
      label: 'Campagnes & bannières',
      desc: 'Planification et ciblage par équipe',
    },
    useCases: {
      label: "Cas d'usage",
      desc: 'DSI, marketing, ressources humaines',
    },
    pricing: { label: 'Tarifs', desc: 'Tarif dégressif et simulateur' },
    compare: {
      label: 'Comparatifs',
      desc: 'Grille de choix et alternatives',
    },
    security: {
      label: 'Sécurité & RGPD',
      desc: 'Données en France, aucun e-mail lu',
    },
    contact: {
      label: 'Contact & démo',
      desc: 'Vingt minutes avec un expert',
    },
    blog: { label: 'Blog', desc: 'Guides, tutoriels et bonnes pratiques' },
    microsoft: {
      label: 'Microsoft 365 & Outlook',
      desc: 'Add-in déployé depuis votre tenant',
    },
    google: {
      label: 'Google Workspace & Gmail',
      desc: "Installation à l'échelle du domaine",
    },
  },

  nav: {
    product: 'Produit',
    integrations: 'Intégrations',
    resources: 'Ressources',
  },

  footer: {
    columns: {
      product: 'PRODUIT',
      integrations: 'INTÉGRATIONS',
      resources: 'RESSOURCES',
      company: 'ENTREPRISE',
    },
    /** Libellés propres au pied de page, plus explicites que ceux du menu. */
    teams: 'Gestion des équipes',
    pricingFull: 'Tarifs & simulateur',
    badges: 'HÉBERGEMENT EN FRANCE · RGPD · AUCUN E-MAIL LU',
  },

  sections: {
    /** Libellé du bandeau de logos clients, lu par les lecteurs d'écran. */
    marqueeAria: 'Ils utilisent Signally',
    /** Titre par défaut de la liste d'articles satellites d'une page pilier. */
    satellites: 'Aller plus loin',
  },

  cta: {
    title: 'Commencez avec Signally',
    text:
      "Créez votre signature en ligne, gratuitement et sans carte bancaire. Le déploiement à toute l'entreprise ne prend que quelques minutes de plus.",
  },
};

export type Common = typeof common;
