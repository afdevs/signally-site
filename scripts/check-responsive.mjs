#!/usr/bin/env node
/**
 * Planche de contrôle visuelle du rendu responsive.
 *
 * Le prototype d'origine n'avait aucune media query (conçu pour un seul
 * viewport de 1440 px). Ce script produit une planche contact permettant
 * de vérifier d'un coup d'œil le rendu aux largeurs réelles.
 *
 * Chaque page est chargée dans une iframe de largeur fixe : contrairement
 * à --window-size, une iframe obtient bien son propre viewport de mise en
 * page, ce qui donne un rendu mobile fidèle même en headless.
 *
 * Prérequis : le site doit tourner (npm run build && npm run preview).
 *
 * Usage :
 *   node scripts/check-responsive.mjs                 # 390 px, pages clés
 *   node scripts/check-responsive.mjs 768             # autre largeur
 *   node scripts/check-responsive.mjs 390 http://127.0.0.1:4321
 */

import { spawn } from 'node:child_process';
import { mkdtemp, writeFile, mkdir, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const WIDTH = Number(process.argv[2]) || 390;
const BASE = process.argv[3] ?? `http://127.0.0.1:${process.env.PORT ?? 4321}`;
const CHROME =
  process.env.CHROME_PATH ??
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const HEIGHT = 1180;
const OUT_DIR = resolve('screenshots');

const PAGES = [
  '/',
  '/fonctionnalites',
  '/tarifs',
  '/integrations/microsoft-365-outlook',
  '/blog',
  '/blog/signature-mail-outlook-entreprise',
  '/contact',
  '/comparatifs',
  // Une page par langue au moins : les titres traduits sont plus longs
  // et c'est en mobile que le débordement se voit.
  '/en/',
  '/en/pricing',
  '/es/',
  '/es/precios',
];

/** Rendu par lots : au-delà de 4 colonnes la planche devient illisible. */
const PER_SHEET = 4;

await mkdir(OUT_DIR, { recursive: true });
const profile = await mkdtemp(join(tmpdir(), 'sig-rwd-'));

async function shoot(paths, index) {
  const harnessFile = join(profile, `sheet-${index}.html`);
  const outFile = join(OUT_DIR, `responsive-${WIDTH}px-${index + 1}.png`);

  const frames = paths
    .map(
      (p) =>
        `<figure style="margin:0"><figcaption style="font:12px/1.6 ui-monospace,monospace;` +
        `padding:6px 8px;background:#1A1A1A;color:#F2C531">${p}</figcaption>` +
        `<iframe src="${BASE}${p}" style="width:${WIDTH}px;height:${HEIGHT}px;border:0;` +
        `background:#fff;display:block"></iframe></figure>`
    )
    .join('');

  await writeFile(
    harnessFile,
    `<!doctype html><meta charset="utf-8"><body style="margin:0;background:#5c5c58;` +
      `display:flex;gap:12px;padding:12px">${frames}</body>`,
    'utf8'
  );

  const sheetWidth = paths.length * (WIDTH + 12) + 12;

  await new Promise((done) => {
    const child = spawn(
      CHROME,
      [
        '--headless=new',
        '--disable-gpu',
        '--no-sandbox',
        '--hide-scrollbars',
        '--allow-file-access-from-files',
        `--user-data-dir=${profile}-${index}`,
        `--window-size=${sheetWidth},${HEIGHT + 40}`,
        // Sans budget de temps virtuel, la capture part dès que la page
        // enveloppe est prête : les iframes sont encore vides.
        '--virtual-time-budget=15000',
        `--screenshot=${outFile}`,
        `file://${harnessFile}`,
      ],
      { stdio: 'ignore' }
    );

    // Chrome headless ne rend pas toujours la main sur cette plateforme :
    // on attend l'apparition du fichier, puis on termine le processus.
    let waited = 0;
    const poll = setInterval(async () => {
      waited += 500;
      const exists = await stat(outFile).then((s) => s.size > 0).catch(() => false);
      if (exists || waited > 60000) {
        clearInterval(poll);
        setTimeout(() => {
          child.kill('SIGKILL');
          done();
        }, 2500);
      }
    }, 500);

    child.on('close', () => {
      clearInterval(poll);
      done();
    });
  });

  return outFile;
}

const sheets = [];
for (let i = 0; i * PER_SHEET < PAGES.length; i++) {
  const batch = PAGES.slice(i * PER_SHEET, (i + 1) * PER_SHEET);
  process.stdout.write(`Rendu ${batch.join(', ')} … `);
  const file = await shoot(batch, i);
  const ok = await stat(file).then((s) => s.size > 0).catch(() => false);
  console.log(ok ? 'ok' : 'ÉCHEC');
  if (ok) sheets.push(file);
}

await rm(profile, { recursive: true, force: true }).catch(() => {});

console.log(`\n${sheets.length} planche(s) écrite(s) à ${WIDTH} px :`);
for (const s of sheets) console.log(`  ${s}`);
console.log(
  '\nÀ vérifier sur chaque planche : le menu burger est présent, aucun texte ni ' +
    'bloc ne dépasse le bord droit, les grilles sont bien passées en une colonne.'
);
