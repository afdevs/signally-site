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
   * Port unique pour le serveur de développement et pour le serveur Node
   * issu du build. La variable d'environnement PORT reste prioritaire, ce
   * qui laisse l'hébergeur imposer le sien en production.
   */
  server: {
    port: Number(process.env.PORT ?? 3000),
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
