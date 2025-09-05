#!/bin/bash
set -e

# Variables
APP_ROOT="/home/deploy/app"
TRAEFIK_CONFIG_DIR="${APP_ROOT}/deploy/docker/traefik/config"
TRAEFIK_DYNAMIC_DIR="${APP_ROOT}/deploy/docker/traefik/dynamic"

# Création des répertoires nécessaires
mkdir -p ${TRAEFIK_CONFIG_DIR}
mkdir -p ${TRAEFIK_DYNAMIC_DIR}

# Copie des fichiers de configuration
echo "Copie des fichiers de configuration Traefik..."
cp ./deploy/docker/traefik/config/traefik.yml ${TRAEFIK_CONFIG_DIR}/
cp ./deploy/docker/traefik/dynamic/dynamic_conf.yml ${TRAEFIK_DYNAMIC_DIR}/

# Création des réseaux Docker si nécessaire
echo "Création des réseaux Docker..."
docker network create web 2>/dev/null || true
docker network create app-network 2>/dev/null || true

# Arrêt des conteneurs existants
echo "Arrêt des conteneurs existants..."
docker-compose -f docker-compose.prod.yml down || true

# Démarrage des conteneurs
echo "Démarrage des conteneurs..."
docker-compose -f docker-compose.prod.yml up -d --build

# Vérification de l'état des conteneurs
echo "Vérification de l'état des conteneurs..."
docker ps

echo "Déploiement terminé avec succès!"