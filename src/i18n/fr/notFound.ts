/** Textes de la page 404. */

export const notFound = {
  meta: {
    title: 'Page introuvable',
    description: "Cette page n'existe pas ou a été déplacée.",
  },
  code: '404',
  title: "Cette page n'existe pas.",
  text:
    'Le lien est peut-être erroné, ou la page a été déplacée. Voici les endroits les plus utiles du site.',
  /** Libellés des raccourcis ; les chemins viennent de la table de routes. */
  links: {
    features: "L'éditeur de signatures",
    pricing: 'Tarifs et simulateur',
    blog: 'Le blog',
    contact: 'Contact & démonstration',
  },
  home: "Retour à l'accueil",
};

export type NotFound = typeof notFound;
