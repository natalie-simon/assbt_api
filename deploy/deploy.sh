#!/bin/bash

# Script de déploiement pour l'environnement de production
# Usage: ./deploy.sh [tag]

# Variables
TAG=${1:-develop}
ENV="production"
SCRIPT_DIR=$(dirname "$(readlink -f "$0")")
ENV_FILE="$SCRIPT_DIR/.env"

echo "=== Déploiement de l'environnement $ENV avec le tag: $TAG ==="
echo "Répertoire du script: $SCRIPT_DIR"
echo "Fichier d'environnement: $ENV_FILE"

# Vérifier que le fichier d'environnement existe
if [ ! -f "$ENV_FILE" ]; then
  echo "ERREUR: Le fichier $ENV_FILE n'existe pas!"
  exit 1
fi

# Charger les variables d'environnement
set -a
source "$ENV_FILE"
set +a

# Définir le tag à utiliser
export TAG=$TAG
export GITHUB_REPOSITORY=${GITHUB_REPOSITORY:-"natalie-simon/assbt_api"}

echo "=== Récupération des images Docker les plus récentes ==="
docker-compose -f "$SCRIPT_DIR/docker-compose.yml" --env-file "$ENV_FILE" pull

echo "=== Arrêt des conteneurs existants ==="
docker-compose -f "$SCRIPT_DIR/docker-compose.yml" --env-file "$ENV_FILE" down

echo "=== Démarrage des nouveaux conteneurs ==="
docker-compose -f "$SCRIPT_DIR/docker-compose.yml" --env-file "$ENV_FILE" up -d --force-recreate

echo "=== Vérification de l'état des services ==="
docker-compose -f "$SCRIPT_DIR/docker-compose.yml" --env-file "$ENV_FILE" ps

# Exécuter les migrations si nécessaire
if [ "${RUN_MIGRATIONS:-false}" = "true" ]; then
  echo "=== Exécution des migrations de base de données ==="
  docker-compose -f "$SCRIPT_DIR/docker-compose.yml" --env-file "$ENV_FILE" exec -T api npm run migration:run
fi

echo "=== Déploiement terminé avec succès! ==="
echo "Application accessible à l'adresse: http://${EC2_PUBLIC_IP:-localhost}:${API_PORT:-3000}"