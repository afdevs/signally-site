/** Textes de la page Fonctionnalités (éditeur de signatures). */

export const features = {
  meta: {
    title: "Éditeur de signatures mail — créer et déployer un modèle d'entreprise",
    description:
      "L'éditeur Signally : gabarits verrouillés, champs dynamiques depuis votre annuaire, prévisualisation Outlook et Gmail, déploiement par équipe. Générateur gratuit.",
  },

  hero: {
    eyebrow: 'Générateur de signature mail',
    title:
      "Créer une signature mail professionnelle, puis la dupliquer sur toute l'entreprise.",
    lede:
      "L'éditeur Signally couvre les deux moments : la conception d'un modèle de signature au design impeccable, et sa distribution à chaque collaborateur avec ses propres informations.",
    cta: "Ouvrir l'éditeur gratuitement",
  },

  grid: {
    title: "Tout ce qu'un gestionnaire de signatures d'e-mail doit savoir faire",
    /**
     * `id` alimente l'ancre #equipes, cible du lien « Gestion des
     * équipes » du pied de page. Il ne se traduit pas : le fragment
     * reste identique dans les trois langues.
     */
    items: [
      {
        title: 'Éditeur visuel',
        text:
          'Glissez vos blocs, réglez les couleurs, les polices et les séparateurs. Aucune ligne de HTML à écrire.',
      },
      {
        title: 'Bibliothèque de templates',
        text:
          'Des modèles de signature par secteur, prêts à personnaliser aux couleurs de votre marque.',
      },
      {
        title: 'Champs dynamiques',
        text:
          'Nom, fonction, service, téléphone, bureau : les champs se remplissent depuis votre annuaire Entra ID ou Google Directory.',
      },
      {
        id: 'equipes',
        title: 'Équipes & groupes',
        text:
          'Un gabarit par filiale, marque, service ou pays. Les collaborateurs héritent du bon modèle automatiquement.',
      },
      {
        title: 'Verrouillage administrateur',
        text:
          "Vous décidez de ce qu'un collaborateur peut modifier — et de ce qui reste intouchable : logo, mentions légales, disclaimer.",
      },
      {
        title: 'Réseaux sociaux & CTA',
        text:
          'Icônes sociales, bouton de prise de rendez-vous, lien vers un avis client : chaque signature devient actionnable.',
      },
      {
        title: 'Prévisualisation multi-clients',
        text:
          'Rendu contrôlé sur Outlook Windows et Mac, Outlook Web, Gmail, Apple Mail et mobile avant tout déploiement.',
      },
      {
        title: 'vCard & QR code',
        text:
          "Ajoutez une carte de visite numérique ou un QR code d'ajout de contact directement dans la signature.",
      },
      {
        title: 'Statistiques',
        text:
          'Suivi des clics sur les liens et les bannières, par campagne, par équipe et par période.',
      },
    ] as { id?: string; title: string; text: string }[],
  },

  steps: {
    title: 'De la création au déploiement, en quatre étapes',
    items: [
      {
        n: '01',
        title: 'Vous créez le gabarit',
        text: "Depuis un template ou une page blanche, aux couleurs de votre charte.",
      },
      {
        n: '02',
        title: "Vous connectez l'annuaire",
        text:
          'Microsoft 365 ou Google Workspace : les collaborateurs et leurs données remontent seuls.',
      },
      {
        n: '03',
        title: 'Vous attribuez par équipe',
        text: "Chaque groupe reçoit son gabarit et, si besoin, ses propres bannières.",
      },
      {
        n: '04',
        title: "L'add-in fait le reste",
        text: 'La signature apparaît à la rédaction du message, à jour, pour tout le monde.',
      },
    ],
  },

  faq: {
    title: "Questions fréquentes sur l'éditeur de signatures",
    items: [
      {
        q: 'Comment créer une signature mail professionnelle ?',
        a: "Partez d'un modèle de la bibliothèque ou d'une page blanche, ajoutez votre logo, vos coordonnées et vos réseaux sociaux, puis remplacez les informations personnelles par des champs dynamiques. Le gabarit devient alors valable pour toute l'entreprise : chaque collaborateur verra ses propres données.",
      },
      {
        q: 'Faut-il savoir coder en HTML ?',
        a: "Non. L'éditeur est entièrement visuel. Le HTML généré est optimisé pour les clients de messagerie, ce qui évite les erreurs classiques d'un code écrit à la main : tableaux mal fermés, images non redimensionnées, styles ignorés par Outlook.",
      },
      {
        q: 'Puis-je empêcher les collaborateurs de modifier leur signature ?',
        a: "Oui. L'administrateur définit champ par champ ce qui est modifiable et ce qui est verrouillé. Le logo, les mentions légales et la structure du gabarit restent intouchables, même si vous laissez le collaborateur ajuster son numéro de téléphone direct.",
      },
      {
        q: 'Peut-on avoir plusieurs signatures par collaborateur ?',
        a: 'Oui : une signature de premier message et une signature de réponse plus courte, par exemple, ou une signature par marque pour les commerciaux qui gèrent plusieurs entités.',
      },
      {
        q: 'Comment vérifier le rendu avant de déployer ?',
        a: "Chaque gabarit dispose d'une prévisualisation multi-clients : Outlook Windows et Mac, Outlook Web, Gmail, Apple Mail, mobiles iOS et Android. Vous pouvez également vous envoyer un test avant publication.",
      },
      {
        q: "Les informations viennent-elles automatiquement de l'annuaire ?",
        a: 'Oui. Les champs dynamiques se remplissent depuis Microsoft Entra ID ou Google Directory. Quand une fonction change dans l’annuaire, la signature suit sans intervention.',
      },
    ],
  },

  cta: {
    title: 'Créez votre première signature avec Signally',
    text:
      "L'éditeur est ouvert et gratuit. Le déploiement à toute l'entreprise vient ensuite, en quelques minutes.",
    primaryLabel: "Ouvrir l'éditeur",
  },
};

export type Features = typeof features;
