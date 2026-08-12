# Site Signally

Site marketing de Signally, construit avec [Astro](https://astro.build) à partir du prototype
Claude Design « Signally Site ».

Treize pages en français, un blog de 40 articles, un simulateur tarifaire et un formulaire de
contact qui envoie réellement vers `contacts@signally.io`.

---

## Démarrage

```bash
npm install
cp .env.example .env      # renseigner les identifiants SMTP
npm run dev               # http://localhost:3000
```

| Commande | Effet |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Sert le build (`node ./dist/server/entry.mjs`) |
| `npm run check` | Vérification TypeScript (`astro check`) |
| `npm run check:links` | Vérifie le maillage interne et les liens du build |
| `npm run check:responsive` | Planche contact du rendu mobile (nécessite le serveur démarré) |
| `npm run check:mail` | Teste la configuration d'envoi (`-- --send` pour un envoi réel) |

---

## Architecture

**Astro 5**, TypeScript, sans framework d'interface : toute l'interactivité tient dans des
`<script>` locaux (menus, onglets, accordéons, curseurs, filtres).

`output: 'static'` avec l'adaptateur `@astrojs/node` en mode `standalone`. Toutes les pages sont
prérendues, à deux exceptions près qui déclarent `export const prerender = false` :

- `src/pages/api/contact.ts` — l'API d'envoi ;
- `src/pages/contact.astro` — elle lit `?envoye` / `?erreur` pour le repli sans JavaScript.

```
src/
  components/   Header, Footer, Faq, PricingSimulator, AppTabs, ContactForm…
  content/blog/ 40 articles markdown
  data/         nav.ts, faq.ts, clusters.ts, compare.ts
  layouts/      Base.astro
  lib/          pricing.ts, mail.ts, contact-schema.ts, rate-limit.ts
  pages/        les 13 routes + /api/contact
  styles/       tokens.css, global.css
scripts/        check-links.mjs, check-responsive.mjs
```

### Routes

| URL | Contenu |
| --- | --- |
| `/` | Accueil |
| `/fonctionnalites` | Éditeur de signatures |
| `/campagnes` | Campagnes & bannières |
| `/integrations/microsoft-365-outlook` | Add-in Microsoft |
| `/integrations/google-workspace-gmail` | Add-on Google |
| `/securite-rgpd` | Sécurité & RGPD |
| `/tarifs` | Tarifs + simulateur |
| `/comparatifs` | Grille de comparaison |
| `/cas-usage` | DSI, marketing, RH |
| `/blog`, `/blog/[slug]` | Blog + 40 articles |
| `/contact` | Contact & démonstration |
| `/plan-seo` | Feuille de route éditoriale — `noindex`, non reliée |
| `/404` | Page introuvable |
| `POST /api/contact` | Envoi du formulaire |

---

## Formulaire de contact

`POST /api/contact` valide la demande (zod), applique deux garde-fous anti-spam et envoie le
message par SMTP à `MAIL_TO`, avec l'adresse du demandeur en `Reply-To`.

### Configuration

Deux façons de configurer, par ordre de priorité (voir `.env.example`).

**1. `MAILER_DSN`** — syntaxe Symfony Mailer, identique à celle de l'application Signally : une
seule valeur à maintenir entre les deux environnements.

```
MAILER_DSN=sendgrid://<clé_api>@default        # relais SMTP SendGrid
MAILER_DSN=smtp://user:pass@hote:587           # SMTP générique
MAILER_DSN=ethereal://                         # test, aucun envoi réel
```

Pour `sendgrid://`, l'hôte (`smtp.sendgrid.net`), le port (587) et l'utilisateur (`apikey`) sont
déduits automatiquement — seule la clé d'API est nécessaire. Les transports « API » de Symfony
(`sendgrid+api://`) ne sont **pas** pris en charge : ce projet n'envoie qu'en SMTP.

**2. Variables `SMTP_*`** — repli explicite, ignoré si `MAILER_DSN` est renseigné.

Dans les deux cas, `MAIL_FROM` doit être une identité d'expéditeur vérifiée chez le fournisseur
(*Verified Sender* ou domaine authentifié), sinon l'envoi est rejeté.

### Vérifier la configuration

```bash
npm run check:mail            # connexion + authentification, aucun envoi
npm run check:mail -- --send  # envoie en plus un message de test à MAIL_TO
```

Le script affiche la configuration lue (clé masquée), teste la session SMTP, et explicite les
erreurs courantes — clé refusée, expéditeur non vérifié.

Sans identifiants, `MAILER_DSN=ethereal://` crée un compte de test Nodemailer et journalise une
URL de prévisualisation ; aucun e-mail réel n'est délivré.

### Chargement des variables

`npm run preview` et `npm run start` utilisent `node --env-file-if-exists=.env` : le serveur Node
issu du build lit `process.env` et **ne charge pas `.env` de lui-même**. En production, fournissez
les variables par l'environnement réel (systemd, Docker, secrets du fournisseur) plutôt que par un
fichier déposé sur le serveur.

### Comportements attendus

| Cas | Réponse |
| --- | --- |
| Demande valide | `200 {"ok":true}`, e-mail envoyé |
| E-mail invalide | `400` + erreurs par champ, en français |
| Pot de miel rempli | `200 {"ok":true}` **sans envoi** (le robot n'apprend rien) |
| Soumission en moins de 3 s | `200 {"ok":true}` sans envoi |
| Plus de 5 demandes / 10 min / IP | `429` + en-tête `Retry-After` |
| Origine croisée en `form-urlencoded` | `403` (protection CSRF d'Astro) |

Le formulaire fonctionne **sans JavaScript** : il possède une `action` réelle et l'API répond
alors par une redirection 303 vers `/contact?envoye=1` ou `/contact?erreur=…`.

> ⚠️ **Reverse proxy et CSRF.** Astro compare l'en-tête `Origin` à l'origine calculée de la
> requête. Derrière nginx ou Traefik, transmettez impérativement les en-têtes suivants, faute de
> quoi les envois sans JavaScript seront rejetés en 403 :
>
> ```nginx
> proxy_set_header Host              $host;
> proxy_set_header X-Forwarded-Host  $host;
> proxy_set_header X-Forwarded-Proto $scheme;
> proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
> ```
>
> `X-Forwarded-For` sert également à la limitation de débit par IP.

> ⚠️ **Limitation de débit en mémoire.** Le compteur (`src/lib/rate-limit.ts`) est local au
> processus. Derrière plusieurs répliques, il faudra un magasin partagé (Redis).

---

## Déploiement

Build puis exécution du serveur Node :

```bash
npm ci
npm run build
NODE_ENV=production HOST=0.0.0.0 PORT=3000 node ./dist/server/entry.mjs
```

`dist/client/` contient les fichiers statiques, `dist/server/` le point d'entrée Node. Un reverse
proxy en frontal doit servir le TLS et transmettre les en-têtes ci-dessus.

Ajustez `SITE_URL` dans `astro.config.mjs` si le domaine diffère de `https://www.signally.io` :
il alimente les URL canoniques, l'Open Graph et le sitemap.

---

## À fournir par Signally

Ces éléments manquent volontairement : le prototype les signalait comme « à compléter » et rien
n'a été inventé à leur place.

| Élément | Emplacement |
| --- | --- |
| **Logo officiel** `signally-logo.png` (462 × 101) | `public/` — un mot-symbole texte s'affiche tant qu'il est absent |
| **Captures de l'application** `editor.png`, `teams.png`, `campaigns.png` | `public/screenshots/` — un cartouche les remplace |
| **Clé SendGrid en production** | `.env` / variables d'environnement du serveur |
| **Adresse postale, téléphone, SIREN, contact DPO** | `src/pages/contact.astro`, bloc `TODO` |
| **Hébergeur, datacenters, certifications, DPA** | `src/pages/securite-rgpd.astro`, bloc `TODO` |
| **Conditions d'engagement et de facturation** | `src/data/faq.ts`, entrée « Y a-t-il un engagement ? » |
| **Image Open Graph** `og-default.png` (1200 × 630) | `public/` |

Le logo et les captures se substituent automatiquement à leur repli dès que le fichier est déposé :
aucune modification de code n'est nécessaire.

---

## Contenu éditorial

Les 40 articles suivent le plan du prototype (7 grappes thématiques) et respectent ses règles de
maillage interne, vérifiées automatiquement :

```bash
npm run build && npm run check:links
```

Le script contrôle que chaque article pointe vers sa page pilier, comporte au moins deux liens
latéraux et un lien de conversion, que `/comparatifs` renvoie vers Tarifs et Sécurité, qu'aucun
lien interne n'est cassé et qu'aucun `href="#"` du prototype ne subsiste.

> ⚠️ **À relire avant publication.** Les 40 articles ont été rédigés automatiquement à partir du
> plan éditorial. Ils demandent une relecture éditoriale, en particulier sur les durées de
> déploiement, les chiffres tarifaires et les affirmations RGPD.
>
> ⚠️ **Volet juridique.** La grappe « Comparatifs & alternatives » et les six pages de comparaison
> de `src/data/compare.ts` nomment des concurrents réels (Letsignit, Exclaimer, Signitic,
> MySignature). En France, la publicité comparative est encadrée par l'article L122-1 du code de la
> consommation : les comparaisons doivent être objectives, vérifiables et non dénigrantes. Les
> textes ont été rédigés dans cet esprit et les pages nominatives laissées à l'état de
> « bientôt publié », mais l'ensemble doit être validé par votre conseil avant mise en ligne.

---

## SEO

- Titre, description, canonique et Open Graph par page.
- Données structurées : `Organization` et `SoftwareApplication` sur tout le site, `FAQPage` sur les
  sept pages porteuses de FAQ, `HowTo` sur les pages d'intégration, `Article` et `BreadcrumbList`
  sur les articles.
- `sitemap-index.xml` généré au build, `/plan-seo` exclue.
- `robots.txt` interdit `/plan-seo` et `/api/`.

Les polices (Manrope, JetBrains Mono) sont **auto-hébergées** via `@fontsource` plutôt que chargées
depuis Google Fonts : un site dont l'argument central est l'hébergement en France ne devrait pas
dépendre d'une requête tierce à chaque visite.

---

## Écarts assumés par rapport au prototype

| Point | Décision |
| --- | --- |
| Palette | Le prototype écrase les tokens verts du design system Celaneo en jaune Signally. Le prototype fait foi. |
| Responsive | Le prototype n'a aucune media query (conçu pour 1440 px). Ajout de points de rupture à 1024 / 768 / 560 px et d'un menu mobile, vérifiés à 390 px sur les huit pages principales (`npm run check:responsive`). |
| Accessibilité | Ajout du lien d'évitement, des états de focus, des attributs ARIA sur les menus et onglets, et du respect de `prefers-reduced-motion`. |
| Accordéons FAQ | `<details>`/`<summary>` natifs plutôt qu'un état JavaScript : accessibles et fonctionnels sans JS. |
| Slugs d'articles | Dérivés du mot-clé cible plutôt que du titre tronqué à 40 caractères. |
| `/plan-seo` | `noindex` et retirée du pied de page, sur décision de Signally. |
