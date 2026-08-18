import { simulate, eur } from './pricing';

/**
 * Pilote les simulateurs de coût côté client.
 *
 * Contrat DOM, partagé par les deux variantes du composant :
 *   [data-sim]                 racine
 *   [data-sim-input="users"]   curseur (users | updates | minutes | hourly)
 *   [data-sim-label="users"]   étiquette de la valeur du curseur
 *   [data-sim-out="monthly"]   résultat calculé
 *
 * La racine porte aussi la langue et les abréviations d'unité, posées
 * par le gabarit : le script reste ainsi sans texte en dur, et les
 * montants recalculés au curseur se formatent comme ceux du rendu
 * serveur.
 *   data-sim-locale="fr-FR"    étiquette BCP 47 passée à Intl
 *   data-sim-unit-minutes      abréviation des minutes, ex. « min »
 *   data-sim-unit-hours        abréviation des heures, ex. « h »
 *
 * Le rendu initial est déjà fait côté serveur : ce script ne fait que
 * recalculer à chaque mouvement de curseur.
 */
export function initSimulators(): void {
  for (const root of document.querySelectorAll<HTMLElement>('[data-sim]')) {
    // Deux composants peuvent monter le même script sur une page.
    if (root.dataset.simReady === 'true') continue;
    root.dataset.simReady = 'true';

    const inputs = Array.from(root.querySelectorAll<HTMLInputElement>('[data-sim-input]'));
    if (inputs.length === 0) continue;

    const intlLocale = root.dataset.simLocale ?? 'fr-FR';
    const unitMinutes = root.dataset.simUnitMinutes ?? 'min';
    const unitHours = root.dataset.simUnitHours ?? 'h';
    const money = (value: number, digits = 2) => eur(value, digits, intlLocale);

    const read = (name: string) => {
      const el = inputs.find((i) => i.dataset.simInput === name);
      return el ? Number(el.value) : undefined;
    };

    const write = (attr: 'simLabel' | 'simOut', key: string, value: string) => {
      const selector = attr === 'simLabel' ? `[data-sim-label="${key}"]` : `[data-sim-out="${key}"]`;
      const el = root.querySelector<HTMLElement>(selector);
      if (el) el.textContent = value;
    };

    const render = () => {
      const s = simulate({
        users: read('users') ?? 120,
        updates: read('updates'),
        minutes: read('minutes'),
        hourly: read('hourly'),
      });

      write('simLabel', 'users', String(s.users));
      write('simLabel', 'updates', String(s.updates));
      write('simLabel', 'minutes', `${s.minutes} ${unitMinutes}`);
      write('simLabel', 'hourly', money(s.hourly, 0));

      write('simOut', 'monthly', money(s.monthly));
      write('simOut', 'rate', money(s.rate));
      write('simOut', 'yearly', money(s.yearly, 0));
      write('simOut', 'manualHours', `${Math.round(s.manualHours)} ${unitHours}`);
      write('simOut', 'manualCost', money(s.manualCost, 0));
      // Un écart négatif ne s'affiche pas comme une économie.
      write('simOut', 'saved', money(Math.max(s.saved, 0), 0));
    };

    for (const input of inputs) {
      input.addEventListener('input', render);
      input.addEventListener('change', render);
    }
  }
}
