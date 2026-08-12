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
set -euo pipefail

# Certains hébergements lancent `npm run` avec un PATH réduit au dossier
# binaire de Node : les outils de base (stat, id, find…) y sont absents.
# On rétablit les emplacements standards, en les ajoutant APRÈS le PATH
# existant pour ne pas masquer la version de node/pm2 déjà choisie.
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

for arg in "$@"; do
  case "$arg" in
    --no-pull)    DO_PULL=0 ;;
    --no-install) DO_INSTALL=0 ;;
    -h|--help)
      cat <<'USAGE'
Déploiement du site marketing Signally.

  ./scripts/deploy.sh              récupère, construit, redémarre, vérifie
  ./scripts/deploy.sh --no-pull    déploie le code déjà présent
  ./scripts/deploy.sh --no-install saute npm ci (dépendances inchangées)

Le build est fait AVANT toute interruption du service : si la compilation
échoue, le site en production continue de tourner sur l'ancienne version.
Après redémarrage, une vérification de santé décide de garder la nouvelle
version ou de revenir automatiquement à la précédente.
USAGE
      exit 0 ;;
    *) echo "Option inconnue : $arg" >&2; exit 2 ;;
  esac
done

# Toujours travailler depuis la racine du dépôt, quel que soit le cwd
# de l'appelant (cron, CI, session ssh).
cd "$(dirname "$0")/.."
ROOT="$(pwd)"

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
# Contrôles préalables
# ---------------------------------------------------------------------------
step 'Contrôles préalables'

# $EUID est une variable de bash : contrairement à `id -u`, elle reste
# disponible même avec un PATH amputé.
[ "${EUID:-1}" -eq 0 ] && warn 'exécuté en root — préférez le compte de service'

MISSING=''
for tool in node npm pm2 git curl; do
  command -v "$tool" >/dev/null 2>&1 || MISSING="$MISSING $tool"
done
if [ -n "$MISSING" ]; then
  printf '\n  %s✗ outils introuvables :%s%s\n' "$R" "$MISSING" "$N" >&2
  printf '  PATH = %s\n\n' "$PATH" >&2
  exit 1
fi

NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
[ "$NODE_MAJOR" -ge 18 ] || die "Node 18+ requis, trouvé $(node -v)"
# pm2 -v peut précéder le numéro de lignes de diagnostic : on garde la
# dernière, sans dépendre de `tail`.
PM2_VER="$(pm2 -v 2>/dev/null || true)"
PM2_VER="${PM2_VER##*$'\n'}"
ok "node $(node -v), pm2 ${PM2_VER:-?}"

[ -f "$ROOT/.env" ] || die '.env absent — MAILER_DSN, MAIL_FROM et MAIL_TO sont requis'
for key in MAILER_DSN MAIL_FROM MAIL_TO; do
  grep -qE "^${key}=" "$ROOT/.env" || die ".env : $key manquant"
done

# Un .env lisible par tous divulgue la clé d'API. Contrôle indicatif :
# `stat` n'a pas la même syntaxe partout et peut manquer, donc on passe
# par node, toujours présent, et on n'échoue jamais là-dessus.
PERM="$(node -e "
  try { process.stdout.write((require('fs').statSync('$ROOT/.env').mode & 0o777).toString(8)); }
  catch { process.stdout.write(''); }
" 2>/dev/null || true)"
case "$PERM" in
  600|400) ok ".env présent (mode $PERM)" ;;
  '')      ok '.env présent' ;;
  *)       warn ".env en mode $PERM — resserrez avec : chmod 600 .env" ;;
esac

# Port : lu depuis la configuration PM2, pour que la vérification de santé
# interroge bien le port réellement utilisé.
PORT="${PORT:-$(node -e "
  try {
    const a = require('$ROOT/ecosystem.config.cjs').apps[0];
    process.stdout.write(String((a.env_production ?? a.env).PORT));
  } catch { process.stdout.write('4322'); }
")}"
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

# Sauvegarde de la version en ligne, pour pouvoir y revenir.
rm -rf "$ROOT/.dist-prev"
[ -d "$ROOT/dist" ] && cp -R "$ROOT/dist" "$ROOT/.dist-prev" && ok 'version précédente sauvegardée'

