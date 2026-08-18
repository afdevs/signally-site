/**
 * Textes de la page Tarifs, simulateur de coût compris.
 *
 * Les tranches (`tiers`) sont des libellés seulement : les montants
 * viennent de `TIERS` dans `src/lib/pricing.ts`, source unique des
 * chiffres, formatés selon la langue.
 */

export const pricing = {
  meta: {
    title: 'Tarifs — un prix unique et dégressif, de 1,50 € à 0,50 € par utilisateur',
    description:
      'Toutes les fonctionnalités incluses dès le premier utilisateur. Tarif dégressif de 1,50 € à 0,50 € HT par utilisateur et par mois. Simulateur de coût en ligne.',
  },

  hero: {
    eyebrow: 'Tarifs',
    title: 'Un tarif unique, dégressif au nombre de collaborateurs.',
    lede:
      'Toutes les fonctionnalités sont incluses dès le premier utilisateur : éditeur, déploiement, équipes, campagnes, statistiques et support. Le prix par utilisateur baisse à mesure que votre organisation grandit.',
  },

  /** Un libellé par palier de `TIERS`, dans le même ordre. */
  tiers: [
    '1 – 10 UTILISATEURS',
    '11 – 50 UTILISATEURS',
    '51 – 100 UTILISATEURS',
    '101 – 500 UTILISATEURS',
    '500 + UTILISATEURS',
  ],
  tierUnit: 'HT / utilisateur / mois',

  simulator: {
    title: 'Simulateur de coût',
    intro:
      'Ajustez le nombre de collaborateurs et vos hypothèses internes : le simulateur compare le coût de Signally au temps passé à gérer les signatures à la main.',
    assumptions: 'HYPOTHÈSES DE GESTION MANUELLE',
    sliders: {
      users: 'Nombre de collaborateurs',
      updates: 'Modifications de signature par an',
      minutes: 'Minutes passées par signature',
      hourly: 'Coût horaire chargé',
    },
    /** Abréviations d'unité, reprises aussi par le script client. */
    units: { minutes: 'min', hours: 'h' },
    resultTag: 'VOTRE TARIF',
    perMonth: 'HT par mois',
    perUser: 'par utilisateur',
    /** Assemblé autour du montant : « HT par mois — soit X par utilisateur ». */
    amountNoteJoin: '— soit',
    metrics: {
      yearly: 'coût annuel Signally',
      manualHours: 'temps annuel en gestion manuelle',
      manualCost: 'coût annuel de la gestion manuelle',
      saved: 'économie estimée la première année',
    },
    cta: 'Commencer gratuitement',
    disclaimer:
      'Estimation indicative, hors taxes. Le temps de gestion manuelle dépend de votre organisation ; ajustez les hypothèses pour refléter votre réalité.',
  },

  /** Variante compacte, sur la page d'accueil. */
  compact: {
    label: 'Vos collaborateurs',
    perMonth: 'HT par mois',
    perUser: 'par utilisateur',
  },

  faq: {
    title: 'Questions fréquentes sur les tarifs',
    items: [
      {
        q: 'Combien coûte Signally pour 50, 100 ou 500 collaborateurs ?',
        a: "Le tarif est dégressif : 1,25 € HT par utilisateur et par mois jusqu'à 50 utilisateurs, 1,00 € jusqu'à 100, 0,75 € jusqu'à 500 et 0,50 € au-delà. Soit 62,50 € par mois pour 50 collaborateurs, 100 € pour 100 et 375 € pour 500. Le simulateur ci-dessus calcule votre montant exact.",
      },
      {
        q: 'Toutes les fonctionnalités sont-elles incluses ?',
        a: "Oui. Éditeur, gabarits illimités, gestion des équipes, add-ins Microsoft et Google, campagnes de bannières, statistiques et support sont inclus quel que soit votre effectif. Il n'existe pas d'édition supérieure.",
      },
      {
        q: 'Le générateur de signature est-il vraiment gratuit ?',
        a: "Oui. Créer une signature dans l'éditeur et l'installer manuellement dans votre messagerie ne coûte rien et ne demande pas de carte bancaire. L'abonnement concerne le déploiement automatique à l'échelle de l'entreprise et les campagnes.",
      },
      {
        q: 'Comment est décompté un utilisateur ?',
        a: 'Un utilisateur correspond à une boîte aux lettres qui reçoit une signature gérée par Signally. Les boîtes partagées et les alias ne sont pas facturés séparément.',
      },
      {
        q: "Que se passe-t-il si mon effectif change en cours d'année ?",
        a: 'Le nombre d’utilisateurs actifs est ajusté ; en franchissant un palier, vous basculez sur le tarif dégressif correspondant.',
      },
      {
        // Laissé tel quel, volontairement : le prototype signale ce point comme
        // à confirmer par Signally. Rien n'est inventé à sa place.
        q: 'Y a-t-il un engagement ?',
        a: "Élément à confirmer par vos soins : durée d'engagement, facturation mensuelle ou annuelle, conditions de résiliation.",
      },
    ],
  },

  cta: {
    title: 'Essayez Signally sans engagement',
    text:
      "L'éditeur est gratuit et ne demande pas de carte bancaire. L'abonnement ne commence qu'au déploiement automatique.",
    secondaryLabel: 'Demander un devis',
  },
};

export type Pricing = typeof pricing;
