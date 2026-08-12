#!/usr/bin/env bash
#
# Déploiement du site marketing Signally.
#
#   ./scripts/deploy.sh              récupère, construit, redémarre, vérifie
#   ./scripts/deploy.sh --no-pull    déploie le code déjà présent
#   ./scripts/deploy.sh --no-install saute npm ci (dépendances inchangées)
#
# Le build est fait AVANT toute interruption du service : si la compilation
# échoue, le site en production continue de tourner sur l'ancienne version.
# Après redémarrage, une vérification de santé décide de garder la nouvelle
# version ou de revenir automatiquement à la précédente.
#
# Portabilité : certains hébergements (Plesk et assimilés) exécutent le
# script dans un chroot minimal, sans curl, id, stat ni parfois cp. Ce
# script ne dépend donc que de bash, node, npm, pm2 et git — les
# opérations habituellement confiées aux coreutils passent par node.
#
set -euo pipefail

# PATH réduit au dossier binaire de Node sur certains hébergements : on
# rétablit les emplacements standards, en les ajoutant APRÈS l'existant
# pour ne pas masquer la version de node/pm2 déjà sélectionnée.
for _dir in /usr/local/sbin /usr/local/bin /usr/sbin /usr/bin /sbin /bin; do
  case ":$PATH:" in
    *":$_dir:"*) ;;
    *) [ -d "$_dir" ] && PATH="$PATH:$_dir" ;;
  esac
done
export PATH
unset _dir

APP_NAME="signally-site"
HEALTH_HOST="127.0.0.1"
HEALTH_PATH="/"
HEALTH_RETRIES=15
HEALTH_DELAY=2

DO_PULL=1
DO_INSTALL=1

usage() {
  printf '%s\n' \
    'Déploiement du site marketing Signally.' \
    '' \
    '  ./scripts/deploy.sh              récupère, construit, redémarre, vérifie' \
    '  ./scripts/deploy.sh --no-pull    déploie le code déjà présent' \
    '  ./scripts/deploy.sh --no-install saute npm ci (dépendances inchangées)' \
    '' \
    'Le build précède toute interruption : une compilation en échec laisse' \
    'le site en ligne sur la version précédente. Après redémarrage, une' \
    'vérification de santé déclenche au besoin un retour arrière.'
}

for arg in "$@"; do
  case "$arg" in
    --no-pull)    DO_PULL=0 ;;
    --no-install) DO_INSTALL=0 ;;
    -h|--help)    usage; exit 0 ;;
    *) printf 'Option inconnue : %s\n' "$arg" >&2; exit 2 ;;
  esac
done

# Racine du dépôt, sans dépendre de `dirname`.
_self="${BASH_SOURCE[0]}"
_dir="${_self%/*}"
[ "$_dir" = "$_self" ] && _dir='.'
cd "$_dir/.."
ROOT="$PWD"
unset _self _dir

# ---------------------------------------------------------------------------
# Affichage
# ---------------------------------------------------------------------------
if [ -t 1 ]; then
  B=$'\033[1m'; G=$'\033[32m'; R=$'\033[31m'; Y=$'\033[33m'; N=$'\033[0m'
else
  B=''; G=''; R=''; Y=''; N=''
fi

step() { printf '\n%s▸ %s%s\n' "$B" "$1" "$N"; }
ok()   { printf '  %s✓%s %s\n' "$G" "$N" "$1"; }
warn() { printf '  %s!%s %s\n' "$Y" "$N" "$1"; }
die()  { printf '\n  %s✗ %s%s\n\n' "$R" "$1" "$N" >&2; exit 1; }

# ---------------------------------------------------------------------------
# Portabilité : équivalents node des coreutils absents des chroots minimaux
# ---------------------------------------------------------------------------

# Code de statut HTTP d'une URL, ou 000 si injoignable. Remplace curl.
http_status() {
  node -e '
    const http = require("http");
    const req = http.get(process.argv[1], { timeout: 5000 }, (res) => {
      process.stdout.write(String(res.statusCode));
      res.resume();
    });
    req.on("timeout", () => { req.destroy(); });
    req.on("error", () => { process.stdout.write("000"); });
  ' "$1" 2>/dev/null || printf '000'
}

# Pause bloquante. `sleep` manque parfois ; Atomics.wait prend le relais.
pause() {
  if command -v sleep >/dev/null 2>&1; then
    sleep "$1"
  else
    node -e 'Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, Number(process.argv[1]) * 1000)' "$1"
  fi
}

