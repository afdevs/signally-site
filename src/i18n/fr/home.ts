/**
 * Textes de la page d'accueil.
 *
 * La FAQ vit ici plutôt que dans `src/data/faq.ts` : elle appartient à
 * la page, et la garder avec elle permet de traduire une page d'un seul
 * tenant. `src/data/faq.ts` ne conserve que le type et le générateur de
 * données structurées, communs à toutes les pages.
 */

export const home = {
  meta: {
    title: 'Signally — Signatures mail et campagnes de bannières pour les entreprises',
    description:
      "Créez, déployez et planifiez les signatures mail de toute l'entreprise depuis une seule interface. Add-ins Microsoft 365 et Google Workspace, données hébergées en France.",
  },

  hero: {
    badge: 'Signatures mail & campagnes',
    title: 'Vos signatures pour',
    /**
     * Quatre entrées et non trois : le keyframe `sgWord` boucle en
     * revenant au premier mot, qui doit donc être répété à la fin.
     */
    rotating: [
      "Toute l'entreprise.",
      'Toutes vos filiales.',
      'Toutes vos campagnes.',
      "Toute l'entreprise.",
    ],
    lede:
      'Créez, déployez et planifiez les signatures de toute votre entreprise en quelques clics et en totale sécurité.',
    /** Badges de réassurance : la vue leur ajoute un bouclier. */
    badges: [
      'Vos données sont en France et en sécurité',
      'Aucun e-mail lu : vous les envoyez via votre serveur',
      'Sans carte bancaire',
    ],
  },

  /**
   * Témoignages clients (composant Testimonials).
   *
   * `items` est vide tant que les verbatims ne sont pas recueillis : la
   * section affiche alors un cartouche « à fournir », comme les captures
   * manquantes de la section App. Renseigner les entrées suffit à
   * afficher le carrousel, sans toucher au code.
   */
  testimonials: {
    eyebrow: 'Témoignages',
    title: 'Nos clients sont conquis',
    placeholder: 'VERBATIM À RECUEILLIR',
    placeholderText:
      "Un verbatim de dirigeant, sa photo, sa fonction et son entreprise. Trois suffisent : ils défilent ici.",
    items: [] as {
      quote: string;
      author: string;
      role: string;
      /** Chemin d'une photo dans /public, sinon les initiales sont utilisées. */
      photo?: string;
    }[],
  },

  /** Section « L'outil, en trois écrans » (composant AppTabs). */
  app: {
    title: "L'outil, en trois écrans.",
    tablistAria: "Écrans de l'application",
    placeholderBadge: 'CAPTURE À FOURNIR',
    /** Même ordre que les onglets techniques : éditeur, équipes, campagnes. */
    tabs: [
      {
        label: 'Éditeur',
        alt: 'Éditeur de signatures Signally',
        placeholder: "Capture de l'éditeur de signatures",
      },
      {
        label: 'Équipes',
        alt: 'Gestion des équipes et des collaborateurs',
        placeholder: 'Capture de la gestion des équipes et des collaborateurs',
      },
      {
        label: 'Campagnes',
        alt: 'Planning des campagnes de bannières',
        placeholder: 'Capture du planning de campagnes',
      },
    ],
    notes: [
      {
        title: 'Un éditeur, pas un formulaire',
        text:
          'Vous composez le gabarit et Signally génère une signature en code HTML compatible avec vos ordinateurs, vos mobiles et vos tablettes.',
      },
      {
        title: 'Des équipes, pas des fichiers',
        text:
          "Chaque groupe et sous-groupe reçoit sa signature, qui se déploie automatiquement. La synchronisation se fait directement via l'annuaire de votre entreprise.",
      },
      {
        title: 'Un planning, pas des relances',
        text:
          "Programmez à l'avance vos bannières de communication : elles se déploieront chez tous vos collaborateurs à la minute près.",
      },
    ],
  },

  problem: {
    eyebrow: 'Problématique',
    title:
      'Changer la signature de 200 collaborateurs prend des semaines. Ou cinq minutes.',
    withoutTag: 'SANS SIGNALLY',
    withTag: 'AVEC SIGNALLY',
    without: [
      'Un modèle copié-collé de travers',
      'Des logos écrasés, des liens morts',
      'Aucune mention légale à jour',
      'Des relances IT pendant trois semaines',
    ],
    with: [
      'Une signature unifiée pour toute votre entreprise, ou différenciée par groupe et par filiale',
      'Des champs remplis directement depuis votre annuaire',
      'Des mentions légales verrouillées',
      'Des mises à jour poussées en 1 clic',
    ],
    stats: [
      { value: '5 min', label: "pour déployer à toute l'entreprise" },
      { value: '100 %', label: 'de signatures conformes' },
      { value: '0 €', label: 'pour créer votre signature' },
      { value: '0,50 €', label: 'par utilisateur au-delà de 500' },
    ],
  },

  why: {
    eyebrow: 'Pourquoi Signally',
    title: 'Créer, déployer, programmer.',
    deploy: {
      tag: 'DÉPLOYER',
      title: 'Un changement dans la signature, tout le monde est à jour instantanément.',
      text:
        'Nos add-ins Microsoft et Google appliquent la signature à chaque collaborateur, sans aucune intervention de sa part.',
      rowStatus: 'À JOUR',
      metrics: [
        { value: '1 min', label: "pour toute l'entreprise" },
        { value: '0', label: 'action côté collaborateur' },
      ],
    },
    create: {
      tag: 'CRÉER',
      title: 'Un éditeur visuel et des gabarits verrouillés',
      text:
        "Rendu identique sur Outlook, Gmail et mobile. L'administrateur décide de ce qui reste intouchable.",
      link: "L'éditeur →",
    },
    schedule: {
      tag: 'PROGRAMMER',
      title: 'Des bannières planifiées, ciblées par équipe',
      text: "La campagne démarre et s'arrête seule. Les clics sont attribués par équipe.",
      link: 'Les campagnes →',
    },
  },

  campaigns: {
    eyebrow: 'Campagnes',
    /** Deux lignes : la coupure est voulue par la maquette (composant Lines). */
    title: [
      'Vos e-mails sortants, un canal de communication inexploité.',
      'Faites-en votre premier média.',
    ],
    lede:
      "Une entreprise de 100 personnes envoie 300 000 e-mails par an. Autant d'impressions publicitaires gratuites.",
    points: [
      'Bannières animées, cliquables, trackées',
      'Ciblage par équipe, service ou filiale',
      'Démarrage et arrêt automatiques',
      'Statistiques de clics par campagne',
    ],
    cta: 'Découvrir les campagnes',
  },

  /** Diagramme « Planning des campagnes » (composant CampaignPlanner). */
  planner: {
    title: 'Planning des campagnes',
    period: 'T1 2026',
    months: ['JAN', 'FÉV', 'MAR'],
    /** Même ordre que la géométrie des barres, qui reste dans la vue. */
    rows: [
      { team: "Toute l'entreprise", label: 'Vœux 2026' },
      { team: 'Commerciaux', label: 'Salon Vivatech' },
      { team: 'RH', label: 'Campagne recrutement' },
      { team: 'Support', label: 'Nouvelle FAQ' },
    ],
    statsTitle: 'STATISTIQUES',
    stats: [
      { value: '4', label: 'campagnes actives' },
      { value: '312k', label: 'impressions / trimestre' },
      { value: '2,4 %', label: 'taux de clic moyen' },
    ],
  },

  integrations: {
    eyebrow: 'Intégrations',
    title: 'Une intégration en toute simplicité.',
    note:
      "Les add-ins s'installent depuis votre espace d'administration en toute sécurité. Aucun reroutage, aucune interruption.",
    microsoft: {
      tag: 'MICROSOFT 365 · OUTLOOK · EXCHANGE',
      title: 'Add-in Microsoft',
      text:
        "Déploiement centralisé depuis le centre d'administration Microsoft 365. La signature s'insère à la rédaction, dans Outlook Web, Windows, Mac et mobile.",
      link: "Comment fonctionne l'add-in Microsoft →",
    },
    google: {
      tag: 'GOOGLE WORKSPACE · GMAIL',
      title: 'Add-on Google',
      text:
        "Installation à l'échelle du domaine depuis la console d'administration Google. Synchronisation des unités organisationnelles et des annuaires.",
      link: "Comment fonctionne l'add-on Google →",
    },
  },

  privacy: {
    eyebrow: 'Confidentialité & conformité',
    title: [
      'Le respect de vos données, notre priorité.',
      "Signally ajoute une signature. Rien d'autre.",
    ],
    lede: 'La première question de votre DSI, et sa réponse en une phrase.',
    cards: [
      {
        title: 'Données en France',
        text: 'Annuaire et gabarits hébergés sur des serveurs français.',
      },
      {
        title: 'Aucun e-mail lu',
        text: "L'add-in insère une signature. Il ne lit rien d'autre.",
      },
      {
        title: 'Aucun transit',
        text: 'Pas de relais SMTP, pas de connecteur sortant.',
      },
      {
        title: 'Envoi par votre compte',
        text: 'Vos messages partent de votre tenant Microsoft ou Google.',
      },
    ],
    cta: 'Lire notre approche sécurité & RGPD',
  },

  pricing: {
    eyebrow: 'Tarifs',
    title: 'Toutes les fonctionnalités, dès le premier utilisateur.',
    lede:
      'Un seul tarif dégressif, de 1,50 € à 0,50 € HT par utilisateur et par mois. Faites glisser le curseur.',
    cta: 'Simulateur détaillé',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Vous avez des questions, nous vous répondons',
    items: [
      {
        q: 'Comment mettre en place une signature mail identique pour tous les collaborateurs ?',
        a: "Vous créez un gabarit unique dans l'éditeur Signally, vous y placez des champs dynamiques (nom, fonction, téléphone, service) et vous l'attribuez à une équipe ou à toute l'entreprise. L'add-in Microsoft 365 ou Google Workspace applique ensuite la signature à chaque collaborateur, sans qu'il ait la moindre manipulation à faire.",
      },
      {
        q: 'Signally lit-il le contenu de mes e-mails ?',
        a: "Non. L'add-in insère un bloc de signature au moment de la rédaction du message. Il n'accède pas au corps de vos e-mails, ne les analyse pas et ne les stocke pas. Aucun contenu d'e-mail ne transite par nos serveurs.",
      },
      {
        q: 'Mes e-mails sont-ils envoyés par Signally ?',
        a: "Non, jamais. Vos messages partent depuis votre propre compte Microsoft 365 ou Google Workspace, avec votre domaine, votre délivrabilité et vos règles de sécurité. Signally n'est pas un relais d'envoi : nous ajoutons uniquement la signature.",
      },
      {
        q: 'Où sont hébergées les données de Signally ?',
        a: 'En France. Les données d’annuaire, les gabarits et les visuels de campagne sont stockés sur des serveurs situés sur le territoire français, soumis au RGPD et au droit européen.',
      },
      {
        q: 'Puis-je créer une signature mail gratuitement ?',
        a: "Oui. Le générateur de signature est accessible librement sur app.signally.io : vous créez votre signature, vous la testez et vous l'installez dans votre client de messagerie sans carte bancaire. L'abonnement ne devient nécessaire que pour le déploiement automatique et les campagnes.",
      },
      {
        q: 'Combien coûte Signally pour 100 collaborateurs ?',
        a: 'Le tarif est dégressif : 1,50 € HT par utilisateur et par mois jusqu’à 10 utilisateurs, 1,25 € de 11 à 50, 1,00 € de 51 à 100, 0,75 € de 101 à 500 et 0,50 € au-delà de 500. Pour 100 collaborateurs, comptez 100 € HT par mois. Le simulateur de la page Tarifs calcule votre montant exact.',
      },
      {
        q: 'Combien de temps prend le déploiement dans une entreprise ?',
        a: "L'installation de l'add-in depuis votre console d'administration prend une dizaine de minutes. La création du gabarit et le rattachement des équipes prennent en général une demi-journée. Vous êtes opérationnel le jour même.",
      },
      {
        q: "Qu'est-ce qu'une campagne de bannière dans une signature mail ?",
        a: 'C’est une bannière — animée ou statique, cliquable — ajoutée sous la signature de tout ou partie de vos collaborateurs, sur une période que vous planifiez à l’avance. Elle transforme chaque e-mail sortant en support de communication : événement, recrutement, lancement produit, enquête de satisfaction.',
      },
      {
        q: "La signature s'affiche-t-elle correctement sur Outlook, Gmail et mobile ?",
        a: 'Oui. Les gabarits Signally sont conçus en HTML compatible avec Outlook Windows et Mac, Outlook Web, Gmail, Apple Mail et les clients mobiles iOS et Android. Chaque gabarit est prévisualisable avant déploiement.',
      },
      {
        q: 'Peut-on avoir des signatures différentes par filiale ou par marque ?',
        a: 'Oui. Vous créez autant de gabarits que nécessaire et vous les attribuez par équipe, service, filiale ou unité organisationnelle. Chaque entité conserve son identité visuelle, dans un seul et même compte d’administration.',
      },
    ],
  },
};

export type Home = typeof home;
