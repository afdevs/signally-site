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
      write('simLabel', 'minutes', `${s.minutes} min`);
      write('simLabel', 'hourly', `${s.hourly} €`);

      write('simOut', 'monthly', eur(s.monthly));
      write('simOut', 'rate', eur(s.rate));
      write('simOut', 'yearly', eur(s.yearly, 0));
      write('simOut', 'manualHours', `${Math.round(s.manualHours)} h`);
      write('simOut', 'manualCost', eur(s.manualCost, 0));
      // Un écart négatif ne s'affiche pas comme une économie.
      write('simOut', 'saved', eur(Math.max(s.saved, 0), 0));
    };

    for (const input of inputs) {
      input.addEventListener('input', render);
      input.addEventListener('change', render);
    }
  }
}
