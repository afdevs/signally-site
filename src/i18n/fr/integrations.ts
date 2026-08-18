/**
 * Textes des deux pages d'intégration.
 *
 * Regroupées dans un seul fichier : elles partagent la même structure
 * et se relisent mieux côte à côte que séparées.
 */

export const integrations = {
  microsoft: {
    meta: {
      title: 'Signature mail Microsoft 365 & Outlook — add-in de déploiement centralisé',
      description:
        "Déployez la signature Outlook de toute l'entreprise depuis le centre d'administration Microsoft 365. Sans règle de transport Exchange, sans reroutage, en quinze minutes.",
    },
    hero: {
      eyebrow: 'Add-in Microsoft 365',
      title:
        'Signature Outlook et Microsoft 365 : déploiement centralisé, sans règle de transport.',
      lede:
        "L'add-in Signally s'installe depuis votre centre d'administration Microsoft 365 et applique la bonne signature à chaque collaborateur, dans Outlook Web, Windows, Mac et mobile. Vos e-mails partent toujours de votre tenant.",
    },
    journeysTitle:
      "Le parcours réel, du côté de l'administrateur et du côté du collaborateur",
    adminTag: 'CÔTÉ ADMINISTRATEUR — 15 MINUTES',
    adminSteps: [
      {
        title: 'Connexion du tenant',
        text:
          "Vous autorisez Signally depuis Entra ID avec un consentement administrateur, en lecture seule sur l'annuaire.",
      },
      {
        title: "Déploiement de l'add-in",
        text:
          "Dans « Applications intégrées », vous déployez l'add-in à toute l'organisation ou à un groupe pilote.",
      },
      {
        title: 'Attribution des gabarits',
        text:
          'Vous rattachez chaque groupe Microsoft 365 au modèle de signature qui lui correspond.',
      },
      {
        title: 'Mise à jour permanente',
        text:
          "Un nouvel arrivant apparaît dans l'annuaire : il reçoit sa signature sans aucune action de votre part.",
      },
    ],
    userTag: 'CÔTÉ COLLABORATEUR — 0 MINUTE',
    userSteps: [
      {
        title: 'Il ouvre Outlook',
        text: 'Rien à installer, rien à copier-coller, aucun tutoriel à suivre.',
      },
      {
        title: 'Il rédige un message',
        text:
          'La signature s’insère dans le corps du message, avec ses informations et la bannière du moment.',
      },
      {
        title: 'Il envoie',
        text: "Le message part par son compte Microsoft 365. Signally n'intervient pas dans l'envoi.",
      },
      {
        title: 'Il voit ce que voit le destinataire',
        text:
          'La signature est visible dans les éléments envoyés — contrairement aux règles de transport côté serveur.',
      },
    ],
    callout: {
      title: "Pourquoi un add-in plutôt qu'une règle de transport Exchange ?",
      text:
        "Une règle de transport ajoute la signature après l'envoi, côté serveur : le collaborateur ne la voit jamais, les réponses en fil s'empilent mal et le chiffrement peut poser problème. L'add-in insère la signature à la rédaction, dans le message que l'utilisateur a sous les yeux, sans reroutage de flux ni connecteur SMTP à maintenir.",
    },
    environmentsTitle: 'Environnements couverts',
    environments: [
      { name: 'Outlook Web', detail: 'Navigateur, tous OS' },
      { name: 'Outlook Windows', detail: 'Classique et nouveau Outlook' },
      { name: 'Outlook Mac', detail: 'Version courante' },
      { name: 'Outlook mobile', detail: 'iOS et Android' },
      { name: 'Exchange Online', detail: 'Tenants Microsoft 365' },
    ],
    /** Nom du HowTo des données structurées. */
    howToName: 'Déployer une signature mail sur Microsoft 365 et Outlook',
    faq: {
      title: 'Questions fréquentes — Microsoft 365 et Outlook',
      items: [
        {
          q: 'Comment déployer une signature mail pour tous les utilisateurs Microsoft 365 ?',
          a: "Vous connectez votre tenant à Signally avec un consentement administrateur, vous déployez l'add-in depuis la section « Applications intégrées » du centre d'administration Microsoft 365, puis vous attribuez un gabarit à chaque groupe. Le déploiement complet prend une quinzaine de minutes.",
        },
        {
          q: "L'add-in fonctionne-t-il sur le nouveau Outlook ?",
          a: "Oui. L'add-in fonctionne sur Outlook Web, le nouveau Outlook pour Windows, Outlook Windows classique, Outlook pour Mac et Outlook mobile iOS et Android.",
        },
        {
          q: 'Faut-il créer une règle de transport Exchange ?',
          a: "Non, et c'est un avantage : aucun reroutage de flux, aucun connecteur, aucune modification de votre routage sortant. La signature est insérée dans le message au moment de la rédaction.",
        },
        {
          q: "L'add-in a-t-il accès au contenu de mes e-mails ?",
          a: "Non. Il insère un bloc de signature dans le corps du message en cours de rédaction. Il ne lit pas, n'analyse pas et ne conserve pas le contenu de vos messages, et aucun e-mail ne transite par nos serveurs.",
        },
        {
          q: 'Que se passe-t-il pour un nouvel arrivant ?',
          a: "Dès que son compte apparaît dans l'annuaire et qu'il appartient à un groupe rattaché à un gabarit, il obtient sa signature. Aucune action n'est demandée ni à lui ni à l'équipe informatique.",
        },
        {
          q: 'Peut-on tester sur un groupe pilote avant de généraliser ?',
          a: "Oui. Le déploiement de l'add-in peut être limité à un groupe Microsoft 365 de votre choix, puis étendu à l'organisation entière une fois la validation faite.",
        },
      ],
    },
    cta: {
      title: 'Déployez vos signatures Outlook avec Signally',
      text:
        "Quinze minutes depuis votre centre d'administration Microsoft 365, sans toucher à votre routage.",
      secondaryLabel: 'Demander une démo',
    },
  },

  google: {
    meta: {
      title: 'Signature Gmail & Google Workspace — add-on de déploiement domain-wide',
      description:
        "Gérez la signature Gmail de tout le domaine depuis la console d'administration Google : add-on domain-wide, gabarits par unité organisationnelle, bannières planifiées.",
    },
    hero: {
      eyebrow: 'Add-on Google Workspace',
      title:
        "Signature Gmail pour toute l'entreprise, gérée depuis la console d'administration Google.",
      lede:
        "Installation à l'échelle du domaine, synchronisation des unités organisationnelles, signature appliquée sur Gmail web et mobile. Vos messages continuent de partir par votre compte Google Workspace.",
    },
    stepsTitle: "Installation à l'échelle du domaine, en quatre étapes",
    steps: [
      {
        n: '01',
        title: 'Installation domain-wide',
        text:
          "Depuis la console d'administration Google, vous installez l'add-on Signally pour l'ensemble du domaine.",
      },
      {
        n: '02',
        title: "Synchronisation de l'annuaire",
        text:
          'Les utilisateurs et leurs attributs remontent depuis Google Directory, en lecture seule.',
      },
      {
        n: '03',
        title: 'Gabarits par unité organisationnelle',
        text: 'Chaque OU ou groupe Google reçoit son modèle de signature et ses bannières.',
      },
      {
        n: '04',
        title: 'Application dans Gmail',
        text:
          'La signature apparaît à la rédaction, sur Gmail web et sur mobile, à jour en permanence.',
      },
    ],
    callout: {
      title: 'Et la limite des signatures Gmail natives ?',
      text:
        "Gmail permet à chaque utilisateur de définir sa propre signature, sans contrôle central, sans gabarit verrouillé et sans bannière planifiée. La fonction « ajout de pied de page » de la console Google, elle, s'applique côté serveur en texte simple et casse la mise en forme. Signally apporte le gabarit unique, le verrouillage administrateur et les campagnes, sans rien changer à votre routage.",
    },
    howToName: "Déployer une signature Gmail à l'échelle du domaine Google Workspace",
    faq: {
      title: 'Questions fréquentes — Google Workspace et Gmail',
      items: [
        {
          q: 'Comment mettre la même signature pour tous les utilisateurs Google Workspace ?',
          a: "Vous installez l'add-on Signally à l'échelle du domaine depuis la console d'administration Google, vous synchronisez l'annuaire, puis vous attribuez un gabarit à chaque unité organisationnelle ou groupe. La signature s'applique ensuite dans Gmail.",
        },
        {
          q: 'Quelle différence avec le pied de page natif de Google Workspace ?',
          a: "Le pied de page de la console s'ajoute côté serveur, en bas de la conversation, avec une mise en forme très limitée. L'add-on Signally insère une signature HTML complète à la rédaction, avec logo, réseaux sociaux et bannière de campagne.",
        },
        {
          q: 'Les unités organisationnelles sont-elles prises en compte ?',
          a: 'Oui. Vous pouvez attribuer un gabarit différent par unité organisationnelle ou par groupe Google, ce qui couvre les organisations multi-filiales et multi-pays.',
        },
        {
          q: "La signature s'affiche-t-elle sur Gmail mobile ?",
          a: 'Oui, la signature définie est appliquée aux messages rédigés depuis l’application Gmail, dans les limites de rendu propres aux clients mobiles.',
        },
        {
          q: 'Signally envoie-t-il mes e-mails à ma place ?',
          a: "Non. Vos messages partent depuis votre propre compte Google Workspace. Nous n'intervenons ni dans l'envoi, ni dans le routage, ni dans la délivrabilité.",
        },
        {
          q: 'Quelles autorisations sont demandées ?',
          a: "Un accès en lecture aux attributs d'annuaire nécessaires à la signature et l'autorisation d'insérer la signature à la rédaction. Aucun accès au contenu des messages n'est requis.",
        },
      ],
    },
    cta: {
      title: 'Unifiez vos signatures Gmail avec Signally',
      text:
        "Un add-on installé à l'échelle du domaine, des gabarits par unité organisationnelle, et plus aucune signature bricolée.",
      secondaryLabel: 'Demander une démo',
    },
  },
};

export type Integrations = typeof integrations;
