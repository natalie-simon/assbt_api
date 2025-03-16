#!/bin/bash

# Script de déploiement pour l'environnement de test
# Usage: ./deploy-test.sh [tag]

# Variables
TAG=${1:-develop}
ENV="test"

echo "=== Déploiement de l'environnement $ENV avec le tag: $TAG ==="

# Vérifier que le fichier d'environnement existe
if [ ! -f ".env" ]; then
  echo "ERREUR: Le fichier .env n'existe pas!"
  exit 1
fi

# Charger les variables d'environnement
set -a
source .env
set +a

# Définir le tag à utiliser
export TAG=$TAG
export GITHUB_REPOSITORY=${GITHUB_REPOSITORY:-"natalie-simon/assbt_api"}

echo "=== Récupération des images Docker les plus récentes ==="
docker-compose pull

echo "=== Arrêt des conteneurs existants ==="
docker-compose down

echo "=== Démarrage des nouveaux conteneurs ==="
docker-compose up -d --force-recreate

echo "=== Vérification de l'état des services ==="
docker-compose ps

# Exécuter les migrations si nécessaire
if [ "${RUN_MIGRATIONS:-false}" = "true" ]; then
  echo "=== Exécution des migrations de base de données ==="
  docker-compose exec -T api npm run migration:run
fi

echo "=== Déploiement terminé avec succès! ==="
echo "Application accessible à l'adresse: http://${EC2_PUBLIC_IP:-localhost}:${API_PORT:-3000}"