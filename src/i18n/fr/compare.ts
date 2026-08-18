/**
 * Textes de la page Comparatifs.
 *
 * Note juridique, valable dans les trois langues : ces contenus nomment
 * des concurrents réels. En France, la publicité comparative est encadrée
 * (art. L122-1 et suivants du code de la consommation) : les comparaisons
 * doivent être objectives, vérifiables, porter sur des caractéristiques
 * essentielles, et ne pas dénigrer. Les descriptions restent volontairement
 * neutres et factuelles ; les pages détaillées ne doivent citer que des
 * informations publiques, sourcées et datées. À faire relire par le service
 * juridique avant mise en ligne — y compris les versions traduites.
 */

export const compare = {
  meta: {
    title: 'Quel logiciel de gestion de signatures mail choisir en 2026 ?',
    description:
      'La grille des huit critères pour comparer honnêtement les outils de signature mail : déploiement, localisation des données, accès aux e-mails, campagnes, prix et réversibilité.',
  },

  hero: {
    eyebrow: 'Comparatifs',
    title: 'Quel logiciel de gestion de signatures mail choisir en 2026 ?',
    lede:
      'Les critères qui comptent vraiment au moment de choisir : le mode de déploiement, la localisation des données, la gestion des campagnes et le coût réel à votre effectif.',
  },

  criteria: {
    title: "Les huit critères d'une grille de comparaison honnête",
    lede:
      "Utilisez cette grille avec n'importe quel éditeur du marché. Nous y indiquons nos propres réponses ; demandez les leurs par écrit.",
    items: [
      {
        n: 'CRITÈRE 01',
        title: 'Mode de déploiement',
        text:
          'Add-in côté client ou règle de transport côté serveur ? La première laisse le collaborateur voir sa signature, la seconde non.',
        answer: 'Signally : add-in Microsoft 365 et Google Workspace, sans reroutage',
      },
      {
        n: 'CRITÈRE 02',
        title: 'Localisation des données',
        text:
          "Où sont hébergés l'annuaire synchronisé et les gabarits ? Un éditeur hors UE vous expose à des régimes extraterritoriaux.",
        answer: 'Signally : hébergement en France',
      },
      {
        n: 'CRITÈRE 03',
        title: 'Accès au contenu des e-mails',
        text:
          "Le fournisseur voit-il passer vos messages ? C'est la question à poser noir sur blanc à votre RSSI.",
        answer: "Signally : aucun contenu d'e-mail lu ni transité",
      },
      {
        n: 'CRITÈRE 04',
        title: 'Campagnes planifiées',
        text:
          'Bannières datées, ciblage par équipe, succession automatique : est-ce inclus ou réservé à une édition supérieure ?',
        answer: 'Signally : inclus dans le tarif unique',
      },
      {
        n: 'CRITÈRE 05',
        title: 'Grille tarifaire publique',
        text:
          'Un prix affiché ou un devis systématique ? La transparence tarifaire change la négociation.',
        answer: 'Signally : grille publique de 1,50 € à 0,50 € HT / utilisateur / mois',
      },
      {
        n: 'CRITÈRE 06',
        title: 'Essai réel sans engagement',
        text: 'Pouvez-vous créer une signature et la tester avant de parler à un commercial ?',
        answer: 'Signally : éditeur accessible gratuitement, sans carte bancaire',
      },
      {
        n: 'CRITÈRE 07',
        title: 'Support et langue',
        text:
          "Une équipe joignable dans votre fuseau et dans votre langue, ou un centre d'aide en anglais ?",
        answer: 'Signally : équipe francophone, support inclus',
      },
      {
        n: 'CRITÈRE 08',
        title: 'Réversibilité',
        text:
          'Récupérez-vous vos gabarits et vos données si vous partez, et sous quel délai sont-ils supprimés ?',
        answer: 'Signally : export et suppression sur demande',
      },
    ],
  },

  alternatives: {
    title: 'Comparaisons détaillées',
    lede:
      "Chaque alternative fait l'objet d'une page dédiée, construite sur la même grille. Ces pages captent les recherches « alternative à » et « comparatif », très qualifiées en fin de parcours d'achat.",
    readMore: 'Lire la comparaison →',
    soon: 'Bientôt publié',
    note:
      'Les pages de comparaison ne sont rédigées qu’à partir d’informations publiques et vérifiables, sourcées et datées, sans affirmation invérifiable sur les produits concurrents.',
    /**
     * `article` désigne un article de blog par sa clé, pas par une URL :
     * la vue ne construit le lien que dans les langues où le blog existe.
     */
    items: [
      {
        title: 'Signally face à Letsignit',
        keyword: 'alternative letsignit',
        desc:
          'Grille de comparaison sur le déploiement, la localisation des données et la tarification.',
        article: null,
      },
      {
        title: 'Signally face à Exclaimer',
        keyword: 'alternative exclaimer',
        desc:
          'Add-in côté client contre traitement côté serveur : ce que cela change pour vos utilisateurs.',
        article: null,
      },
      {
        title: 'Signally face à Signitic',
        keyword: 'alternative signitic',
        desc: 'Deux solutions françaises comparées sur les campagnes, la gouvernance et le prix.',
        article: null,
      },
      {
        title: 'Signally face à MySignature',
        keyword: 'alternative mysignature',
        desc: 'Générateur individuel ou gestion de parc : à quel moment le besoin bascule.',
        article: null,
      },
      {
        title: 'Signally face aux signatures natives Microsoft 365',
        keyword: 'signature native microsoft 365',
        desc:
          'Ce que la règle de transport Exchange ne sait pas faire pour une signature de marque.',
        article: 'add-in-ou-regle-de-transport-exchange',
      },
      {
        title: 'Signally face aux signatures natives Google Workspace',
        keyword: 'signature native google workspace',
        desc: "Les limites du pied de page de la console d'administration Google.",
        article: 'google-workspace-signature',
      },
    ] as { title: string; keyword: string; desc: string; article: string | null }[],
  },

  crosslinks: {
    pricing: {
      label: 'Notre grille tarifaire publique',
      desc: 'De 1,50 € à 0,50 € HT par utilisateur, avec simulateur',
    },
    security: {
      label: 'Notre approche sécurité & RGPD',
      desc: 'Hébergement en France, aucun e-mail lu, réversibilité',
    },
  },

  cta: {
    title: 'Testez Signally avant de comparer sur le papier',
    text:
      "L'éditeur est ouvert : créez une signature complète en quelques minutes, sans carte bancaire.",
    secondaryLabel: 'Poser une question',
  },
};

export type Compare = typeof compare;
