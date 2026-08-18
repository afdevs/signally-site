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
    title: 'Une signature.',
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
      "Créez, déployez et planifiez les signatures de toute l'entreprise depuis une seule interface.",
    badges: ['DONNÉES EN FRANCE', 'AUCUN E-MAIL LU', 'SANS CARTE BANCAIRE'],
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
      "Un gabarit unique pour toute l'organisation",
      'Des champs remplis depuis votre annuaire',
      'Des mentions légales verrouillées',
      'Une mise à jour poussée en minutes',
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
      title: 'Une modification. Tout le monde à jour.',
      text:
        "Les add-ins Microsoft et Google appliquent la signature à chaque collaborateur, sans qu'il touche à quoi que ce soit.",
      rowStatus: 'À JOUR',
      metrics: [
        { value: '5 min', label: "pour toute l'entreprise" },
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
    title: 'Vos e-mails sortants, votre premier média.',
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

  integrations: {
    eyebrow: 'Intégrations',
    title: 'Une intégration en toute simplicité.',
    note:
      "Les add-ins s'installent depuis votre console d'administration. Aucun reroutage, aucune interruption.",
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
    title: "Signally ajoute une signature. Rien d'autre.",
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
    title: 'Les questions que l’on nous pose avant de signer',
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
