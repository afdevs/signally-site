/**
 * Chaînes qui n'apparaissent pas à l'écran mais partent dans les données
 * structurées de `Base.astro` (Organization, SoftwareApplication).
 * Les moteurs les lisent dans la langue de la page : elles doivent donc
 * suivre la locale, au même titre que le contenu visible.
 */

export const seo = {
  /** `areaServed` de schema.org : zone géographique réellement desservie. */
  areaServed: 'FR',
  /** Décrit la grille tarifaire à l'AggregateOffer, pour l'optimisation GEO. */
  offerDescription:
    "Tarif dégressif par utilisateur et par mois : 1,50 € jusqu'à 10 utilisateurs, "
    + "1,25 € jusqu'à 50, 1,00 € jusqu'à 100, 0,75 € jusqu'à 500, 0,50 € au-delà.",
};

export type Seo = typeof seo;
