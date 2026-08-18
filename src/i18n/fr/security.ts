/** Textes de la page Sécurité, RGPD & souveraineté. */

export const security = {
  meta: {
    title: 'Sécurité, RGPD & souveraineté — Signally ne lit pas vos e-mails',
    description:
      "Ce que Signally fait et ne fait pas : aucun e-mail lu, aucun transit par nos serveurs, données hébergées en France, sous-traitant RGPD au sens de l'article 28.",
  },

  hero: {
    eyebrow: 'Sécurité, RGPD & souveraineté',
    title: 'Vos e-mails ne passent pas par nous. Vos données restent en France.',
    lede:
      "La page à transmettre à votre DSI, votre DPO et votre RSSI. Elle décrit précisément ce que Signally fait, ce qu'il ne fait pas, et où vivent les données.",
  },

  scope: {
    doesTag: 'CE QUE SIGNALLY FAIT',
    does: [
      'Stocker vos gabarits de signature et vos visuels de campagne',
      "Lire, en accès restreint, les attributs d'annuaire nécessaires à la signature (nom, fonction, téléphone, service, service de rattachement)",
      'Insérer un bloc HTML de signature au moment où le collaborateur rédige son message',
      'Comptabiliser les clics sur les liens de bannière que vous avez créés',
    ],
    doesNotTag: 'CE QUE SIGNALLY NE FAIT PAS',
    doesNot: [
      'Lire, analyser ou indexer le contenu de vos e-mails',
      "Stocker vos messages, vos pièces jointes ou vos carnets d'adresses",
      'Faire transiter vos e-mails par ses serveurs',
      'Envoyer des e-mails à votre place ou modifier votre routage SMTP',
      "Transférer des données hors de l'Union européenne",
    ],
  },

  guarantees: [
    {
      title: 'Hébergement en France',
      text:
        'Infrastructure située sur le territoire français, opérée sous droit européen. Aucun transfert vers un pays tiers dans le cadre du service.',
    },
    {
      title: 'Conformité RGPD',
      text:
        "Signally agit en sous-traitant au sens de l'article 28. Accord de traitement, registre, durées de conservation et procédure de suppression documentés.",
    },
    {
      title: 'Minimisation des données',
      text:
        "Seuls les champs d'annuaire réellement affichés dans la signature sont synchronisés. Rien de plus.",
    },
    {
      title: 'Authentification & accès',
      text:
        "Connexion via votre fournisseur d'identité Microsoft ou Google, rôles administrateur granulaires, journalisation des actions.",
    },
    {
      title: 'Chiffrement',
      text:
        "Chiffrement des flux en transit et des données au repos, sur l'ensemble de la plateforme.",
    },
    {
      title: 'Réversibilité',
      text:
        'Export de vos gabarits et suppression complète de votre espace sur demande, sans rétention cachée.',
    },
  ],

  /** Bloc laissé vide par le prototype : il attend des éléments contractuels réels. */
  todo:
    "Bloc à compléter avec vos éléments contractuels réels : nom de l'hébergeur, localisation exacte des datacenters, certifications en cours ou obtenues, DPA téléchargeable, contact DPO.",

  faq: {
    title: 'Questions fréquentes — sécurité et conformité',
    items: [
      {
        q: 'Signally lit-il le contenu de mes e-mails ?',
        a: "Non. L'add-in insère un bloc de signature au moment de la rédaction. Le contenu du message n'est ni lu, ni analysé, ni stocké, et ne transite pas par nos serveurs.",
      },
      {
        q: 'Où sont hébergées les données ?',
        a: "En France. Les gabarits, les visuels de campagne et les attributs d'annuaire synchronisés sont hébergés sur une infrastructure située sur le territoire français, soumise au RGPD.",
      },
      {
        q: 'Quelles données personnelles sont traitées ?',
        a: "Uniquement les champs d'annuaire affichés dans la signature : nom, prénom, fonction, service, adresse e-mail, téléphone professionnel et rattachement organisationnel. C'est le principe de minimisation appliqué strictement.",
      },
      {
        q: 'Signally est-il sous-traitant au sens du RGPD ?',
        a: 'Oui. Signally agit comme sous-traitant de votre entreprise, responsable de traitement. Un accord de traitement des données précise les finalités, les durées de conservation et les mesures de sécurité.',
      },
      {
        q: "Que devient l'accès en cas de résiliation ?",
        a: 'Vous récupérez vos gabarits et vos visuels, puis votre espace est supprimé. Aucune rétention n’est conservée au-delà des durées prévues au contrat.',
      },
      {
        q: 'Vos serveurs sont-ils soumis à une législation extraterritoriale ?',
        a: "L'hébergement en France et l'absence de transfert hors Union européenne placent le service sous le seul droit européen, ce qui est précisément l'attente de nombreuses DSI et directions juridiques.",
      },
    ],
  },

  cta: {
    title: 'Une question de conformité ? Parlons-en.',
    text:
      'Nous répondons volontiers aux questionnaires sécurité de votre DSI et de votre direction juridique.',
    secondaryLabel: "Contacter l'équipe",
  },
};

export type Security = typeof security;
