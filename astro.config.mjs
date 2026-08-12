// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';

export const SITE_URL = 'https://www.signally.io';

export default defineConfig({
  site: SITE_URL,
  // Everything is prerendered; only src/pages/api/contact.ts opts out with
  // `export const prerender = false`, which is why an adapter is still needed.
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  /**
   * 4322, et non le 4321 par défaut d'Astro : ce port est déjà occupé en
   * local par l'application Signally (v2-app). La variable PORT reste
   * prioritaire, ce qui laisse l'hébergeur imposer le sien.
   */
  server: {
    port: Number(process.env.PORT ?? 4322),
    host: process.env.HOST ?? false,
  },
  integrations: [
    mdx(),
    sitemap({
      // /plan-seo is an internal editorial roadmap: noindex and out of the sitemap.
      filter: (page) => !page.includes('/plan-seo'),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  build: { format: 'directory' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  vite: {
    build: { assetsInlineLimit: 2048 },
  },
});
