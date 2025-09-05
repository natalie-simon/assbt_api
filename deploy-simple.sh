#!/bin/bash

# Script de déploiement simplifié - Lance uniquement la base de données PostgreSQL

echo "🛑 Arrêt des containers existants..."
docker compose -f docker-compose.simple.yml down

echo "🏗️ Démarrage de la base de données PostgreSQL..."
docker compose -f docker-compose.simple.yml up -d

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

echo "✅ Base de données PostgreSQL prête et accessible sur localhost:5432"
echo "   - Utilisateur: postgres"
echo "   - Mot de passe: admin"
echo "   - Base de données: Assbt"
echo ""
echo "💡 Vous pouvez maintenant lancer votre API NestJS en local avec:"
echo "   npm run start:dev"
echo ""
echo "   Utilisez le fichier .env.dev.local pour la configuration locale"