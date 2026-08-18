/**
 * Textes de la page Contact.
 *
 * `form.errors` alimente le schéma zod partagé par l'API et le script
 * client : le visiteur lit ses erreurs de validation dans la langue de
 * la page, qu'il ait JavaScript ou non.
 */

export const contact = {
  meta: {
    title: 'Contact & démonstration — parlons de votre déploiement',
    description:
      'Une démonstration Signally dure vingt minutes : votre annuaire, votre gabarit, votre première campagne. Écrivez-nous ou réservez un créneau.',
  },

  hero: {
    eyebrow: 'Contact & démonstration',
    title: 'Parlons de votre déploiement.',
    lede:
      'Une démonstration dure vingt minutes : votre annuaire, votre gabarit, votre première campagne.',
  },

  form: {
    title: 'Demander une démonstration',
    successTitle: 'Message envoyé.',
    successText: "Nous revenons vers vous sous un jour ouvré, à l'adresse indiquée.",
    submit: 'Demander ma démo',
    submitting: 'Envoi en cours…',
    legal:
      'Vos coordonnées servent uniquement à traiter votre demande. Elles sont hébergées en France et ne sont jamais cédées.',
    honeypot: 'Ne remplissez pas ce champ',
    fields: {
      name: { label: 'Prénom et nom', placeholder: 'Camille Durand' },
      email: { label: 'E-mail professionnel', placeholder: 'camille@entreprise.fr' },
      company: { label: 'Entreprise', placeholder: "Nom de l'entreprise" },
      headcount: { label: 'Nombre de collaborateurs', placeholder: '120' },
      environment: { label: 'Environnement de messagerie' },
      message: {
        label: 'Votre besoin',
        placeholder:
          'Unifier les signatures de trois filiales et lancer une campagne de recrutement.',
      },
    },
    /** Libellés du menu déroulant, dans l'ordre de `ENVIRONMENTS`. */
    environments: [
      'Microsoft 365 / Outlook',
      'Google Workspace / Gmail',
      'Les deux',
      'Autre',
    ],
    /** Messages de validation, injectés dans le schéma zod. */
    errors: {
      name: 'Indiquez votre prénom et votre nom.',
      emailRequired: 'Indiquez votre e-mail professionnel.',
      emailInvalid: "Cette adresse e-mail n'est pas valide.",
      company: 'Indiquez le nom de votre entreprise.',
      environment: 'Choisissez un environnement de messagerie.',
      message: 'Décrivez votre besoin en quelques mots (10 caractères minimum).',
      tooLong: 'Ce champ est trop long.',
    },
    /** Bandeaux d'erreur, référencés par le code passé en paramètre d'URL. */
    alerts: {
      validation: 'Certains champs sont incomplets ou invalides. Vérifiez le formulaire.',
      frequence:
        'Trop de demandes envoyées depuis cette adresse. Réessayez dans quelques minutes.',
      envoi: "L'envoi a échoué. Réessayez dans un instant ou écrivez-nous à",
      format: "La demande n'a pas pu être lue. Réessayez.",
      network: 'Connexion impossible. Vérifiez votre réseau, ou écrivez-nous à',
    },
  },

  side: {
    tryTitle: "Vous préférez essayer d'abord ?",
    tryText:
      "L'éditeur est ouvert : créez une signature complète, testez-la dans votre messagerie, décidez ensuite.",
    tag: 'SIGNALLY',
    points: [
      "Éditeur français de gestion de signatures d'e-mail",
      'Données hébergées en France',
      "Support en français, inclus dans l'abonnement",
    ],
    mailLabel: 'Écrire directement :',
    /** Bloc laissé à compléter par Signally, comme dans le prototype. */
    todo: 'Bloc à compléter : adresse postale, numéro de téléphone, SIREN, contact DPO.',
  },
};

export type Contact = typeof contact;
