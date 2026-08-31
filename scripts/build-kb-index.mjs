#!/usr/bin/env node
/**
 * Génère l'index blog + FAQ du corpus `site-kb` que l'assistant public lit.
 *
 * Le corpus vit dans le dépôt API pour que sa construction reste
 * autonome ; ce script est la seule chose qui l'écrit. Il lit le
 * frontmatter des articles français et les dictionnaires `src/i18n/fr`,
 * puis émet des fichiers markdown compacts et déterministes.
 *
 * Déterminisme : c'est la contrainte dure. Le corpus forme le préfixe
 * de prompt mis en cache côté Anthropic ; un octet qui bouge invalide
 * le cache à chaque déploiement. Donc aucun horodatage, aucun tri
 * dépendant de la locale (`localeCompare` est proscrit), aucun ordre
 * issu de l'itération d'un `Map`. Les ordres sont déclarés ici.
 *
 * Budget : `API/tools/check-site-kb.php` plafonne chaque fichier à
 * 4096 octets et le corpus entier à 35840. Les 19 articles rédigés à
 * la main en consomment déjà ~20 Ko : voir « Compromis » plus bas pour
 * ce que cela impose.
 *
 * Usage : npm run build:kb-index
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const SITE = resolve(HERE, '..');
const KB_DIR = resolve(SITE, '../api/src/Resources/site-kb');
const BLOG_DIR = join(SITE, 'src/content/blog/fr');
const I18N_DIR = join(SITE, 'src/i18n/fr');

// ---------------------------------------------------------------------------
// Boutons de réglage
// ---------------------------------------------------------------------------

/**
 * Mots conservés du résumé de chaque article. `0` = titres et résumés
 * omis, seul le chemin est émis.
 *
 * Compromis, à relire avant de le remonter : le plafond par fichier est
 * de 4096 octets et il ne reste que ~15 Ko de budget après les 19
 * articles rédigés. Titres (~70 o/article) + résumés (~260 o) + les 53
 * paires de FAQ ne tiennent pas ensemble. Les réponses de la FAQ sont
 * de vraies réponses, l'index blog n'est qu'un aiguillage : le budget
 * va donc aux réponses. Les slugs sont les titres slugifiés, ils
 * portent déjà le sujet — voir `.agent/PROGRESS.md`, tâche c03.
 */
const WORDS_PER_ARTICLE = 0;

/**
 * Seuil de mots par réponse de FAQ. La coupe tombe toujours sur une fin
 * de phrase : on empile des phrases entières tant que le seuil n'est pas
 * atteint, quitte à le dépasser sur la dernière. Jamais de coupe au mot.
 *
 * Deux écueils écartés par ce réglage, dans cet ordre :
 * couper au mot mutilait les faits — le barème dégressif s'arrêtait au
 * milieu, ce qui est pire que pas de tarif du tout puisque le modèle est
 * alors tenté de le compléter ; et refuser la phrase qui dépasse
 * réduisait « Toutes les fonctionnalités sont-elles incluses ? » à
 * « Oui. », en jetant la seule phrase qui répondait.
 */
const WORDS_PER_FAQ = 14;

/** Marqueur de troncature, utilisé seulement si un résumé est coupé au mot. */
const ELLIPSIS = '…';

// ---------------------------------------------------------------------------
// Ordres déclarés — la sortie en dépend, ne pas réordonner à la légère
// ---------------------------------------------------------------------------

/**
 * Grappes éditoriales, dans l'ordre d'émission. Une grappe rencontrée
 * dans un article mais absente d'ici arrête le script : c'est un
 * nouveau thème qui mérite une décision, pas un tri par défaut.
 */
const CLUSTER_ORDER = [
  'Créer sa signature',
  'Microsoft 365 & Outlook',
  'Google Workspace & Gmail',
  'Campagnes & bannières',
  'Gestion & gouvernance',
  'RGPD & sécurité',
];

/**
 * Grappes exclues du corpus. Les deux articles comparatifs nomment des
 * concurrents (Letsignit, Exclaimer, Signitic, MySignature), sont
 * signalés dans le README comme rédigés par machine et en attente de
 * revue juridique (art. L122-1). Ils ne doivent pas atteindre un canal
 * qui parle à des prospects. Filtre réversible une fois le conseil rendu.
 */
const EXCLUDED_CLUSTERS = new Set(['Comparatifs & alternatives']);

/**
 * Un fichier par route, jamais deux routes dans un fichier.
 *
 * Deux raisons, et la seconde a mordu. D'abord le plafond de 4096 octets
 * par fichier : c'est lui, pas le budget global, qui contraint ce
 * corpus. Ensuite `KnowledgeBase::getRoutes()`, qui construit la liste
 * blanche de liens du prompt en indexant par route — le dernier titre
 * rencontré gagne. Comme ces fichiers portent des préfixes 9xx, ils
 * trient après le corpus rédigé et gagnent donc toujours. Un fichier
 * couvrant deux routes produisait le libellé
 * « /integrations/microsoft-365-outlook — … Microsoft 365 and Google
 * Workspace », c'est-à-dire une étiquette fausse pour la route.
 *
 * Corollaire : `title` est lu par le modèle comme le libellé de la
 * route. Il décrit donc la page, pas le fichier.
 *
 * `at` désigne le chemin de l'objet portant `faq.items` dans le module ;
 * `[]` = la racine. Déclaré plutôt que découvert : une FAQ déplacée doit
 * faire échouer le script, pas disparaître silencieusement du corpus.
 */
