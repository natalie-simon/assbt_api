# Etape 1: Construction de l'application NestJs
FROM node:22-alpine AS build

# Définition du répertoire de l'application
WORKDIR /app

# Installation des dépendances nécessaires pour les modules natifs
RUN apk add --no-cache python3 make g++

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm ci

# Copie du code source
COPY . .

# Build de l'application
RUN npm run build

# Etape 2: Conteneur pour l'API NestJs
FROM node:22-alpine

# Définition du répertoire de l'application
WORKDIR /app

# Copie seulement des fichiers nécessaires depuis l'étape de build
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

# Installation pour la production
RUN npm ci --only=production

# Exposer le port de l'application
EXPOSE 3000

# Démarrer l'application
CMD ["node", "dist/main"]