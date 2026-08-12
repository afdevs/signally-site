/**
 * Grille tarifaire Signally.
 *
 * Portage direct de `rate()` et `eur()` du prototype (lignes 1274-1275 de
 * « Signally Site.dc.html »). Ce module est utilisé côté serveur pour le
 * rendu initial — les montants sont donc corrects même sans JavaScript —
 * puis réutilisé tel quel par le script des curseurs.
 */

export type Tier = { upTo: number | null; rate: number; label: string };

/** Paliers dégressifs, en euros HT par utilisateur et par mois. */
export const TIERS: Tier[] = [
  { upTo: 10, rate: 1.5, label: "Jusqu'à 10 utilisateurs" },
  { upTo: 50, rate: 1.25, label: 'De 11 à 50 utilisateurs' },
  { upTo: 100, rate: 1.0, label: 'De 51 à 100 utilisateurs' },
  { upTo: 500, rate: 0.75, label: 'De 101 à 500 utilisateurs' },
  { upTo: null, rate: 0.5, label: 'Au-delà de 500 utilisateurs' },
];

/** Tarif unitaire applicable pour un effectif donné. */
export function rate(users: number): number {
  if (users <= 10) return 1.5;
  if (users <= 50) return 1.25;
  if (users <= 100) return 1.0;
  if (users <= 500) return 0.75;
  return 0.5;
}

/** Montant formaté en français, ex. « 1 234,50 € ». */
export function eur(value: number, digits = 2): string {
  return (
    value.toLocaleString('fr-FR', {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    }) + ' €'
  );
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
