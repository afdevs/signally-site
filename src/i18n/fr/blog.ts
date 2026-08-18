/**
 * Textes du blog : page d'index, gabarit d'article, et libellés des
 * sept grappes.
 *
 * Les clés de `clusters` sont les identifiants techniques français du
 * `z.enum` des frontmatters ; seule leur valeur est traduite.
 */

export const blog = {
  index: {
    meta: {
      title: 'Blog — tout sur la signature mail en entreprise',
      description:
        'Guides pratiques, tutoriels Microsoft 365 et Google Workspace, cadrage RGPD et idées de campagnes de bannières. Le blog Signally.',
    },
    eyebrow: 'Le blog Signally',
    title:
      'Tout sur la signature mail : gestion, déploiement, conformité et communication.',
    lede:
      'Guides pratiques, tutoriels Microsoft 365 et Google Workspace, cadrage RGPD et idées de campagnes. Quarante articles organisés en sept piliers thématiques.',
    filterAria: 'Filtrer par thématique',
    all: 'Toutes',
    /** Compteur de résultats : « 12 articles ». */
    countOne: 'article',
    countMany: 'articles',
    empty: 'Les premiers articles arrivent très bientôt.',
    emptyFiltered: 'Aucun article dans cette thématique pour le moment.',
  },

  article: {
    breadcrumbAria: "Fil d'Ariane",
    home: 'Accueil',
    blog: 'Blog',
    /** Ligne de méta : « GUIDE · MIS À JOUR EN MARS 2026 · 6 MIN DE LECTURE ». */
    kind: 'GUIDE',
    updatedOn: 'MIS À JOUR EN',
    readingTime: 'MIN DE LECTURE',
    brief: 'EN BREF',
    faqTitle: 'Questions fréquentes',
    tocAria: 'Sommaire',
    toc: 'SOMMAIRE',
    internalLinks: 'MAILLAGE INTERNE',
    pillarPrefix: 'Page pilier :',
    securityLink: 'Sécurité, RGPD et données en France →',
    pricingLink: 'Simulateur de coût →',
    campaignsLink: 'Campagnes de bannières →',
    sameCluster: 'DANS LA MÊME THÉMATIQUE',
    convert: {
      title: 'Déployez votre signature avec Signally',
      text:
        "Créez votre gabarit gratuitement, puis déployez-le à toute l'organisation depuis votre console d'administration.",
    },
    side: {
      title: "Essayez l'éditeur",
      text: 'Créez une signature complète en cinq minutes, sans carte bancaire.',
      cta: "Ouvrir l'éditeur",
    },
  },

  /** Libellé affiché de chaque grappe. */
  clusters: {
    'Microsoft 365 & Outlook': 'Microsoft 365 & Outlook',
    'Google Workspace & Gmail': 'Google Workspace & Gmail',
    'Créer sa signature': 'Créer sa signature',
    'Gestion & gouvernance': 'Gestion & gouvernance',
    'Campagnes & bannières': 'Campagnes & bannières',
    'RGPD & sécurité': 'RGPD & sécurité',
    'Comparatifs & alternatives': 'Comparatifs & alternatives',
  },

  /** Description courte, affichée sur les cartes du blog. */
  clusterDesc: {
    'Microsoft 365 & Outlook': 'Déploiement, add-in, Exchange et annuaire Entra ID.',
    'Google Workspace & Gmail':
      "Console d'administration, unités organisationnelles et Gmail.",
    'Créer sa signature': 'Éditeur, modèles, HTML et bonnes pratiques de conception.',
    'Gestion & gouvernance': 'Onboarding, filiales, charte et coût de la gestion manuelle.',
    'Campagnes & bannières': 'Planification, ciblage et mesure de vos bannières.',
    'RGPD & sécurité': "Conformité, souveraineté et périmètre d'accès aux données.",
    'Comparatifs & alternatives': 'Critères de choix et panorama du marché.',
  },

  /** Ancre descriptive du lien montant vers la page pilier. */
  pillarAnchor: {
    'Microsoft 365 & Outlook': "l'add-in Microsoft 365",
    'Google Workspace & Gmail': "l'add-on Google Workspace",
    'Créer sa signature': 'éditeur de signatures Signally',
    'Gestion & gouvernance': 'gestion des signatures par équipe',
    'Campagnes & bannières': 'campagnes de bannières de signature',
    'RGPD & sécurité': 'approche sécurité et RGPD de Signally',
    'Comparatifs & alternatives': 'comparatif des logiciels de signature mail',
  },
};

export type Blog = typeof blog;
