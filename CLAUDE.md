# CLAUDE.md

Ce fichier guide Claude Code (claude.ai/code) dans ce dépôt.

## Ce que c'est

Le site marketing de Signally. **Astro 5**, adaptateur `@astrojs/node` en mode
`standalone`, `output: 'static'` : tout est prérendu sauf les trois routes de
`src/pages/api/` et les trois pages de contact, qui déclarent
`export const prerender = false`. TypeScript strict (`astro/tsconfigs/strict`
plus `strictNullChecks`). Le backend Symfony (`api`) et l'application React
(`v2-app`) sont des dépôts voisins.

## Commandes

```bash
npm run check             # astro check — la vérification de type
npm run test:unit         # node --test sur src/**/*.test.ts
npm run build             # build de production
npm run check:links       # maillage interne du site construit
npm run check:responsive  # planches contact (écrit /screenshots, ignoré)
npm run check:mail        # configuration d'envoi
npm run build:kb-index    # écrit le corpus site-kb dans le dépôt API
npm run deploy            # scripts/deploy.sh — production
```

Il n'y a **aucune CI** : `.github/` n'existe pas, ces contrôles sont manuels.

## Conventions observées

- **Aucun framework d'UI.** Toute l'interactivité est un `<script>` vanille dans
  un `.astro`, relié au markup par des `data-*` : voir `ContactForm.astro`.
- **Imports relatifs partout.** Les alias `@lib/*`, `@components/*`, `@data/*`,
  `@layouts/*`, `@styles/*` de `tsconfig.json` ne servent nulle part.
- **Commentaires : le pourquoi, jamais le quoi** — chaque module de `src/lib/`
  s'ouvre sur un bloc qui justifie une décision, voir `rate-limit.ts`.
- **Trilingue fr/en/es**, français à la racine, `en`/`es` préfixés. La liste des
  langues vit deux fois — `src/i18n/config.ts` et le bloc `i18n`
  d'`astro.config.mjs` — et doit rester alignée. Chemins : `src/i18n/routes.ts`.
- **Contrat de type des dictionnaires** : le français exporte
  `export type Common = typeof common`, l'anglais et l'espagnol ferment sur
  `satisfies Common`. Une clé ajoutée en français fait échouer `npm run check`
  tant qu'elle n'est pas traduite dans les deux autres.
- **Secrets** dans `.env` (ignoré), documentés dans `.env.example` ; jamais dans
  `ecosystem.config.cjs`, qui est versionné.
- **PM2 en `exec_mode: 'fork'`, `instances: 1`** : les compteurs de
  `src/lib/rate-limit.ts` vivent en mémoire du processus, et le mode cluster
  multiplierait la limite réelle par le nombre d'instances.
- Aucun script d'analytique ni de traceur tiers dans `src/` ou `public/`.

## Assistant de support

Deux **canaux**, un seul service côté API : `app`, le panneau de l'application,
visiteur authentifié ; `site`, le widget public de ce dépôt
(`src/components/SupportChat.astro`, monté par `src/layouts/Base.astro` quand
`PUBLIC_SITE_CHAT_ENABLED === 'true'`). Chaque canal a son corpus, son prompt
système et son registre d'outils. Le navigateur ne parle qu'à sa propre origine :
`src/pages/api/chat.ts` et `chat-feedback.ts` sont les seules à appeler l'API, en
serveur-à-serveur avec l'en-tête `X-Signally-Site-Key`.

**Invariant : aucune valeur par requête n'entre dans un prompt système.** Le
cache d'Anthropic est une correspondance d'octets sur le préfixe outils →
système → messages ; une valeur variable — langue, visiteur, date, chemin — le
casse silencieusement. D'où le `pageKey` canonique envoyé à la place du chemin
localisé, et le déterminisme exigé de `scripts/build-kb-index.mjs`.

## Voir aussi

`README.md` couvre le déploiement, les routes et le contenu éditorial.
`CONTEXT.md` porte le glossaire du chat, mais **n'est pas versionné**.
