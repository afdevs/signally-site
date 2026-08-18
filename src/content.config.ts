import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CLUSTERS } from './data/clusters';

/**
 * Collection d'articles du blog, une langue par dossier :
 * `src/content/blog/<langue>/<clé>.md`.
 *
 * Le **nom de fichier est la clé de l'article**, identique dans les
 * trois langues ; c'est l'URL publique qui change, portée par `slug`.
 * Deux conséquences voulues :
 *   — `related` s'écrit une seule fois et reste valable partout ;
 *   — la complétude se vérifie d'un `diff <(ls fr) <(ls en)`.
 *
 * `related` et `pillar` matérialisent les règles de maillage interne
 * décrites par le prototype : lien montant vers la page pilier, au
 * moins deux liens latéraux vers des articles de la même grappe, et un
 * lien de conversion. Le script `npm run check:links` les vérifie.
 */
const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
    /**
     * L'identifiant par défaut ne garde que le nom de fichier, ce qui
     * ferait entrer en collision `fr/x.md` et `en/x.md`. On conserve le
     * chemin : c'est lui qui porte la langue.
     */
    generateId: ({ entry }) => entry.replace(/\.[^.]+$/, ''),
  }),
  schema: z.object({
    /** Slug d'URL, traduit. En français il vaut le nom de fichier. */
    slug: z.string(),
    title: z.string().max(120),
    description: z.string().min(50).max(300),
    keyword: z.string(),
    cluster: z.enum(CLUSTERS),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Résumé « En bref », exigé par les règles GEO du plan éditorial. */
    summary: z.array(z.string()).min(3).max(6),
    /** Clés d'articles de la même grappe (au moins deux). */
    related: z.array(z.string()).default([]),
    /** FAQ de fin d'article — alimente aussi les données FAQPage. */
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
