/**
 * Grille tarifaire Signally.
 *
 * Portage direct de `rate()` et `eur()` du prototype (lignes 1274-1275 de
 * « Signally Site.dc.html »). Ce module est utilisé côté serveur pour le
 * rendu initial — les montants sont donc corrects même sans JavaScript —
 * puis réutilisé tel quel par le script des curseurs.
 */

export type Tier = { upTo: number | null; rate: number };

/**
 * Paliers dégressifs, en euros HT par utilisateur et par mois.
 *
 * Uniquement des nombres : les libellés de tranche (« De 11 à 50
 * utilisateurs ») vivent dans `src/i18n/<langue>/pricing.ts`, sans quoi
 * la grille serait à maintenir en trois exemplaires.
 *
 * DUPLIQUÉ VOLONTAIREMENT. La seconde copie est la constante `TIERS` de
 * `API/src/Service/Support/Tool/SimulatePricingTool.php`, qui alimente
 * l'outil `simulate_pricing` de l'assistant public : le prix qu'il
 * annonce est calculé, jamais mémorisé. Un appel HTTP depuis la boucle
 * d'outils immobiliserait un worker php-fpm à chaque question de tarif,
 * et une constante tenue à jour vaut mieux qu'un prix halluciné.
 * Modifier ici, modifier là-bas.
 *
 * Les bornes de paliers ne sont testées que côté API, dans
 * `tests/Unit/Service/Support/SimulatePricingToolTest.php` : ce dépôt
 * n'a pas de lanceur de tests. Une divergence introduite ici ne sera
 * donc signalée par rien.
 */
export const TIERS: Tier[] = [
  { upTo: 10, rate: 1.5 },
  { upTo: 50, rate: 1.25 },
  { upTo: 100, rate: 1.0 },
  { upTo: 500, rate: 0.75 },
  { upTo: null, rate: 0.5 },
];

/** Tarif unitaire applicable pour un effectif donné. */
export function rate(users: number): number {
  if (users <= 10) return 1.5;
  if (users <= 50) return 1.25;
  if (users <= 100) return 1.0;
  if (users <= 500) return 0.75;
  return 0.5;
}

/**
 * Montant en euros, formaté selon la langue.
 *
 * Le style `currency` d'Intl place le symbole où la langue l'attend —
 * « 1 234,50 € » en français et en espagnol, « €1,234.50 » en anglais —
 * là où une concaténation « valeur + ' €' » imposerait la convention
 * française partout. La devise, elle, reste l'euro dans les trois cas.
 */
export function eur(value: number, digits = 2, intlLocale = 'fr-FR'): string {
  return new Intl.NumberFormat(intlLocale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

export type Simulation = {
  users: number;
  updates: number;
  minutes: number;
  hourly: number;
  rate: number;
  monthly: number;
  yearly: number;
  manualHours: number;
  manualCost: number;
  saved: number;
};

/** Valeurs par défaut des curseurs, identiques à l'état du prototype. */
export const DEFAULTS = { users: 120, updates: 4, minutes: 12, hourly: 45 } as const;

/**
 * Simulateur de coût.
 *
 * `manualHours` estime le temps passé à gérer les signatures à la main :
 * chaque collaborateur mobilise `minutes` minutes à chacune des `updates`
 * mises à jour annuelles. `saved` est l'écart avec l'abonnement annuel,
 * borné à zéro côté affichage.
 */
export function simulate(input: {
  users: number;
  updates?: number;
  minutes?: number;
  hourly?: number;
}): Simulation {
  const users = input.users;
  const updates = input.updates ?? DEFAULTS.updates;
  const minutes = input.minutes ?? DEFAULTS.minutes;
  const hourly = input.hourly ?? DEFAULTS.hourly;

  const unit = rate(users);
  const monthly = users * unit;
  const yearly = monthly * 12;
  const manualHours = (users * minutes * updates) / 60;
  const manualCost = manualHours * hourly;

  return {
    users,
    updates,
    minutes,
    hourly,
    rate: unit,
    monthly,
    yearly,
    manualHours,
    manualCost,
    saved: manualCost - yearly,
  };
}
