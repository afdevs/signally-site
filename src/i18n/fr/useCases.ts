/** Textes de la page Cas d'usage (DSI, marketing, RH). */

export const useCases = {
  meta: {
    title: "Cas d'usage — DSI, marketing et RH autour de la signature mail",
    description:
      'Trois métiers, trois problèmes, une seule interface : zéro ticket pour la DSI, un canal piloté pour le marketing, un onboarding immédiat pour les RH.',
  },

  hero: {
    eyebrow: "Cas d'usage",
    title: 'Trois métiers, trois problèmes, une seule solution, une seule interface.',
    lede:
      'La signature mail est le seul actif de communication que la DSI, le marketing et les RH utilisent tous les jours — et que personne ne pilote vraiment.',
  },

  /** `tone` reste dans la vue : c'est de la mise en forme, pas du texte. */
  roles: [
    {
      tag: 'DSI / IT',
      title: "Arrêter d'être le service des signatures",
      text:
        "Chaque arrivée, chaque départ, chaque changement de fonction déclenche un ticket. Multiplié par votre turnover, c'est chronophage. Avec Signally, tout est automatisé et transparent pour les utilisateurs.",
      columns: [
        {
          label: 'CE QUE VOUS GAGNEZ',
          items: [
            'Zéro ticket de signature',
            "Synchronisation automatique de l'annuaire",
            'Déploiement sans règle de transport ni connecteur',
            'Journalisation et rôles administrateur',
          ],
        },
        {
          label: 'CE QUE VOUS SÉCURISEZ',
          items: [
            'Données hébergées en France',
            'Aucun e-mail lu ni transité',
            'Envoi toujours par votre tenant',
            'Mentions légales verrouillées',
          ],
        },
      ],
    },
    {
      tag: 'MARKETING / COMMUNICATION',
      title: 'Reprendre la main sur un canal déjà payé',
      text:
        "Vos collaborateurs envoient des centaines de milliers d'e-mails par an. Sans outil, aucun de ces envois ne porte votre message du moment.",
      columns: [
        {
          label: 'CE QUE VOUS PILOTEZ',
          items: [
            'Cohérence de marque sur 100 % des envois',
            'Campagnes de bannières planifiées',
            'Ciblage par équipe, marque ou pays',
            'Statistiques de clics par campagne',
          ],
        },
        {
          label: "SANS DÉPENDRE DE L'IT",
          items: [
            'Vous créez la bannière',
            "Vous choisissez l'audience",
            'Vous programmez les dates',
            'Vous mesurez le résultat',
          ],
        },
      ],
    },
    {
      tag: 'RH / OFFICE MANAGEMENT',
      title: 'Un nouvel arrivant opérationnel dès le premier e-mail',
      text:
        "La signature fait partie du kit d'onboarding, au même titre que le badge et l'ordinateur. Elle ne devrait demander aucune manipulation.",
      columns: [
        {
          label: 'ONBOARDING',
          items: [
            'Signature prête dès la création du compte',
            'Aucun tutoriel à envoyer',
            'Mise à jour automatique en cas de mobilité interne',
          ],
        },
        {
          label: 'MARQUE EMPLOYEUR',
          items: [
            "Bannières de recrutement sur tout l'effectif",
            'Relais des actualités internes',
            "Retrait immédiat à la sortie d'un collaborateur",
          ],
        },
      ],
    },
  ],

  cta: {
    title: 'Voyez Signally sur votre organisation',
    text:
      'Vingt minutes de démonstration : votre annuaire, votre gabarit, votre première campagne.',
    secondaryLabel: 'Réserver une démo',
  },
};

export type UseCases = typeof useCases;
