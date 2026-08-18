import { z } from 'zod';

/**
 * Schéma du formulaire de démonstration.
 * Partagé par l'API et le script client, pour que les messages
 * d'erreur soient rigoureusement les mêmes des deux côtés.
 *
 * Les messages sont injectés plutôt qu'écrits en dur : le visiteur doit
 * lire ses erreurs dans la langue de la page. Les valeurs d'environnement,
 * elles, restent en français — ce sont des identifiants transmis au mail
 * interne, pas du texte affiché : le formulaire en montre la traduction.
 */

export const ENVIRONMENTS = [
  'Microsoft 365 / Outlook',
  'Google Workspace / Gmail',
  'Les deux',
  'Autre',
] as const;

export type ContactMessages = {
  name: string;
  emailRequired: string;
  emailInvalid: string;
  company: string;
  environment: string;
  message: string;
  tooLong: string;
};

export function makeContactSchema(m: ContactMessages) {
  return z.object({
  name: z
    .string()
    .trim()
    .min(2, m.name)
    .max(120, m.tooLong),

  email: z
    .string()
    .trim()
    .min(1, m.emailRequired)
    .max(180, m.tooLong)
    .email(m.emailInvalid),

  company: z
    .string()
    .trim()
    .min(2, m.company)
    .max(150, m.tooLong),

  headcount: z
    .string()
    .trim()
    .max(60, m.tooLong)
    .optional()
    .or(z.literal('')),

  environment: z.enum(ENVIRONMENTS, {
    errorMap: () => ({ message: m.environment }),
  }),

  message: z
    .string()
    .trim()
    .min(10, m.message)
    .max(5000, m.tooLong),

  /**
   * Pot de miel : champ invisible pour un humain.
   *
   * Volontairement permissif au niveau du schéma. Le rejeter ici
   * produirait une erreur de validation, ce qui apprendrait au robot
   * que le champ est piégé. Le tri se fait après validation : si ce
   * champ est rempli, l'API répond « succès » sans rien envoyer.
   */
  website: z.string().max(200).optional(),

  /** Horodatage d'affichage du formulaire, en millisecondes. */
  ts: z.coerce.number().optional(),
  });
}

export type ContactInput = z.infer<ReturnType<typeof makeContactSchema>>;

/** Délai minimal entre l'affichage du formulaire et l'envoi. */
export const MIN_FILL_MS = 3000;

/** Réduit une erreur zod à { champ: message }, pour l'affichage inline. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? '_');
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
