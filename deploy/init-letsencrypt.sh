#!/bin/bash

# Script pour initialiser les certificats Let's Encrypt

# Variables
domains=(api-assbt-test.lesbulleurstoulonnais.fr)
email="votre-email@example.com"  # Remplacez par votre email
data_path="./certbot"
rsa_key_size=4096
staging=0  # Mettre à 1 pour tester (pas de limite de rate)

# Vérifier si l'email est valide
if [[ "$email" == "votre-email@example.com" ]]; then
  echo "Vous devez remplacer l'email dans ce script par votre propre adresse email."
  exit 1
fi

# Création des répertoires nécessaires
mkdir -p "$data_path/conf/live/$domains"
mkdir -p "$data_path/www"

# Vérification si les certificats existent déjà
if [ -d "$data_path/conf/live/$domains" ]; then
  read -p "Les certificats existent déjà. Voulez-vous les remplacer? (y/N) " decision
  if [ "$decision" != "Y" ] && [ "$decision" != "y" ]; then
    exit 0
  fi
fi

# Création de la configuration SSL par défaut
if [ ! -e "$data_path/conf/options-ssl-nginx.conf" ] || [ ! -e "$data_path/conf/ssl-dhparams.pem" ]; then
  echo "Téléchargement des paramètres recommandés TLS..."
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "$data_path/conf/options-ssl-nginx.conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "$data_path/conf/ssl-dhparams.pem"
fi

# Création d'un certificat temporaire pour Nginx
for domain in "${domains[@]}"; do
  echo "Création d'un certificat temporaire pour $domain..."
  openssl req -x509 -nodes -newkey rsa:$rsa_key_size -days 1 \
    -keyout "$data_path/conf/live/$domain/privkey.pem" \
    -out "$data_path/conf/live/$domain/fullchain.pem" \
    -subj "/CN=$domain"
done

# Démarrage de Nginx
echo "Démarrage du conteneur Nginx..."
docker-compose up -d nginx

# Attente que Nginx démarre
echo "Attente que Nginx démarre..."
sleep 5

# Arrêt des conteneurs existants de certbot
docker-compose stop certbot
docker-compose rm -f certbot

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
    --rsa-key-size $rsa_key_size \
    --agree-tos \
    --no-eff-email \
    --force-renewal \
    -d $domain

  # Vérification du succès
  if [ $? -ne 0 ]; then
    echo "Échec lors de la demande de certificat pour $domain"
    exit 1
  fi
done

echo "Redémarrage de Nginx avec les nouveaux certificats..."
docker-compose exec nginx nginx -s reload

echo "Installation des certificats terminée!"
echo "Vos certificats seront automatiquement renouvelés tous les 90 jours par le conteneur certbot."