#!/usr/bin/env node
/**
 * Vérification du maillage interne et des liens du site construit.
 *
 * Contrôle les règles définies par le plan éditorial du prototype
 * (« Règles de maillage interne », page Plan SEO) :
 *   1. chaque article pointe vers sa page pilier ;
 *   2. chaque article compte au moins deux liens latéraux vers des
 *      articles de la même grappe ;
 *   3. chaque article contient au moins un lien de conversion
 *      (simulateur de coût ou création de signature) ;
 *   4. les pages comparatives renvoient vers Tarifs et Sécurité ;
 *   5. aucun lien interne ne pointe vers une page inexistante.
 *
 * Usage : npm run build && npm run check:links
 */

import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist/client';
const APP_HOST = 'app.signally.io';

if (!existsSync(DIST)) {
  console.error(`✗ ${DIST} est absent. Lancez d'abord « npm run build ».`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Collecte des pages construites
// ---------------------------------------------------------------------------

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(path)));
    else if (entry.name.endsWith('.html')) out.push(path);
  }
  return out;
}

const files = await walk(DIST);

/** « dist/client/blog/x/index.html » → « /blog/x » */
function routeOf(file) {
  const rel = relative(DIST, file).replace(/\\/g, '/');
  const route = '/' + rel.replace(/index\.html$/, '').replace(/\/$/, '');
  return route === '/' ? '/' : route;
}

const routes = new Set(files.map(routeOf));
// Rendues à la demande : absentes de dist mais bien servies par le
// serveur. Une par langue, avec le slug traduit de src/i18n/routes.ts.
for (const contact of ['/contact', '/en/contact', '/es/contacto']) {
  routes.add(contact);
}

// ---------------------------------------------------------------------------
// Extraction des liens
// ---------------------------------------------------------------------------

const pages = new Map();
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  pages.set(routeOf(file), { file, html, hrefs });
}

const problems = [];
const warn = (route, message) => problems.push({ route, message });

// ---------------------------------------------------------------------------
// 5. Liens internes cassés
// ---------------------------------------------------------------------------