fs_rm()   { node -e 'require("fs").rmSync(process.argv[1], {recursive:true, force:true})' "$1"; }
fs_copy() { node -e 'require("fs").cpSync(process.argv[1], process.argv[2], {recursive:true})' "$1" "$2"; }
fs_move() { node -e 'require("fs").renameSync(process.argv[1], process.argv[2])' "$1" "$2"; }

# Présence d'une clé dans un fichier d'environnement. Remplace grep.
env_has_key() {
  node -e '
    const [file, key] = process.argv.slice(1);
    const re = new RegExp("^\\s*" + key + "\\s*=", "m");
    process.exit(re.test(require("fs").readFileSync(file, "utf8")) ? 0 : 1);
  ' "$1" "$2" 2>/dev/null
}

# ---------------------------------------------------------------------------
# Contrôles préalables
# ---------------------------------------------------------------------------
step 'Contrôles préalables'

# $EUID est une variable de bash : disponible même sans `id`.
[ "${EUID:-1}" -eq 0 ] && warn 'exécuté en root — préférez le compte de service'

MISSING=''
for tool in node npm pm2 git; do
  command -v "$tool" >/dev/null 2>&1 || MISSING="$MISSING $tool"
done
if [ -n "$MISSING" ]; then
  printf '\n  %s✗ outils introuvables :%s%s\n' "$R" "$MISSING" "$N" >&2
  printf '  PATH = %s\n\n' "$PATH" >&2
  exit 1
fi

NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
[ "$NODE_MAJOR" -ge 18 ] || die "Node 18+ requis, trouvé $(node -v)"
PM2_VER="$(pm2 -v 2>/dev/null || true)"
PM2_VER="${PM2_VER##*$'\n'}"
ok "node $(node -v), pm2 ${PM2_VER:-?}"

[ -f "$ROOT/.env" ] || die '.env absent — MAILER_DSN, MAIL_FROM et MAIL_TO sont requis'
for key in MAILER_DSN MAIL_FROM MAIL_TO; do
  env_has_key "$ROOT/.env" "$key" || die ".env : $key manquant"
done

# Un .env lisible par tous divulgue la clé d'API. Contrôle indicatif.
PERM="$(node -e '
  try { process.stdout.write((require("fs").statSync(process.argv[1]).mode & 0o777).toString(8)); }
  catch { process.stdout.write(""); }
' "$ROOT/.env" 2>/dev/null || true)"
case "$PERM" in
  600|400) ok ".env présent (mode $PERM)" ;;
  '')      ok '.env présent' ;;
  *)       warn ".env en mode $PERM — resserrez avec : chmod 600 .env" ;;
esac

# Port lu dans la configuration PM2, pour interroger le bon service.
PORT="${PORT:-$(node -e '
  try {
    const a = require(process.argv[1]).apps[0];
    process.stdout.write(String((a.env_production ?? a.env).PORT));
  } catch { process.stdout.write("4322"); }
' "$ROOT/ecosystem.config.cjs")}"
ok "port cible : $PORT"

# ---------------------------------------------------------------------------
# Récupération du code
# ---------------------------------------------------------------------------
if [ "$DO_PULL" -eq 1 ]; then
  step 'Récupération du code'
  git diff --quiet && git diff --cached --quiet \
    || die 'arbre de travail modifié — committez, remisez, ou utilisez --no-pull'
  BEFORE="$(git rev-parse --short HEAD)"
  git pull --ff-only
  AFTER="$(git rev-parse --short HEAD)"
  if [ "$BEFORE" = "$AFTER" ]; then ok "déjà à jour ($AFTER)"; else ok "$BEFORE → $AFTER"; fi
else
  step 'Récupération ignorée (--no-pull)'
  ok "HEAD $(git rev-parse --short HEAD)"
fi

# ---------------------------------------------------------------------------
# Dépendances
# ---------------------------------------------------------------------------
if [ "$DO_INSTALL" -eq 1 ]; then
  step 'Dépendances'
  npm ci --no-audit --no-fund
  ok 'npm ci terminé'
else
  step 'Dépendances ignorées (--no-install)'
fi

# ---------------------------------------------------------------------------
# Build — avant toute interruption de service
# ---------------------------------------------------------------------------
step 'Build'

fs_rm "$ROOT/.dist-prev"
if [ -d "$ROOT/dist" ]; then
  fs_copy "$ROOT/dist" "$ROOT/.dist-prev"
  ok 'version précédente sauvegardée'
fi

