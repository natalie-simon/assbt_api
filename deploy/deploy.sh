#!/bin/bash

# Script de déploiement pour l'environnement de test
# Usage: ./deploy.sh [tag]

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

# Créer les répertoires nécessaires pour Nginx s'ils n'existent pas
echo "=== Préparation des répertoires pour Nginx ==="
mkdir -p nginx/conf.d
mkdir -p nginx/ssl
mkdir -p nginx/www

# Copier le fichier de configuration Nginx s'il n'existe pas
if [ ! -f "nginx/conf.d/default.conf" ]; then
  echo "=== Création du fichier de configuration Nginx par défaut ==="
  echo "server {
    listen 80;
    server_name ${SUBDOMAIN:-api-test.example.com};

    location / {
        proxy_pass http://nestjs-api:${LISTEN_PORT:-3000};
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}" > nginx/conf.d/default.conf
fi

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
  docker-compose exec -T nestjs-api npm run migration:run
fi

echo "=== Déploiement terminé avec succès! ==="
echo "Application accessible à l'adresse: http://${SUBDOMAIN:-http://api-assbt-test.lesbulleurstoulonnais.fr}"
echo "ou directement via IP: http://${EC2_PUBLIC_IP:-localhost}:80"