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

# Installation minimale pour la production
RUN npm ci --only=production && \
  npm install -g @nestjs/cli && \
  # Nettoyage du cache npm pour réduire la taille de l'image
  npm cache clean --force && \
  # Création d'un utilisateur non-root
  addgroup -g 1001 -S nodejs && \
  adduser -S nestjs -u 1001 -G nodejs

# Utiliser un utilisateur non-root pour plus de sécurité
USER nestjs

# Variables d'environnement
ENV NODE_ENV=production

# Exposer le port de l'application
EXPOSE 3000

# Vérification de santé
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Démarrer l'application
CMD ["node", "dist/main"]