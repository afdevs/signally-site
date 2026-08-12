#!/usr/bin/env bash
#
# Déploiement : récupère, installe, construit, (re)démarre.
#
#   npm run deploy
#
# `set -e` interrompt à la première erreur : si le build échoue, PM2
# n'est pas redémarré et le site reste en ligne sur la version en cours.
#
set -euo pipefail

# Se placer à la racine du dépôt, quel que soit le dossier d'appel.
cd "$(dirname "${BASH_SOURCE[0]}")/.."

echo "▸ Récupération"
git pull --ff-only

echo "▸ Dépendances"
npm ci --no-audit --no-fund

echo "▸ Build"
NODE_ENV=production npm run build

echo "▸ PM2"
if pm2 describe signally-site >/dev/null 2>&1; then
  pm2 restart signally-site --update-env
else
  pm2 start ecosystem.config.cjs --env production
fi
pm2 save

echo "▸ Déployé — révision $(git rev-parse --short HEAD)"
