FROM node:latest

WORKDIR /app

# installation des dépendances nécessaires pour bcrypt
RUN apt-get update && apt-get install -y python3 make g++

# Dockerfile minimaliste pb lié à bcrypt en mode hotreload

# Définir la commande par défaut
CMD ["npm", "run", "start:dev"]