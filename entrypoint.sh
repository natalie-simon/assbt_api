#!/bin/sh
set -e

# Installer les dépendances
echo "Installation des dépendances..."
npm install

# Créer le répertoire de sortie pour Prisma
echo "Création du répertoire pour le client Prisma..."
mkdir -p /app/generated/prisma

# Générer le client Prisma
echo "Génération du client Prisma..."
npx prisma generate

# Attendre que la base de données soit prête
echo "Attente de la connexion à la base de données..."
npx wait-on tcp:db:5432 -t 60000

# Démarrer l'application en mode développement
echo "Démarrage de l'application..."
npm run start:dev