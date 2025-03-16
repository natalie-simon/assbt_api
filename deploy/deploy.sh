#!/bin/bash

# Script de déploiement pour l'environnement de test
# Usage: ./deploy.sh [env] [tag]

# Variables
ENV=${1:-test}
TAG=${2:-develop}
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
ENV_FILE="${SCRIPT_DIR}/.env"

echo "=== Déploiement de l'environnement $ENV avec le tag: $TAG ==="
echo "Répertoire du script: $SCRIPT_DIR"
echo "Fichier d'environnement: $ENV_FILE"

# Vérifier que le fichier d'environnement existe
if [ ! -f "$ENV_FILE" ]; then
  echo "ERREUR: Le fichier .env n'existe pas à $ENV_FILE!"
  
  # Vérifier s'il existe dans d'autres emplacements connus
  if [ -f "${SCRIPT_DIR}/.env.test" ]; then
    echo "Le fichier .env.test existe, copie en cours..."
    cp "${SCRIPT_DIR}/.env.test" "$ENV_FILE"
    echo "Fichier .env créé à partir de .env.test"
  else
    # Créer un fichier .env minimal
    echo "Création d'un fichier .env minimal..."
    cat > "$ENV_FILE" << EOF
# Configuration de base
NODE_ENV=${ENV}
LISTEN_PORT=3000

# Configuration de la base de données
DB_HOST=postgres-db
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=assbt_api_${ENV}

# Configuration du déploiement
GITHUB_REPOSITORY=${GITHUB_REPOSITORY:-"natalie-simon/assbt_api"}
TAG=${TAG}
RUN_MIGRATIONS=true
EOF
    echo "Fichier .env minimal créé"
  fi
fi

# Charger les variables d'environnement
set -a
source "$ENV_FILE"
set +a

# Définir le tag à utiliser
export TAG=$TAG
export GITHUB_REPOSITORY=${GITHUB_REPOSITORY:-"natalie-simon/assbt_api"}

echo "=== Récupération des images Docker les plus récentes ==="
docker-compose -f "${SCRIPT_DIR}/docker-compose.yml" pull

echo "=== Arrêt des conteneurs existants ==="
docker-compose -f "${SCRIPT_DIR}/docker-compose.yml" down

echo "=== Démarrage des nouveaux conteneurs ==="
docker-compose -f "${SCRIPT_DIR}/docker-compose.yml" up -d --force-recreate

echo "=== Vérification de l'état des services ==="
docker-compose -f "${SCRIPT_DIR}/docker-compose.yml" ps

# Exécuter les migrations si nécessaire
if [ "${RUN_MIGRATIONS:-false}" = "true" ]; then
  echo "=== Exécution des migrations de base de données ==="
  docker-compose -f "${SCRIPT_DIR}/docker-compose.yml" exec -T nestjs-api npm run migration:run
fi

echo "=== Déploiement terminé avec succès! ==="
echo "Application accessible à l'adresse: http://${EC2_PUBLIC_IP:-localhost}:${LISTEN_PORT:-3000}"