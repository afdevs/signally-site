/**
 * Les sept piliers du plan éditorial.
 *
 * Ce fichier ne porte plus que les métadonnées de grappe. La liste des
 * articles vivait ici en dur ; elle vient désormais de la collection
 * (`src/lib/blog.ts`), qui est la seule source de leurs titres et slugs.
 *
 * Les noms français ci-dessous sont des **identifiants techniques** :
 * ils sont la valeur du `z.enum` des frontmatters, dans les trois
 * langues. Leurs libellés affichés sont traduits, dans les
 * dictionnaires `src/i18n/<langue>/blog.ts`.
 */

import type { PageKey } from '../i18n/routes';

export const CLUSTERS = [
  'Microsoft 365 & Outlook',
  'Google Workspace & Gmail',
  'Créer sa signature',
  'Gestion & gouvernance',
  'Campagnes & bannières',
  'RGPD & sécurité',
  'Comparatifs & alternatives',
] as const;

export type Cluster = (typeof CLUSTERS)[number];

/**
 * Habillage visuel des vignettes par grappe, repris de la table `th`
 * du prototype (lignes 1354-1362). Sert de vignette générée tant
 * qu'aucune image n'est fournie.
 */
export const CLUSTER_THEME: Record<
  Cluster,
  { bg: string; panel: string; bar: string; dot: string; tag: string; tagInk: string; abbr: string }
> = {
  'Microsoft 365 & Outlook': {
    bg: '#1A1A1A', panel: 'rgba(255,255,255,.94)', bar: '#3B3B38',
    dot: 'rgba(242,197,49,.16)', tag: '#F2C531', tagInk: '#1A1A1A', abbr: 'M365',
  },
  'Google Workspace & Gmail': {
    bg: '#F2EFE6', panel: '#fff', bar: '#DCD8CC',
    dot: 'rgba(26,26,26,.07)', tag: '#1A1A1A', tagInk: '#fff', abbr: 'GWS',
  },
  'Créer sa signature': {
    bg: '#F2C531', panel: '#fff', bar: '#E4E1D8',
    dot: 'rgba(26,26,26,.10)', tag: '#1A1A1A', tagInk: '#F2C531', abbr: 'DESIGN',
  },
  'Gestion & gouvernance': {
    bg: '#EDEFEA', panel: '#fff', bar: '#D9DCD4',
    dot: 'rgba(26,26,26,.07)', tag: '#1A1A1A', tagInk: '#fff', abbr: 'ADMIN',
  },
  'Campagnes & bannières': {
    bg: '#2A2622', panel: 'rgba(255,255,255,.94)', bar: '#413B34',
    dot: 'rgba(242,197,49,.14)', tag: '#F2C531', tagInk: '#1A1A1A', abbr: 'CAMPAGNE',
  },
  'RGPD & sécurité': {
    bg: '#1F2A2E', panel: 'rgba(255,255,255,.94)', bar: '#33403F',
    dot: 'rgba(255,255,255,.08)', tag: '#fff', tagInk: '#1F2A2E', abbr: 'RGPD',
  },
  'Comparatifs & alternatives': {
    bg: '#F7F6F2', panel: '#fff', bar: '#E4E1D8',
    dot: 'rgba(26,26,26,.06)', tag: '#1A1A1A', tagInk: '#fff', abbr: 'VS',
  },
};


/**
 * Page pilier de chaque grappe — cible du lien montant obligatoire.
 *
 * Une clé de page, pas une URL : le chemin est résolu par langue via
 * `localizedPath`, pour qu'un article anglais pointe vers /en/features
 * et non vers /fonctionnalites.
 */
export const PILLAR_PAGE: Record<Cluster, PageKey> = {
  'Microsoft 365 & Outlook': 'microsoft',
  'Google Workspace & Gmail': 'google',
  'Créer sa signature': 'features',
  'Gestion & gouvernance': 'useCases',
  'Campagnes & bannières': 'campaigns',
  'RGPD & sécurité': 'security',
  'Comparatifs & alternatives': 'compare',
};

/** Grappe rattachée à une page pilier, ou `undefined` si la page n'en est pas une. */
export function clusterOfPillar(page: PageKey): Cluster | undefined {
  return CLUSTERS.find((cluster) => PILLAR_PAGE[cluster] === page);
}
