/**
 * Textes de la politique de confidentialité.
 *
 * Même forme que `terms.ts` : `src/views/LegalView.astro` rend les deux
 * documents avec un seul gabarit, la structure doit donc rester identique.
 */

export const privacy = {
  meta: {
    title: 'Politique de confidentialité — Signally',
    description:
      "Quelles données Signally collecte, pourquoi, où elles sont hébergées, à qui elles sont confiées et comment exercer vos droits. Aucun cookie de mesure, aucun traceur tiers.",
  },

  hero: {
    eyebrow: 'Politique de confidentialité',
    title: 'Ce que nous collectons, et ce que nous ne collectons pas',
    lede:
      "Cette politique décrit le traitement des données personnelles sur ce site et dans le service Signally. Elle complète nos conditions d'utilisation et notre page Sécurité & RGPD.",
  },

  updated: {
    label: 'Dernière mise à jour',
    value: '4 septembre 2026',
  },

  sections: [
    {
      title: '1. Responsable du traitement',
      paragraphs: [
        "Signally édite ce site et le service du même nom. Pour toute question relative à vos données, l'adresse de contact figure en fin de document.",
      ],
    },
    {
      title: '2. Deux rôles distincts',
      paragraphs: [
        "Signally intervient à deux titres différents, et la distinction commande le reste de ce document.",
        "Sur ce site, Signally est responsable de traitement : nous décidons des données collectées auprès des visiteurs et de leur finalité.",
        "Dans le service, Signally est sous-traitant au sens de l'article 28 du règlement général sur la protection des données. C'est l'organisation cliente qui décide des données de ses collaborateurs ; nous les traitons sur ses instructions, pour lui fournir le service.",
      ],
    },
    {
      title: '3. Données collectées sur ce site',
      paragraphs: [
        "Formulaire de contact : nom, adresse e-mail, organisation et contenu du message. Ces informations nous parviennent par courrier électronique et ne sont pas enregistrées dans une base de données du site.",
        "Assistant de support : le contenu de vos questions et les réponses associées, afin de traiter la conversation et d'améliorer la qualité des réponses. Un identifiant de conversation est conservé dans le stockage local de votre navigateur, uniquement pour retrouver le fil si vous rouvrez la fenêtre.",
        "Journaux techniques : adresse IP et informations de requête, conservées en mémoire du serveur le temps d'appliquer nos limites anti-abus.",
      ],
    },
    {
      title: '4. Données traitées dans le service',
      paragraphs: [
        "Compte : identité professionnelle, adresse e-mail, rôle et organisation de rattachement.",
        "Attributs de signature : nom, fonction, téléphone, service et autres champs que le client choisit d'afficher dans les signatures de ses collaborateurs.",
        "Contenus : gabarits de signature, visuels de campagne et paramètres associés.",
        "Signally ne lit pas le contenu des e-mails de ses clients, et ceux-ci ne transitent pas par nos serveurs.",
      ],
    },
    {
      title: '5. Finalités et bases légales',
      paragraphs: [
        "Répondre aux demandes de contact et de démonstration : intérêt légitime à traiter une sollicitation qui nous est adressée.",
        "Fournir et administrer le service, gérer les abonnements et la facturation : exécution du contrat.",
        "Assurer la sécurité du site et du service, prévenir les abus : intérêt légitime.",
        "Répondre à nos obligations comptables et légales : obligation légale.",
      ],
    },
    {
      title: '6. Destinataires et sous-traitants',
      paragraphs: [
        "Les données ne sont ni vendues, ni louées, ni cédées à des tiers à des fins publicitaires.",
        "Nous faisons appel à des prestataires techniques strictement nécessaires au fonctionnement : hébergement de l'application et de la base de données en France ; stockage des fichiers et visuels sur Amazon S3, région Paris ; protection anti-robot du formulaire et de l'assistant via Cloudflare Turnstile ; génération des réponses de l'assistant via l'API d'Anthropic ; traitement des paiements par abonnement via Stripe.",
        "Lorsqu'un client connecte une plateforme tierce — Microsoft 365, Google Workspace ou Canva — les échanges avec cette plateforme relèvent en outre de sa propre politique de confidentialité.",
      ],
    },
    {
      title: '7. Localisation et transferts',
      paragraphs: [
        "L'application, la base de données et les fichiers sont hébergés dans l'Union européenne, en France.",
        "Certains prestataires mentionnés ci-dessus sont établis hors de l'Union européenne. Les transferts éventuels sont encadrés par les clauses contractuelles types de la Commission européenne ou par un mécanisme équivalent.",
      ],
    },
    {
      title: '8. Durées de conservation',
      paragraphs: [
        "Demandes de contact : trois ans à compter du dernier échange.",
        "Conversations avec l'assistant : la durée nécessaire au suivi de la demande et à l'amélioration du service, sans excéder douze mois.",
        "Données de compte et contenus : la durée de l'abonnement, puis suppression des systèmes de production dans un délai raisonnable après la fin du contrat.",
        "Documents comptables : la durée légale de conservation applicable.",
      ],
    },
    {
      title: '9. Cookies et stockage local',
      paragraphs: [
        "Ce site ne dépose aucun cookie de mesure d'audience, aucun cookie publicitaire et aucun traceur tiers. Il n'y a donc pas de bandeau de consentement à afficher.",
        "Deux exceptions techniques, sans finalité de suivi : le stockage local de votre navigateur conserve l'identifiant de conversation de l'assistant de support, et Cloudflare Turnstile peut déposer les éléments nécessaires à la vérification anti-robot.",
      ],
    },
    {
      title: '10. Sécurité',
      paragraphs: [
        "Les échanges avec le site et le service sont chiffrés en transit. Les accès aux données de production sont restreints et tracés.",
        "Le détail des mesures techniques et organisationnelles figure sur notre page Sécurité & RGPD.",
      ],
    },
    {
      title: '11. Vos droits',
      paragraphs: [
        "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité sur vos données, ainsi que du droit de définir des directives relatives à leur sort après votre décès.",
        "Ces droits s'exercent auprès de nous à l'adresse indiquée ci-dessous. Si vos données sont traitées dans le cadre du service pour le compte de votre employeur, nous transmettrons votre demande à ce dernier, qui en est responsable.",
        "Vous pouvez également introduire une réclamation auprès de la Commission nationale de l'informatique et des libertés, autorité de contrôle française.",
      ],
    },
    {
      title: '12. Modification de cette politique',
      paragraphs: [
        "Cette politique peut évoluer, notamment en cas de changement de prestataire ou de fonctionnalité. La date de dernière mise à jour figure en tête de page, et toute modification substantielle est portée à la connaissance des clients.",
      ],
    },
  ],

  /*
   * Même parti pris que les conditions d'utilisation : l'identité du
   * responsable et la liste définitive des sous-traitants engagent, elles
   * doivent être fournies plutôt qu'inventées.
   */
  todo:
    "À compléter avant mise en ligne : identité et adresse du responsable de traitement, coordonnées du délégué à la protection des données s'il en existe un, adresse dédiée aux demandes d'exercice de droits, et validation de la liste des sous-traitants ainsi que des durées de conservation. Ce texte est une base de travail et doit être relu par un conseil juridique avant publication.",

  contact: {
    title: 'Exercer vos droits ou poser une question',
    text: "Écrivez-nous, nous vous répondons sous deux jours ouvrés.",
    label: 'Nous contacter',
  },
};

export type Privacy = typeof privacy;
