/**
 * Textes de la page Campagnes & bannières.
 *
 * Les aperçus de bannière ne portent ici que leur texte : les couleurs
 * restent dans la vue, elles ne dépendent pas de la langue.
 */

export const campaigns = {
  meta: {
    title: 'Campagnes de bannières dans la signature mail — marketing par e-mail sortant',
    description:
      'Transformez chaque e-mail sortant en support de communication : bannières cliquables, ciblage par équipe, planification automatique et suivi des clics.',
  },

  hero: {
    eyebrow: 'Campagnes & bannières',
    title: 'Le marketing par signature mail : le canal que vous possédez déjà.',
    /** Deux lignes : la coupure avant « Zéro » est voulue par la maquette. */
    lede: [
      "Une campagne Signally, c'est une bannière fixe ou dynamique, placée sous la signature de vos collaborateurs, ciblée sur les équipes de votre choix et planifiée dans le temps.",
      'Zéro coût média, zéro friction, une audience déjà en relation avec vous.',
    ],
  },

  uses: {
    title: 'Ce que vous pouvez diffuser sans écrire une newsletter',
    /** Coupure avant « Une bannière de », demandée à la relecture. */
    lede: [
      'Chaque e-mail professionnel est ouvert dans plus de neuf cas sur dix.',
      'Une bannière de signature est vue par vos clients, vos prospects, vos fournisseurs et vos candidats.',
    ],
    items: [
      {
        tag: 'ÉVÉNEMENTIEL',
        title: 'Salons et webinaires',
        text:
          'Annoncez votre stand trois semaines avant, arrêtez la campagne le soir de la clôture, sans y repenser.',
      },
      {
        tag: 'MARQUE EMPLOYEUR',
        title: 'Recrutement',
        text:
          "Poussez vos offres depuis la signature de toute l'entreprise : vos collaborateurs deviennent votre premier canal de sourcing.",
      },
      {
        tag: 'PRODUIT',
        title: 'Lancements & nouveautés',
        text:
          'Ciblez la bannière sur les équipes commerciales pendant que le support garde la sienne.',
      },
      {
        tag: 'RÉPUTATION',
        title: 'Avis clients',
        text:
          "Un bouton d'avis Google dans la signature du support : la demande arrive au bon moment, après un échange réussi.",
      },
      {
        tag: 'RSE & INTERNE',
        title: 'Engagements et actualités',
        text:
          'Certification obtenue, rapport annuel, action solidaire : la preuve circule sur chaque échange.',
      },
      {
        tag: 'COMMERCIAL',
        title: 'Prise de rendez-vous',
        text:
          "Un lien de réservation d'agenda sous chaque e-mail commercial, sans relance supplémentaire.",
      },
    ],
  },

  pillars: {
    title: 'Planifier, cibler, mesurer',
    items: [
      {
        title: 'Une date de début et une date de fin',
        text:
          "La bannière apparaît et disparaît toute seule. Plus de campagne fantôme qui traîne trois mois après l'événement.",
      },
      {
        title: 'Un ciblage par équipe',
        text:
          "Toute l'entreprise, une filiale, un pays, un service, ou une poignée de collaborateurs.",
      },
      {
        title: 'Des campagnes qui se succèdent',
        text:
          'Construisez votre calendrier au trimestre : chaque campagne prend le relais de la précédente.',
      },
      {
        title: 'Un outil statistique efficace et simple',
        text:
          'Des clics attribués : vous savez quelle bannière a généré du trafic, sur quelle période et depuis quelle équipe.',
      },
    ],
  },

  /**
   * Carrousel d'exemples sectoriels. Ce sont des bannières fictives
   * d'illustration : elles montrent le même mécanisme appliqué à des
   * métiers différents. L'habillage graphique (couleurs, motif, icône)
   * reste dans la vue, dans le même ordre.
   */
  sectors: {
    title: 'La même mécanique, quel que soit votre métier',
    lede:
      'Une bannière, un message, un bouton. Ce qui change d’un secteur à l’autre, c’est ce que vous avez à dire.',
    prev: 'Exemple précédent',
    next: 'Exemple suivant',
    items: [
      {
        tag: 'IMMOBILIER',
        title: 'Nouveau bien à Bordeaux Chartrons',
        sub: 'Maison 4 pièces, 112 m², jardin',
        cta: 'Visiter ce bien',
      },
      {
        tag: 'RESTAURATION',
        title: 'La carte d’automne est arrivée',
        sub: 'Du mardi au samedi, midi et soir',
        cta: 'Réserver une table',
      },
      {
        tag: 'COMMERCE & RETAIL',
        title: 'Nouvelle collection printemps',
        sub: 'Livraison offerte jusqu’au 30 avril',
        cta: 'Voir la collection',
      },
      {
        tag: 'ÉDITEUR DE LOGICIEL',
        title: 'Webinaire produit — jeudi 12 mars',
        sub: '30 minutes, démonstration et questions',
        cta: "S'inscrire",
      },
      {
        tag: 'CONSEIL & AUDIT',
        title: 'Baromètre 2026 de la conformité',
        sub: '18 pages, données par secteur',
        cta: 'Télécharger l’étude',
      },
      {
        tag: 'MARQUE EMPLOYEUR',
        title: 'Nous recrutons 12 profils',
        sub: 'Tech, produit, commerce',
        cta: 'Voir les offres',
      },
    ],
  },

  preview: {
    tag: 'APERÇU DE BANNIÈRE',
    items: [
      { title: 'Webinaire — Signatures & conformité', sub: 'Jeudi 12 mars, 11 h', cta: "S'inscrire" },
      { title: 'Nous recrutons 12 profils', sub: 'Tech, produit, commerce', cta: 'Voir les offres' },
      { title: 'Votre avis compte', sub: '30 secondes, une étoile', cta: 'Donner mon avis' },
    ],
  },

  faq: {
    title: 'Questions fréquentes sur les campagnes de bannières',
    items: [
      {
        q: "Qu'est-ce qu'une campagne de bannière dans une signature mail ?",
        a: "C'est une bannière cliquable, statique ou animée, ajoutée sous la signature d'un groupe de collaborateurs pendant une période définie. Elle transforme chaque e-mail sortant en support de communication ciblé.",
      },
      {
        q: "Combien d'impressions peut-on espérer ?",
        a: 'Comptez en moyenne une trentaine d’e-mails sortants par collaborateur et par jour. Une entreprise de 100 personnes génère ainsi de l’ordre de 300 000 impressions par an, auprès d’une audience déjà en relation avec elle.',
      },
      {
        q: 'Peut-on cibler une bannière sur une seule équipe ?',
        a: 'Oui. Le ciblage se fait par équipe, service, filiale, pays ou sélection manuelle de collaborateurs. Les commerciaux peuvent porter une bannière produit pendant que le support en porte une autre.',
      },
      {
        q: 'Les campagnes se lancent-elles automatiquement ?',
        a: 'Oui. Vous définissez une date de début et une date de fin ; la bannière apparaît et disparaît toute seule. Vous pouvez enchaîner plusieurs campagnes sur un trimestre.',
      },
      {
        q: 'Peut-on suivre les clics sur une bannière ?',
        a: "Oui. Chaque campagne dispose de son suivi de clics, par période et par équipe, ce qui permet de comparer les messages entre eux et d'arbitrer le calendrier suivant.",
      },
      {
        q: "Une bannière animée s'affiche-t-elle partout ?",
        a: "Un GIF animé s'affiche sur la plupart des messageries modernes ; certaines versions d'Outlook n'affichent que la première image. C'est pourquoi nous recommandons de placer le message essentiel sur cette première image.",
      },
    ],
  },

  cta: {
    title: 'Lancez votre première campagne avec Signally',
    text:
      'Créez la bannière, choisissez les équipes, fixez les dates. Le reste se déclenche tout seul.',
    secondaryLabel: 'Parler à un expert',
  },
};

export type Campaigns = typeof campaigns;
