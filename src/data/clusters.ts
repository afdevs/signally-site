/**
 * Plan éditorial : 40 articles répartis en 7 piliers.
 *
 * Titres, mots-clés et rattachements repris du tableau `A` du prototype
 * (« Signally Site.dc.html », lignes 1298-1339). Les slugs dérivent du
 * mot-clé cible plutôt que du titre : ils sont plus courts, stables et
 * alignés sur la requête visée. Le prototype tronquait le titre à 40
 * caractères, ce qui coupait souvent en plein mot.
 */

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

/** Page pilier de chaque grappe — cible du lien montant obligatoire. */
export const PILLAR_OF: Record<Cluster, { href: string; anchor: string }> = {
  'Microsoft 365 & Outlook': {
    href: '/integrations/microsoft-365-outlook',
    anchor: "l'add-in Microsoft 365",
  },
  'Google Workspace & Gmail': {
    href: '/integrations/google-workspace-gmail',
    anchor: "l'add-on Google Workspace",
  },
  'Créer sa signature': {
    href: '/fonctionnalites',
    anchor: 'éditeur de signatures Signally',
  },
  'Gestion & gouvernance': {
    href: '/cas-usage',
    anchor: 'gestion des signatures par équipe',
  },
  'Campagnes & bannières': {
    href: '/campagnes',
    anchor: 'campagnes de bannières de signature',
  },
  'RGPD & sécurité': {
    href: '/securite-rgpd',
    anchor: 'approche sécurité et RGPD de Signally',
  },
  'Comparatifs & alternatives': {
    href: '/comparatifs',
    anchor: 'comparatif des logiciels de signature mail',
  },
};

/** Description courte de chaque grappe, affichée sur les cartes du blog. */
export const CLUSTER_DESC: Record<Cluster, string> = {
  'Microsoft 365 & Outlook': 'Déploiement, add-in, Exchange et annuaire Entra ID.',
  'Google Workspace & Gmail': "Console d'administration, unités organisationnelles et Gmail.",
  'Créer sa signature': 'Éditeur, modèles, HTML et bonnes pratiques de conception.',
  'Gestion & gouvernance': 'Onboarding, filiales, charte et coût de la gestion manuelle.',
  'Campagnes & bannières': 'Planification, ciblage et mesure de vos bannières.',
  'RGPD & sécurité': "Conformité, souveraineté et périmètre d'accès aux données.",
  'Comparatifs & alternatives': 'Critères de choix et panorama du marché.',
};

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

export type PlannedArticle = {
  n: string;
  slug: string;
  title: string;
  keyword: string;
  cluster: Cluster;
};

