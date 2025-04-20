#!/bin/bash

# Script de déploiement pour la production

echo "🚀 Déploiement en production..."

# Vérifier que le fichier .env.prod existe
if [ ! -f ".env.prod" ]; then
    echo "❌ Erreur: Le fichier .env.prod n'existe pas!"
    echo "Créez un fichier .env.prod avant de continuer."
    exit 1
fi

# Arrêter les containers existants
echo "🛑 Arrêt des containers existants..."
docker compose -f docker-compose.prod.yml down

# Reconstruire et démarrer d'abord la base de données
echo "🏗️ Démarrage de la base de données..."
docker compose -f docker-compose.prod.yml up -d db

# Attendre que la base de données soit prête
echo "⏳ Attente du démarrage de la base de données..."
sleep 5

MAX_RETRIES=10
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

# Construire et démarrer l'API (sans utiliser --build pour réutiliser le cache)
echo "🏗️ Construction et démarrage de l'API..."
docker compose -f docker-compose.prod.yml build api
docker compose -f docker-compose.prod.yml up -d api

# Démarrer Traefik
echo "🏗️ Démarrage de Traefik..."
docker compose -f docker-compose.prod.yml up -d traefik

# Vérifier le statut des containers
echo "🔍 Vérification du statut des containers..."
docker ps | grep "nestjs_api\|postgres_db\|traefik"

# Afficher les logs de l'API
echo "📝 Logs de l'API:"
sleep 5
docker logs nestjs_api --tail 20

echo "✅ Déploiement terminé!"
echo "🌐 Votre API est disponible à l'adresse: https://api-prod.lesbulleurstoulonnais.fr"
echo "🔧 Dashboard Traefik: https://traefik.api-prod.lesbulleurstoulonnais.fr"