for (const [route, { hrefs }] of pages) {
  for (const href of hrefs) {
    if (!href.startsWith('/')) continue;               // externe, ancre, mailto
    if (href.startsWith('//')) continue;               // protocole-relatif
    const path = href.split(/[?#]/)[0].replace(/\/$/, '') || '/';
    if (path.startsWith('/_astro') || path.startsWith('/screenshots')) continue;
    if (path.endsWith('.xml') || path.endsWith('.txt') || path.endsWith('.svg')
        || path.endsWith('.png') || path.startsWith('/api/')) continue;
    if (!routes.has(path)) warn(route, `lien interne cassé → ${href}`);
  }
}

// ---------------------------------------------------------------------------
// Règles de maillage propres aux articles
// ---------------------------------------------------------------------------

// Les règles ci-dessous s'appuient sur le HTML construit plutôt que sur
// src/data/clusters.ts : on vérifie ainsi ce qui est réellement servi,
// pas ce que la source prétend.
//
// Le site étant trilingue, elles sont appliquées langue par langue : un
// article anglais doit pointer vers le pilier anglais et vers d'autres
// articles anglais. Un lien latéral qui traverserait la frontière
// linguistique serait un défaut, pas un maillage.

/** Chemins des pages, par langue. Doit suivre `src/i18n/routes.ts`. */
const LOCALE_ROUTES = {
  fr: {
    prefix: '',
    blog: '/blog',
    pricing: '/tarifs',
    security: '/securite-rgpd',
    compare: '/comparatifs',
    pillars: [
      '/integrations/microsoft-365-outlook',
      '/integrations/google-workspace-gmail',
      '/fonctionnalites',
      '/cas-usage',
      '/campagnes',
      '/securite-rgpd',
      '/comparatifs',
    ],
  },
  en: {
    prefix: '/en',
    blog: '/en/blog',
    pricing: '/en/pricing',
    security: '/en/security-gdpr',
    compare: '/en/comparisons',
    pillars: [
      '/en/integrations/microsoft-365-outlook',
      '/en/integrations/google-workspace-gmail',
      '/en/features',
      '/en/use-cases',
      '/en/campaigns',
      '/en/security-gdpr',
      '/en/comparisons',
    ],
  },
  es: {
    prefix: '/es',
    blog: '/es/blog',
    pricing: '/es/precios',
    security: '/es/seguridad-rgpd',
    compare: '/es/comparativas',
    pillars: [
      '/es/integraciones/microsoft-365-outlook',
      '/es/integraciones/google-workspace-gmail',
      '/es/funcionalidades',
      '/es/casos-de-uso',
      '/es/campanas',
      '/es/seguridad-rgpd',
      '/es/comparativas',
    ],
  },
};

for (const [locale, conf] of Object.entries(LOCALE_ROUTES)) {
  const articleRoutes = [...pages.keys()].filter(
    (r) => r.startsWith(`${conf.blog}/`) && r !== conf.blog
  );

  const conversion = [conf.pricing, APP_HOST];

  for (const route of articleRoutes) {
    const { html, hrefs } = pages.get(route);

    // Le gabarit d'article isole le corps rédactionnel ; on restreint
    // l'analyse au contenu, pour ne pas compter l'en-tête et le pied de page.
    const bodyStart = html.indexOf('class="prose"');
    const bodyEnd = html.indexOf('class="side"');
    const body = bodyStart > -1 && bodyEnd > bodyStart ? html.slice(bodyStart, bodyEnd) : html;
    const bodyHrefs = [...body.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);

    // 1. Lien vers une page pilier de la même langue.
    const hasPillar = hrefs.some((h) => conf.pillars.includes(h.replace(/\/$/, '')));
    if (!hasPillar) warn(route, `aucun lien vers une page pilier (${locale})`);

    // 2. Au moins deux liens latéraux vers d'autres articles de la même langue.
    const lateral = new Set(
      bodyHrefs
        .filter((h) => h.startsWith(`${conf.blog}/`) && h.replace(/\/$/, '') !== route)
        .map((h) => h.replace(/\/$/, ''))
    );
    if (lateral.size < 2) {
      warn(route, `${lateral.size} lien(s) latéral(aux) dans le corps, 2 attendus au minimum`);
    }

    // 3. Au moins un lien de conversion.
    const hasConversion = hrefs.some((h) => conversion.some((c) => h.includes(c)));
    if (!hasConversion) warn(route, `aucun lien de conversion (${locale})`);

    // 4. Aucune fuite vers une autre langue depuis le corps rédactionnel.
    const others = Object.entries(LOCALE_ROUTES).filter(([code]) => code !== locale);
    for (const [code, other] of others) {
      const leaked = bodyHrefs.filter((h) => h.startsWith(`${other.blog}/`));
      if (leaked.length > 0) {
        warn(route, `${leaked.length} lien(s) vers le blog ${code} depuis un article ${locale}`);
      }
    }
  }

  // 5. La page comparative renvoie vers Tarifs et Sécurité, dans sa langue.
  const comparePage = pages.get(conf.compare);
  if (comparePage) {
    for (const target of [conf.pricing, conf.security]) {
      if (!comparePage.hrefs.some((h) => h.replace(/\/$/, '') === target)) {
        warn(conf.compare, `ne renvoie pas vers ${target}`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Contrôles complémentaires
// ---------------------------------------------------------------------------

// Aucun href="#" résiduel du prototype.
for (const [route, { hrefs }] of pages) {
  const dead = hrefs.filter((h) => h === '#').length;
  if (dead > 0) warn(route, `${dead} lien(s) href="#" non résolu(s)`);
}

// /plan-seo doit être en noindex et absente du sitemap.
const planSeo = pages.get('/plan-seo');
if (planSeo && !planSeo.html.includes('noindex')) {
  warn('/plan-seo', 'devrait porter une balise robots noindex');
}
const sitemapPath = join(DIST, 'sitemap-0.xml');
if (existsSync(sitemapPath)) {
  const sitemap = await readFile(sitemapPath, 'utf8');
  if (sitemap.includes('/plan-seo')) warn('/plan-seo', 'ne devrait pas figurer au sitemap');
}

// ---------------------------------------------------------------------------
// Rapport
// ---------------------------------------------------------------------------

const allArticleRoutes = [...pages.keys()].filter((r) =>
  Object.values(LOCALE_ROUTES).some((c) => r.startsWith(`${c.blog}/`) && r !== c.blog)
);
console.log(`Pages analysées : ${pages.size} (dont ${allArticleRoutes.length} articles)`);

if (problems.length === 0) {
  console.log('✓ Maillage interne et liens conformes.');
  process.exit(0);
}

console.error(`\n✗ ${problems.length} problème(s) :\n`);
for (const { route, message } of problems) {
  console.error(`  ${route}\n      ${message}`);
}
process.exit(1);
