#!/bin/bash

# Script pour initialiser les certificats Let's Encrypt

# Variables
domains=(api-assbt-test.lesbulleurstoulonnais.fr)
email="votre-email@example.com"  # Remplacez par votre email
data_path="./certbot"
staging=0  # Mettre à 1 pour tester (pas de limite de rate)

# Création des répertoires nécessaires
mkdir -p "$data_path/conf/live/$domains"
mkdir -p "$data_path/www"

# Création de la configuration SSL par défaut
if [ ! -e "$data_path/conf/options-ssl-nginx.conf" ] || [ ! -e "$data_path/conf/ssl-dhparams.pem" ]; then
  echo "Téléchargement des paramètres recommandés TLS..."
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "$data_path/conf/options-ssl-nginx.conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "$data_path/conf/ssl-dhparams.pem"
fi

# Création d'un certificat temporaire pour Nginx
for domain in "${domains[@]}"; do
  echo "Création d'un certificat temporaire pour $domain..."
  openssl req -x509 -nodes -newkey rsa:2048 -days 1 \
    -keyout "$data_path/conf/live/$domain/privkey.pem" \
    -out "$data_path/conf/live/$domain/fullchain.pem" \
    -subj "/CN=$domain"
done

# Démarrage des conteneurs
echo "Démarrage des conteneurs Nginx et Certbot..."
docker-compose up -d nginx

# Attente que Nginx démarre
echo "Attente que Nginx démarre..."
sleep 5

# Exécution de Certbot
for domain in "${domains[@]}"; do
  echo "Demande de certificat pour $domain..."

  staging_arg=""
  if [ $staging -eq 1 ]; then
    staging_arg="--staging"
  fi

  docker-compose run --rm certbot certonly --webroot \
    --webroot-path=/var/www/certbot \
    $staging_arg \
    --email $email \
    --agree-tos \
    --no-eff-email \
    -d $domain
done

echo "Redémarrage des conteneurs..."
docker-compose down
docker-compose up -d

echo "Installation des certificats terminée!"