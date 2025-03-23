#!/bin/bash
# Script de configuration initiale pour instance EC2
set -e

echo "Installation des mises à jour et des outils essentiels..."
sudo apt update
sudo apt upgrade -y
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

echo "Installation de Docker..."
# Installer Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker ubuntu

echo "Installation de Docker Compose..."
# Installer Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.6/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

echo "Création des répertoires d'application..."
# Créer les répertoires nécessaires
mkdir -p ~/apps/bulleurs-toulonnais/nginx/conf.d
mkdir -p ~/apps/bulleurs-toulonnais/certbot/conf
mkdir -p ~/apps/bulleurs-toulonnais/certbot/www
chmod -R 755 ~/apps/bulleurs-toulonnais/certbot

echo "Vérification de l'installation..."
# Vérifier les installations
docker --version
docker-compose --version

echo "Vérification des règles de pare-feu..."
# Vérifier que les ports nécessaires sont ouverts
sudo ss -tulpn | grep -E ':(80|443)'

echo "Configuration terminée. Vous pouvez maintenant déployer votre application."