if ! NODE_ENV=production npm run build; then
  # dist/ peut être à moitié écrit : on restaure avant de sortir.
  if [ -d "$ROOT/.dist-prev" ]; then
    fs_rm "$ROOT/dist"
    fs_move "$ROOT/.dist-prev" "$ROOT/dist"
    warn 'build échoué — version précédente restaurée, service intact'
  fi
  die 'build échoué, aucun redémarrage effectué'
fi

[ -f "$ROOT/dist/server/entry.mjs" ] || die 'dist/server/entry.mjs absent après build'
PAGES="$(node -e '
  const {readdirSync} = require("fs");
  const walk = d => readdirSync(d, {withFileTypes:true}).reduce((n,e) =>
    n + (e.isDirectory() ? walk(d + "/" + e.name) : e.name.endsWith(".html") ? 1 : 0), 0);
  process.stdout.write(String(walk(process.argv[1])));
' "$ROOT/dist/client" 2>/dev/null || printf '?')"
ok "$PAGES pages statiques + serveur Node"

# ---------------------------------------------------------------------------
# Redémarrage
# ---------------------------------------------------------------------------
step 'Redémarrage PM2'

if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  pm2 restart "$APP_NAME" --update-env >/dev/null
  ok "$APP_NAME redémarré"
else
  pm2 start ecosystem.config.cjs --env production >/dev/null
  ok "$APP_NAME démarré"
fi

# ---------------------------------------------------------------------------
# Vérification de santé
# ---------------------------------------------------------------------------
step 'Vérification de santé'

pm2_status() {
  pm2 jlist 2>/dev/null | node -e '
    let s = "";
    process.stdin.on("data", d => s += d).on("end", () => {
      try {
        const a = JSON.parse(s).find(x => x.name === process.argv[1]);
        process.stdout.write(a ? a.pm2_env.status : "absent");
      } catch { process.stdout.write("inconnu"); }
    });
  ' "$APP_NAME" 2>/dev/null || printf 'inconnu'
}

HEALTHY=0
CODE=''
STATUS=''
for (( i = 1; i <= HEALTH_RETRIES; i++ )); do
  CODE="$(http_status "http://${HEALTH_HOST}:${PORT}${HEALTH_PATH}")"
  STATUS="$(pm2_status)"
  if [ "$CODE" = "200" ] && [ "$STATUS" = "online" ]; then
    HEALTHY=1
    ok "HTTP 200 sur :$PORT, process online (tentative $i)"
    break
  fi
  pause "$HEALTH_DELAY"
done

if [ "$HEALTHY" -ne 1 ]; then
  printf '\n  %s✗ échec de la vérification (HTTP %s, process %s)%s\n' \
    "$R" "${CODE:-—}" "${STATUS:-—}" "$N" >&2
  if [ -d "$ROOT/.dist-prev" ]; then
    step 'Retour à la version précédente'
    fs_rm "$ROOT/dist"
    fs_move "$ROOT/.dist-prev" "$ROOT/dist"
    pm2 restart "$APP_NAME" --update-env >/dev/null || true
    pause 3
    BACK="$(http_status "http://${HEALTH_HOST}:${PORT}${HEALTH_PATH}")"
    if [ "$BACK" = "200" ]; then
      ok 'version précédente restaurée et fonctionnelle'
    else
      warn "restauration effectuée mais HTTP $BACK — voir : pm2 logs $APP_NAME"
    fi
  else
    warn 'aucune version précédente à restaurer'
  fi
  printf '\n  Diagnostic : %spm2 logs %s --lines 50%s\n\n' "$B" "$APP_NAME" "$N" >&2
  exit 1
fi

# Contrôles secondaires : informatifs, ils ne font pas échouer le
# déploiement puisque le service répond déjà.
NOT_FOUND="$(http_status "http://${HEALTH_HOST}:${PORT}/url-inexistante-$$")"
if [ "$NOT_FOUND" = "404" ]; then ok 'page introuvable : 404 correct'
else warn "URL inconnue → HTTP $NOT_FOUND (404 attendu)"; fi

CONTACT="$(http_status "http://${HEALTH_HOST}:${PORT}/contact")"
if [ "$CONTACT" = "200" ]; then ok 'page contact servie'
else warn "/contact → HTTP $CONTACT"; fi

# ---------------------------------------------------------------------------
step 'Terminé'
fs_rm "$ROOT/.dist-prev"
pm2 save >/dev/null 2>&1 && ok 'liste PM2 enregistrée'
printf '  %s%s en ligne sur le port %s — révision %s%s\n\n' \
  "$G" "$APP_NAME" "$PORT" "$(git rev-parse --short HEAD)" "$N"
