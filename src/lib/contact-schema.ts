import { z } from 'zod';

/**
 * Schéma du formulaire de démonstration.
 * Partagé par l'API et le script client, pour que les messages
 * d'erreur soient rigoureusement les mêmes des deux côtés.
 */

export const ENVIRONMENTS = [
  'Microsoft 365 / Outlook',
  'Google Workspace / Gmail',
  'Les deux',
  'Autre',
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Indiquez votre prénom et votre nom.')
    .max(120, 'Ce champ est trop long.'),

  email: z
    .string()
    .trim()
    .min(1, 'Indiquez votre e-mail professionnel.')
    .max(180, 'Cette adresse est trop longue.')
    .email("Cette adresse e-mail n'est pas valide."),

  company: z
    .string()
    .trim()
    .min(2, "Indiquez le nom de votre entreprise.")
    .max(150, 'Ce champ est trop long.'),

  headcount: z
    .string()
    .trim()
    .max(60, 'Ce champ est trop long.')
    .optional()
    .or(z.literal('')),

  environment: z.enum(ENVIRONMENTS, {
    errorMap: () => ({ message: 'Choisissez un environnement de messagerie.' }),
  }),

  message: z
    .string()
    .trim()
    .min(10, 'Décrivez votre besoin en quelques mots (10 caractères minimum).')
    .max(5000, 'Votre message dépasse 5 000 caractères.'),

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

export type ContactInput = z.infer<typeof contactSchema>;

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