const FAQ_FILES = [
  {
    name: '910-faq-home.md',
    title: 'What the product does — common questions',
    module: 'home.ts',
    at: [],
    route: '/',
  },
  {
    name: '920-faq-features.md',
    title: 'Features — common questions',
    module: 'features.ts',
    at: [],
    route: '/fonctionnalites',
  },
  {
    name: '930-faq-pricing.md',
    title: 'Pricing — common questions',
    module: 'pricing.ts',
    at: [],
    route: '/tarifs',
  },
  {
    name: '940-faq-campaigns.md',
    title: 'Banner campaigns — common questions',
    module: 'campaigns.ts',
    at: [],
    route: '/campagnes',
  },
  {
    name: '950-faq-microsoft.md',
    title: 'Microsoft 365 and Outlook — common questions',
    module: 'integrations.ts',
    at: ['microsoft'],
    route: '/integrations/microsoft-365-outlook',
  },
  {
    name: '955-faq-google.md',
    title: 'Google Workspace and Gmail — common questions',
    module: 'integrations.ts',
    at: ['google'],
    route: '/integrations/google-workspace-gmail',
  },
  {
    name: '960-faq-security.md',
    title: 'Security and GDPR — common questions',
    module: 'security.ts',
    at: [],
    route: '/securite-rgpd',
  },
];


// ---------------------------------------------------------------------------
// Lecture du frontmatter des articles
// ---------------------------------------------------------------------------

/**
 * Extrait les champs scalaires dont on a besoin. Volontairement pas un
 * parseur YAML : `js-yaml` et `yaml` ne sont présents qu'en dépendances
 * transitives d'Astro, et le jeu de dépendances est gelé. Les formes
 * lues ici sont régulières — `clé: "valeur"` sur une ligne.
 */
