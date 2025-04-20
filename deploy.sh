#!/bin/bash

# Générer le client Prisma localement
echo "🔧 Génération du client Prisma..."
chmod +x ./generate-prisma.sh
./generate-prisma.sh

# Script de déploiement pour l'application Les Bulleurs Toulonnais

# Déterminer l'environnement
if [ "$1" == "prod" ]; then
    ENV="prod"
    echo "🚀 Déploiement en production..."
else
    ENV="dev"
    echo "🛠️ Déploiement en développement..."
fi

# Vérifier que le fichier .env.${ENV} existe
if [ ! -f ".env.${ENV}" ]; then
    echo "❌ Erreur: Le fichier .env.${ENV} n'existe pas!"
    echo "Créez un fichier .env.${ENV} avant de continuer."
    exit 1
fi

# Exporter la variable ENV pour docker-compose
export ENV=${ENV}

# Arrêter les containers existants
echo "🛑 Arrêt des containers existants..."
docker compose -f docker-compose.prisma.yml down

# Reconstruire et démarrer d'abord la base de données
echo "🏗️ Démarrage de la base de données..."
docker compose -f docker-compose.prisma.yml up -d db

# Attendre que la base de données soit prête
echo "⏳ Attente du démarrage de la base de données..."
sleep 5  # Attendre un peu que le container démarre

MAX_RETRIES=30
RETRY_COUNT=0

while ! docker exec postgres_db pg_isready -U postgres -q && [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    echo "En attente de la base de données... ($((RETRY_COUNT+1))/$MAX_RETRIES)"
    sleep 2
    RETRY_COUNT=$((RETRY_COUNT+1))
done

if [ $RETRY_COUNT -eq $MAX_RETRIES ]; then
    echo "❌ La base de données n'a pas démarré à temps!"
    exit 1
fi

echo "✅ Base de données prête!"

# Démarrer le reste des services
echo "🏗️ Démarrage de l'API et des autres services..."
docker compose -f docker-compose.prisma.yml up -d

# Vérifier le statut des containers
echo "🔍 Vérification du statut des containers..."
docker ps | grep "nestjs_api\|postgres_db\|traefik"

# Afficher les logs de l'API
echo "📝 Logs de l'API:"
sleep 5  # Attendre un peu que l'API démarre
docker logs nestjs_api --tail 20

echo "✅ Déploiement terminé!"