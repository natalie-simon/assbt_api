# Etape 1 Construction de l'application NestJs
FROM node:22.8 AS build

# Définition du répertoire de l'application
WORKDIR /app

# Copie des fichiers
COPY package*.json ./

#Installation des dépendances
RUN npm install

# Copie du code source
COPY . .

#Etape 2 Conteneur pour l'API NestJs
FROM node:22.8

# Définition du répertoire de l'application
WORKDIR /app

# Copie des fichiers
COPY --from=build /app /app

RUN npm install --only=production
# Installer le CLI NestJS globalement
RUN npm install -g @nestjs/cli

# Exposer le port configuré dans le .env
ENV PORT=${LISTEN_PORT}
EXPOSE ${PORT}

# Démarrer l'application avec npm start
CMD ["npm", "start"]