import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CLUSTERS } from './data/clusters';

/**
 * Collection d'articles du blog.
 *
 * `related` et `pillar` matérialisent les règles de maillage interne
 * décrites par le prototype : lien montant vers la page pilier, au
 * moins deux liens latéraux vers des articles de la même grappe, et un
 * lien de conversion. Le script `npm run check:links` les vérifie.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().max(120),
    description: z.string().min(50).max(300),
    keyword: z.string(),
    cluster: z.enum(CLUSTERS),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Résumé « En bref », exigé par les règles GEO du plan éditorial. */
    summary: z.array(z.string()).min(3).max(6),
    /** Slugs d'articles de la même grappe (au moins deux). */
    related: z.array(z.string()).default([]),
    /** FAQ de fin d'article — alimente aussi les données FAQPage. */
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
