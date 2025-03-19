#!/bin/bash

# Script de déploiement pour l'application NestJS avec SSL
TAG=$1
if [ -z "$TAG" ]; then
  TAG="develop"
fi

# Charger les variables d'environnement
set -a
source .env
set +a

echo "Déploiement en cours avec tag: $TAG"

# Vérifier si les répertoires nécessaires existent
mkdir -p ./certbot/conf
mkdir -p ./certbot/www
chmod -R 755 ./certbot

# Vérifier si les certificats SSL existent déjà
if [ ! -d "./certbot/conf/live/api-assbt-test.lesbulleurstoulonnais.fr" ] || [ ! -f "./certbot/conf/live/api-assbt-test.lesbulleurstoulonnais.fr/fullchain.pem" ]; then
  echo "Les certificats SSL n'existent pas encore, lancement de l'initialisation..."
  chmod +x init-letsencrypt.sh
  ./init-letsencrypt.sh

  if [ $? -ne 0 ]; then
    echo "Erreur lors de l'initialisation des certificats SSL"
    exit 1
  fi
else
  echo "Les certificats SSL existent déjà."
fi

# Arrêter les conteneurs en cours d'exécution
echo "Arrêt des conteneurs en cours..."
docker-compose down

# Télécharger l'image depuis GitHub Container Registry si nécessaire
echo "Téléchargement de l'image Docker depuis GHCR..."
docker pull ghcr.io/${GITHUB_REPOSITORY}-api:${TAG}

# Démarrer les services
echo "Démarrage des services..."
docker-compose up -d

# Attendre que tous les services démarrent
echo "Attente que tous les services démarrent..."
sleep 10

# Vérifier que tous les services sont opérationnels
echo "Vérification des services..."
docker-compose ps

# Vérifier la configuration Nginx
echo "Vérification de la configuration Nginx..."
docker-compose exec -T nginx nginx -t

# Afficher les logs de Nginx et Certbot
echo "Logs Nginx:"
docker-compose logs --tail=10 nginx
echo "Logs Certbot:"
docker-compose logs --tail=10 certbot

echo "Déploiement terminé avec succès!"
echo "L'application est accessible à l'adresse: https://api-assbt-test.lesbulleurstoulonnais.fr"