const RAW: [title: string, keyword: string, cluster: Cluster, slug: string][] = [
  ["Comment déployer une signature mail sur Outlook pour tous les collaborateurs", "signature mail outlook entreprise", "Microsoft 365 & Outlook", "signature-mail-outlook-entreprise"],
  ["Add-in ou règle de transport Exchange : quelle méthode de signature choisir", "signature exchange règle de transport", "Microsoft 365 & Outlook", "add-in-ou-regle-de-transport-exchange"],
  ["Insérer un logo dans une signature Outlook sans qu'il se casse", "logo signature outlook", "Microsoft 365 & Outlook", "logo-signature-outlook"],
  ["Signature mail sur le nouveau Outlook Windows : ce qui change en 2026", "nouveau outlook signature", "Microsoft 365 & Outlook", "nouveau-outlook-signature"],
  ["Déployer une signature depuis le centre d'administration Microsoft 365", "déployer signature microsoft 365", "Microsoft 365 & Outlook", "deployer-signature-microsoft-365"],
  ["Signature Outlook mobile : pourquoi elle disparaît et comment la rétablir", "signature outlook mobile", "Microsoft 365 & Outlook", "signature-outlook-mobile"],
  ["Synchroniser les signatures avec l'annuaire Entra ID", "signature entra id azure ad", "Microsoft 365 & Outlook", "signature-entra-id-azure-ad"],
  ["Mettre une signature Gmail identique pour tous les utilisateurs du domaine", "signature gmail entreprise", "Google Workspace & Gmail", "signature-gmail-entreprise"],
  ["Pied de page Google Workspace : ce que la console d'administration ne sait pas faire", "google workspace signature", "Google Workspace & Gmail", "google-workspace-signature"],
  ["Signature Gmail sur mobile : ce qui s'affiche réellement", "signature gmail mobile", "Google Workspace & Gmail", "signature-gmail-mobile"],
  ["Gérer les signatures par unité organisationnelle Google", "unité organisationnelle signature", "Google Workspace & Gmail", "unite-organisationnelle-signature"],
  ["Passer des signatures Gmail individuelles à une gestion centralisée", "gestion signature gmail", "Google Workspace & Gmail", "gestion-signature-gmail"],
  ["Comment créer une signature mail professionnelle en 2026", "créer une signature mail", "Créer sa signature", "creer-une-signature-mail"],
  ["Générateur de signature mail gratuit : ce que l'on peut faire sans payer", "générateur de signature mail gratuit", "Créer sa signature", "generateur-de-signature-mail-gratuit"],
  ["Modèles de signature mail : 12 exemples par secteur d'activité", "modèle signature mail", "Créer sa signature", "modele-signature-mail"],
  ["Que mettre dans une signature mail : les 9 éléments indispensables", "que mettre dans une signature mail", "Créer sa signature", "que-mettre-dans-une-signature-mail"],
  ["Signature mail en HTML : les règles de compatibilité à respecter", "signature mail html", "Créer sa signature", "signature-mail-html"],
  ["Poids, taille et format du logo dans une signature mail", "taille logo signature mail", "Créer sa signature", "taille-logo-signature-mail"],
  ["Signature mail bilingue : gérer plusieurs langues et plusieurs pays", "signature mail en anglais", "Créer sa signature", "signature-mail-bilingue"],
  ["Gestion des signatures mail en entreprise : le guide complet", "gestion des signatures mail en entreprise", "Gestion & gouvernance", "gestion-des-signatures-mail-en-entreprise"],
  ["Uniformiser les signatures de 50, 200 ou 1 000 collaborateurs", "harmoniser les signatures mail", "Gestion & gouvernance", "harmoniser-les-signatures-mail"],
  ["Onboarding : préparer la signature d'un nouveau collaborateur", "signature nouveau collaborateur", "Gestion & gouvernance", "signature-nouveau-collaborateur"],
  ["Départ d'un collaborateur : retirer sa signature et sécuriser sa boîte", "départ collaborateur signature mail", "Gestion & gouvernance", "depart-collaborateur-signature-mail"],
  ["Signatures multi-filiales et multi-marques : comment s'organiser", "signature mail groupe filiales", "Gestion & gouvernance", "signature-mail-groupe-filiales"],
  ["Charte de signature mail : le modèle à faire valider en interne", "charte signature mail", "Gestion & gouvernance", "charte-signature-mail"],
  ["Combien coûte réellement la gestion manuelle des signatures ?", "coût gestion signatures mail", "Gestion & gouvernance", "cout-gestion-signatures-mail"],
  ["Gouvernance de marque : pourquoi la signature est votre point faible", "gouvernance de marque email", "Gestion & gouvernance", "gouvernance-de-marque-email"],
  ["Marketing par signature mail : le guide complet 2026", "marketing par signature mail", "Campagnes & bannières", "marketing-par-signature-mail"],
  ["Bannière de signature mail : formats, poids et bonnes pratiques", "bannière signature mail", "Campagnes & bannières", "banniere-signature-mail"],
  ["12 idées de campagnes de bannières, saison par saison", "idées campagne signature mail", "Campagnes & bannières", "idees-campagne-signature-mail"],
  ["Planifier ses campagnes de signature sur un trimestre", "planifier campagne bannière email", "Campagnes & bannières", "planifier-campagne-banniere-email"],
  ["Mesurer le ROI d'une campagne de bannière de signature", "roi signature mail", "Campagnes & bannières", "roi-signature-mail"],
  ["Bannière animée dans une signature : ce qui s'affiche selon les messageries", "gif animé signature mail", "Campagnes & bannières", "gif-anime-signature-mail"],
  ["Signature mail et RGPD : ce que dit vraiment le règlement", "signature mail rgpd", "RGPD & sécurité", "signature-mail-rgpd"],
  ["Mentions légales obligatoires dans un e-mail professionnel", "mentions légales email professionnel", "RGPD & sécurité", "mentions-legales-email-professionnel"],
  ["Souveraineté des données : pourquoi choisir un éditeur français", "hébergement données france saas", "RGPD & sécurité", "hebergement-donnees-france-saas"],
  ["Un outil de signature peut-il lire vos e-mails ? La réponse technique", "sécurité outil signature mail", "RGPD & sécurité", "securite-outil-signature-mail"],
  ["Disclaimer de confidentialité en bas d'e-mail : utilité et rédaction", "disclaimer email confidentialité", "RGPD & sécurité", "disclaimer-email-confidentialite"],
  ["Les meilleurs logiciels de gestion de signatures mail en 2026", "meilleur logiciel signature mail", "Comparatifs & alternatives", "meilleur-logiciel-signature-mail"],
  ["Choisir son outil de signature mail : la grille des 8 critères", "comparatif outil signature mail", "Comparatifs & alternatives", "comparatif-outil-signature-mail"],
];

export const PLANNED_ARTICLES: PlannedArticle[] = RAW.map(([title, keyword, cluster, slug], i) => ({
  n: String(i + 1).padStart(2, '0'),
  slug,
  title,
  keyword,
  cluster,
}));

/** Articles d'une grappe donnée. */
export function articlesInCluster(cluster: Cluster, exceptSlug?: string): PlannedArticle[] {
  return PLANNED_ARTICLES.filter((a) => a.cluster === cluster && a.slug !== exceptSlug);
}

/** Articles satellites rattachés à une page pilier, via sa grappe. */
export function articlesForPillar(href: string): PlannedArticle[] {
  const cluster = (Object.keys(PILLAR_OF) as Cluster[]).find((c) => PILLAR_OF[c].href === href);
  return cluster ? articlesInCluster(cluster) : [];
}

export function articleBySlug(slug: string): PlannedArticle | undefined {
  return PLANNED_ARTICLES.find((a) => a.slug === slug);
}