if ! NODE_ENV=production npm run build; then
  # dist/ peut être à moitié écrit : on restaure avant de sortir.
  if [ -d "$ROOT/.dist-prev" ]; then
    rm -rf "$ROOT/dist"; mv "$ROOT/.dist-prev" "$ROOT/dist"
    warn 'build échoué — version précédente restaurée, service intact'
  fi
  die 'build échoué, aucun redémarrage effectué'
fi

[ -f "$ROOT/dist/server/entry.mjs" ] || die 'dist/server/entry.mjs absent après build'
# Comptage via node plutôt que find|wc|tr : moins de dépendances externes.
PAGES="$(node -e "
  const {readdirSync} = require('fs');
  const walk = d => readdirSync(d, {withFileTypes:true}).reduce((n,e) =>
    n + (e.isDirectory() ? walk(d+'/'+e.name) : e.name.endsWith('.html') ? 1 : 0), 0);
  process.stdout.write(String(walk('$ROOT/dist/client')));
" 2>/dev/null || echo '?')"
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

# Boucle arithmétique bash plutôt que `seq`, absent de certains PATH.
HEALTHY=0
for (( i = 1; i <= HEALTH_RETRIES; i++ )); do
  CODE="$(curl -s -o /dev/null -w '%{http_code}' --max-time 5 \
    "http://${HEALTH_HOST}:${PORT}${HEALTH_PATH}" || true)"
  STATUS="$(pm2 jlist 2>/dev/null | node -e "
    let s=''; process.stdin.on('data',d=>s+=d).on('end',()=>{
      try { const a=JSON.parse(s).find(x=>x.name==='$APP_NAME');
        process.stdout.write(a ? a.pm2_env.status : 'absent');
      } catch { process.stdout.write('inconnu'); }
    });" || echo inconnu)"

  if [ "$CODE" = "200" ] && [ "$STATUS" = "online" ]; then
    HEALTHY=1
    ok "HTTP 200 sur :$PORT, process online (tentative $i)"
    break
  fi
  sleep "$HEALTH_DELAY"
done

if [ "$HEALTHY" -ne 1 ]; then
  printf '\n  %s✗ échec de la vérification (HTTP %s, process %s)%s\n' "$R" "${CODE:-—}" "${STATUS:-—}" "$N" >&2
  if [ -d "$ROOT/.dist-prev" ]; then
    step 'Retour à la version précédente'
    rm -rf "$ROOT/dist"; mv "$ROOT/.dist-prev" "$ROOT/dist"
    pm2 restart "$APP_NAME" --update-env >/dev/null || true
    sleep 3
    BACK="$(curl -s -o /dev/null -w '%{http_code}' --max-time 5 \
      "http://${HEALTH_HOST}:${PORT}${HEALTH_PATH}" || true)"
    [ "$BACK" = "200" ] && ok 'version précédente restaurée et fonctionnelle' \
                        || warn "restauration effectuée mais HTTP $BACK — voir : pm2 logs $APP_NAME"
  else
    warn 'aucune version précédente à restaurer'
  fi
  printf '\n  Diagnostic : %spm2 logs %s --lines 50%s\n\n' "$B" "$APP_NAME" "$N" >&2
  exit 1
fi

# Vérifications secondaires : informatives, elles ne font pas échouer le
# déploiement puisque le service répond déjà.
NOT_FOUND="$(curl -s -o /dev/null -w '%{http_code}' --max-time 5 \
  "http://${HEALTH_HOST}:${PORT}/url-inexistante-$$" || true)"
[ "$NOT_FOUND" = "404" ] && ok 'page introuvable : 404 correct' \
                         || warn "URL inconnue → HTTP $NOT_FOUND (404 attendu)"

CONTACT="$(curl -s -o /dev/null -w '%{http_code}' --max-time 5 \
  "http://${HEALTH_HOST}:${PORT}/contact" || true)"
[ "$CONTACT" = "200" ] && ok 'page contact servie' \
                       || warn "/contact → HTTP $CONTACT"

# ---------------------------------------------------------------------------
step 'Terminé'
rm -rf "$ROOT/.dist-prev"
pm2 save >/dev/null 2>&1 && ok 'liste PM2 enregistrée'
printf '  %s%s en ligne sur le port %s — révision %s%s\n\n' \
  "$G" "$APP_NAME" "$PORT" "$(git rev-parse --short HEAD)" "$N"