function readScalar(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
  if (!match) return null;
  return match[1].trim().replace(/^["'](.*)["']$/, '$1');
}

/** Bullets d'une liste YAML `clé:` suivie de lignes `  - "…"`. */
function readList(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:[ \\t]*\\n((?:[ \\t]+-[ \\t].*\\n?)+)`, 'm'));
  if (!match) return [];
  return match[1]
    .split('\n')
    .map((line) => line.replace(/^[ \t]+-[ \t]*/, '').trim())
    .filter((line) => line !== '')
    .map((line) => line.replace(/^["'](.*)["']$/, '$1'));
}

async function readArticles() {
  const entries = await readdir(BLOG_DIR);
  const files = entries.filter((name) => name.endsWith('.md') || name.endsWith('.mdx')).sort();

  const articles = [];
  for (const file of files) {
    const raw = await readFile(join(BLOG_DIR, file), 'utf8');
    const block = raw.match(/^---\n([\s\S]*?)\n---/);
    if (!block) fail(`${file} : pas de bloc frontmatter`);

    const frontmatter = block[1];
    const slug = readScalar(frontmatter, 'slug');
    const title = readScalar(frontmatter, 'title');
    const cluster = readScalar(frontmatter, 'cluster');

    if (!slug) fail(`${file} : frontmatter sans slug`);
    if (!title) fail(`${file} : frontmatter sans title`);
    if (!cluster) fail(`${file} : frontmatter sans cluster`);

    if (EXCLUDED_CLUSTERS.has(cluster)) continue;
    if (!CLUSTER_ORDER.includes(cluster)) {
      fail(`${file} : grappe « ${cluster} » inconnue. Ajoutez-la à CLUSTER_ORDER ou à EXCLUDED_CLUSTERS.`);
    }

    articles.push({ slug, title, cluster, summary: readList(frontmatter, 'summary') });
  }

  // Tri par slug en comparaison d'octets. `localeCompare` dépend de la
  // locale du système et casserait le déterminisme.
  articles.sort((a, b) => (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));
  return articles;
}

// ---------------------------------------------------------------------------
// Lecture des FAQ éditoriales
// ---------------------------------------------------------------------------

/**
 * Résout la liste `faq.items` désignée par `at` dans un module i18n.
 * Chaque module n'a qu'un export nommé ; on le prend sans le nommer pour
 * ne pas dupliquer ici la convention de nommage de `src/i18n`.
 */
async function readFaqItems(moduleName, at) {
  const module = await import(join(I18N_DIR, moduleName));
  const names = Object.keys(module);
  if (names.length !== 1) {
    fail(`${moduleName} : ${names.length} exports (${names.join(', ')}), un seul attendu`);
  }

  let node = module[names[0]];
  for (const key of at) {
    node = node?.[key];
    if (node === undefined) fail(`${moduleName} : chemin ${at.join('.')} introuvable`);
  }

  const items = node?.faq?.items;
  if (!Array.isArray(items) || items.length === 0) {
    fail(`${moduleName} : aucune paire dans ${[...at, 'faq', 'items'].join('.')}`);
  }

  return items.map((item, index) => {
    if (typeof item?.q !== 'string' || typeof item?.a !== 'string') {
      fail(`${moduleName} : paire ${index} sans q/a exploitables`);
    }
    return { q: item.q, a: item.a };
  });
}

// ---------------------------------------------------------------------------
// Mise en forme
// ---------------------------------------------------------------------------

/** Aplatit les blancs : les littéraux gabarits multi-lignes deviennent une ligne. */
function flatten(text) {
  return text.replace(/\s+/g, ' ').trim();
}

/** Tronque à `words` mots, sans couper au milieu d'un mot. */
function trimWords(text, words) {
  const parts = flatten(text).split(' ');
  if (words <= 0) return '';
  if (parts.length <= words) return parts.join(' ');
  return parts.slice(0, words).join(' ').replace(/[,;:]$/, '') + ELLIPSIS;
}

/**
 * Coupe sur une fin de phrase. La première phrase est toujours conservée
 * en entier ; on continue d'empiler tant que le seuil n'est pas atteint.
 * Aucun marqueur ajouté : ce qui reste est exact, seulement plus court.
 */
function trimSentences(text, maxWords) {
  const parts = flatten(text).split(/(?<=[.!?])\s+/).filter((part) => part !== '');
  if (parts.length === 0) return '';

  const kept = [parts[0]];
  let words = parts[0].split(' ').length;
  for (const sentence of parts.slice(1)) {
    if (words >= maxWords) break;
    kept.push(sentence);
    words += sentence.split(' ').length;
  }
  return kept.join(' ');
}

function header(title, route) {
  return [
    '---',
    `title: ${title}`,
    'audience: prospect',
    `route: ${route}`,
    '---',
    '<!-- Generated by SITE/scripts/build-kb-index.mjs. Hand edits are lost on the next run. -->',
    '',
  ].join('\n');
}

function renderBlogIndex(articles) {
  const lines = [
    header('Blog articles available on the site', '/blog'),
    'The site publishes the articles below. Bodies are not included here on purpose:',
    'link the visitor to the path rather than paraphrasing an article you cannot read.',
    'Paths are the canonical French ones; the site localises them per request.',
    '',
  ];

  for (const cluster of CLUSTER_ORDER) {
    const group = articles.filter((article) => article.cluster === cluster);
    if (group.length === 0) continue;
    lines.push(`## ${cluster}`);
    for (const article of group) {
      const summary = WORDS_PER_ARTICLE > 0 ? trimWords(article.summary.join(' '), WORDS_PER_ARTICLE) : '';
      lines.push(summary === '' ? `- /blog/${article.slug}` : `- /blog/${article.slug} — ${summary}`);
    }
    lines.push('');
  }

  return lines.join('\n').replace(/\n+$/, '\n');
}

function renderFaqFile(spec, items) {
  const lines = [header(spec.title, spec.route)];
  lines.push('Answers curated for the public site. Reuse the substance, not the wording.', '');

  for (const item of items) {
    lines.push(`- ${flatten(item.q)}`);
    lines.push(`  ${trimSentences(item.a, WORDS_PER_FAQ)}`);
  }

  return lines.join('\n').replace(/\n+$/, '\n') ;
}

// ---------------------------------------------------------------------------
// Exécution
// ---------------------------------------------------------------------------

function fail(message) {
  console.error(`✗ ${message}`);
  process.exit(1);
}

const articles = await readArticles();

const written = [];

async function emit(name, contents) {
  const bytes = Buffer.byteLength(contents, 'utf8');
  await writeFile(join(KB_DIR, name), contents, 'utf8');
  written.push({ name, bytes });
}

await emit('900-blog-index.md', renderBlogIndex(articles));

let pairs = 0;
const routes = new Set();
for (const spec of FAQ_FILES) {
  if (routes.has(spec.route)) fail(`route ${spec.route} déclarée deux fois : le libellé de liste blanche serait ambigu`);
  routes.add(spec.route);

  const items = await readFaqItems(spec.module, spec.at);
  pairs += items.length;
  await emit(spec.name, renderFaqFile(spec, items));
}

const total = written.reduce((sum, file) => sum + file.bytes, 0);
for (const file of written) {
  console.log(`  ${file.name}  ${file.bytes} o`);
}
console.log(`\n${articles.length} articles, ${pairs} paires de FAQ, ${total} o générés dans ${KB_DIR}`);
console.log('Vérifiez le budget : php ../api/tools/check-site-kb.php');
