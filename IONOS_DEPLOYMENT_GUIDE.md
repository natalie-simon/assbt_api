# Guide de Déploiement PRODUCTION - IONOS VPS

## 📋 Vue d'ensemble

Ce guide détaille la configuration d'un VPS IONOS pour le déploiement automatique de votre application NestJS avec Prisma en production via GitHub Actions.

## 🎯 Prérequis

- VPS IONOS avec Ubuntu 20.04+ ou Debian 11+
- Accès root ou sudo sur le VPS
- Compte GitHub avec accès au repository
- Docker et Docker Compose sur le VPS

---

## 🔧 ÉTAPE 1 : Configuration initiale du VPS IONOS

### 1.1 Connexion au VPS
```bash
ssh -p 2222 adm_manu@87.106.120.111
```

### 1.2 Mise à jour du système
```bash
apt update && apt upgrade -y
```

### 1.3 Installation des dépendances essentielles
```bash
apt install -y curl wget git ufw fail2ban htop nano
```

### 1.4 Configuration du firewall
```bash
# Autoriser SSH (port personnalisé 2222)
ufw allow 2222/tcp

# Autoriser HTTP et HTTPS
ufw allow 80/tcp
ufw allow 443/tcp

# Activer le firewall
ufw --force enable
```

### ✅ Test de validation ÉTAPE 1
```bash
# Vérifier les services
systemctl status ssh
ufw status
```

---

## 👤 ÉTAPE 2 : Création de l'utilisateur de déploiement

### 2.1 Créer l'utilisateur deploy
```bash
# Connectez-vous d'abord avec adm_manu
ssh -p 2222 adm_manu@87.106.120.111

# Créer l'utilisateur deploy avec un mot de passe
sudo useradd -m -s /bin/bash deploy
sudo usermod -aG sudo deploy

# Définir un mot de passe pour deploy (optionnel, pour urgences)
sudo passwd deploy

# Ou désactiver le mot de passe pour forcer l'usage des clés SSH
sudo passwd -d deploy
```

### 2.2 Configuration des clés SSH
```bash
# Basculer vers l'utilisateur deploy
su - deploy

# Créer le dossier .ssh
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

### 2.3 Générer une paire de clés pour GitHub Actions
```bash
# Sur votre machine locale (pas sur le VPS)
ssh-keygen -t ed25519 -C "github-actions-ionos" -f ~/.ssh/ionos_deploy_key

# D'abord, connectez-vous avec adm_manu et copiez la clé
cat ~/.ssh/ionos_deploy_key.pub | ssh -p 2222 adm_manu@87.106.120.111 'sudo -u deploy tee -a /home/deploy/.ssh/authorized_keys'

# OU alternative : copier manuellement
# 1. Afficher la clé publique localement
cat ~/.ssh/ionos_deploy_key.pub
# 2. Se connecter au VPS et ajouter la clé
ssh -p 2222 adm_manu@87.106.120.111
sudo su - deploy
mkdir -p ~/.ssh
chmod 700 ~/.ssh
nano ~/.ssh/authorized_keys  # Coller la clé ici
chmod 600 ~/.ssh/authorized_keys
```

### 2.4 Sécuriser les permissions
```bash
# Sur le VPS, en tant qu'utilisateur deploy
chmod 600 ~/.ssh/authorized_keys
```

### ✅ Test de validation ÉTAPE 2
```bash
# Tester la connexion SSH avec la nouvelle clé
ssh -i ~/.ssh/ionos_deploy_key -p 2222 deploy@87.106.120.111
```

---

## 🐳 ÉTAPE 3 : Installation de Docker

### 3.1 Installation de Docker
```bash
# En tant qu'utilisateur deploy (avec sudo)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Ajouter l'utilisateur au groupe docker
sudo usermod -aG docker deploy

# Redémarrer la session
exit
su - deploy
```

### 3.2 Installation de Docker Compose
```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### ✅ Test de validation ÉTAPE 3
```bash
docker --version
docker-compose --version
docker run hello-world
```

---

## 📁 ÉTAPE 4 : Structure des dossiers de production

### 4.1 Créer l'arborescence
```bash
mkdir -p ~/production/nestjs-prisma-prod/{backups,logs}
cd ~/production/nestjs-prisma-prod
```

### 4.2 Créer le fichier .env.prod.ionos
```bash
nano .env.prod.ionos
```

**Contenu du .env.prod.ionos :**
```env
# Base de données
DATABASE_URL="postgresql://postgres:CHANGEME_STRONG_PASSWORD@db:5432/postgres"
DB_USERNAME=postgres
DB_PASSWORD=CHANGEME_STRONG_PASSWORD
DB_NAME=postgres
DB_HOST=db
DB_PORT=5432
DB_HOST_PRISMA=db

# Application
NODE_ENV=production
PORT=3000

# JWT & Authentication
JWT_SECRET=CHANGEME_VERY_STRONG_JWT_SECRET_MIN_32_CHARS
JWT_ACCESS_TOKEN_TTL=3600
CLEF=CHANGEME_CLEF_SECRET

# Email Configuration (SMTP)
MAIL_HOST=smtp.ionos.fr
MAIL_PORT=587
SMTP_USERNAME=contact@lesbulleurstoulonnais.fr
SMTP_PASSWORD=CHANGEME_SMTP_PASSWORD
MAIL_ADMIN=contact@lesbulleurstoulonnais.fr

# Frontend URL
URL_FRONT=https://prod2025.lesbulleurstoulonnais.fr

# AWS Configuration (pour upload de fichiers)
AWS_BUCKET_NAME=assbt-prod-bucket
AWS_REGION=eu-west-3
AWS_ACCESS_KEY_ID=CHANGEME_AWS_ACCESS_KEY
AWS_SECRET_ACCESS_KEY=CHANGEME_AWS_SECRET_KEY
CLOUDFRONT_URL=https://CHANGEME.cloudfront.net

# Logging
LOG_LEVEL=info

# CORS (ajuster selon vos besoins)
CORS_ORIGIN=https://prod2025.lesbulleurstoulonnais.fr

# Sécurité
BCRYPT_ROUNDS=12
```

### 4.3 Sécuriser le fichier .env.prod.ionos
```bash
chmod 600 .env.prod.ionos
```

### ✅ Test de validation ÉTAPE 4
```bash
ls -la ~/production/nestjs-prisma-prod/
cat ~/.env.prod.ionos  # Vérifier que le contenu est correct
```

---

## 🔑 ÉTAPE 5 : Configuration des secrets GitHub

### 5.1 Secrets à ajouter dans GitHub
Aller dans : `Settings > Secrets and variables > Actions`

**Secrets requis :**

| Nom du Secret | Valeur | Description |
|---------------|--------|-------------|
| `IONOS_VPS_HOST` | `87.106.120.111` | Adresse IP du VPS IONOS |
| `IONOS_VPS_USER` | `deploy` | Utilisateur de déploiement |
| `SSH_PRIVATE_KEY_IONOS` | `[CONTENU_CLE_PRIVEE]` | Clé privée SSH (ionos_deploy_key) |
| `IONOS_SSH_PORT` | `2222` | Port SSH personnalisé |
| `DISCORD_WEBHOOK_URL` | `[URL_WEBHOOK]` | URL webhook Discord pour notifications |

### 5.2 Comment récupérer la clé privée
```bash
# Sur votre machine locale
cat ~/.ssh/ionos_deploy_key
```
Copiez tout le contenu (y compris `-----BEGIN` et `-----END`)

### ✅ Test de validation ÉTAPE 5
- Vérifier que tous les secrets sont bien configurés dans GitHub
- Tester la connexion SSH depuis une action de test

---

## 🐋 ÉTAPE 6 : Création du docker-compose.prod.yml

### 6.1 Créer le fichier docker-compose
```bash
cd ~/production/nestjs-prisma-prod
nano docker-compose.prod.ionos.yml
```

**Contenu du docker-compose.prod.ionos.yml :**
```yaml
services:
  db:
    image: postgres:15-alpine
    container_name: postgres_prod_db
    environment:
      POSTGRES_DB: ${DB_NAME}
      POSTGRES_USER: ${DB_USERNAME}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_prod_data:/var/lib/postgresql/data
      - ./backups:/backups
    ports:
      - "5433:5432"  # Port externe différent pour éviter conflits
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${DB_USERNAME}"]
      interval: 10s
      timeout: 5s
      retries: 5

  api:
    build: .
    container_name: api_prod
    environment:
      - NODE_ENV=production
    env_file:
      - .env.prod.ionos
    ports:
      - "3001:3000"  # Port externe différent
    depends_on:
      db:
        condition: service_healthy
    restart: unless-stopped
    volumes:
      - ./logs:/app/logs
    healthcheck:
      test: ["CMD-SHELL", "curl -f http://localhost:3000/health || exit 1"]
      interval: 30s
      timeout: 10s
      retries: 3

  traefik:
    image: traefik:v3.0
    container_name: traefik_prod
    command:
      - "--api.dashboard=false"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.myresolver.acme.httpchallenge=true"
      - "--certificatesresolvers.myresolver.acme.httpchallenge.entrypoint=web"
      - "--certificatesresolvers.myresolver.acme.email=contact@lesbulleurstoulonnais.fr"
      - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - traefik_prod_certs:/letsencrypt
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.api.rule=Host(`prod2025.lesbulleurstoulonnais.fr`)"
      - "traefik.http.routers.api.entrypoints=websecure"
      - "traefik.http.routers.api.tls.certresolver=myresolver"
      - "traefik.http.services.api.loadbalancer.server.port=3000"

volumes:
  postgres_prod_data:
  traefik_prod_certs:
```

### ✅ Test de validation ÉTAPE 6
```bash
docker-compose -f docker-compose.prod.ionos.yml config
```

---

## 🔒 ÉTAPE 7 : Configuration de la sécurité avancée

### 7.1 Configuration de Fail2Ban
```bash
sudo nano /etc/fail2ban/jail.local
```

```ini
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 3

[sshd]
enabled = true
port = ssh
logpath = /var/log/auth.log
maxretry = 3
```

```bash
sudo systemctl restart fail2ban
```

### 7.2 Configuration des logs système
```bash
# Créer un script de rotation des logs
sudo nano /etc/logrotate.d/app-prod
```

```
/home/deploy/production/nestjs-prisma-prod/logs/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    copytruncate
    create 644 deploy deploy
}
```

### 7.3 Monitoring des ressources
```bash
# Installer htop et iotop pour le monitoring
sudo apt install -y htop iotop nethogs
```

### ✅ Test de validation ÉTAPE 7
```bash
sudo fail2ban-client status
sudo systemctl status fail2ban
```

---

## 🚀 ÉTAPE 8 : Test de déploiement manuel

### 8.1 Test initial du build
```bash
cd ~/production/nestjs-prisma-prod

# Simuler le processus de déploiement (pour test avec develop)
# En production, utilisez --branch=main
git clone --depth=1 --branch=develop https://github.com/natalie-simon/assbt_api.git test_deploy
cd test_deploy
docker-compose -f docker-compose.prod.ionos.yml build
```

### 8.2 Test de l'infrastructure
```bash
cd ~/production/nestjs-prisma-prod
docker-compose -f docker-compose.prod.ionos.yml up -d db

# Attendre que la DB soit prête
sleep 10
docker-compose -f docker-compose.prod.ionos.yml exec db pg_isready

# Nettoyer
docker-compose -f docker-compose.prod.ionos.yml down
```

### ✅ Test de validation ÉTAPE 8
```bash
docker ps  # Doit être vide après le down
docker images  # Doit montrer les images créées
```

---

## 🎯 ÉTAPE 9 : Configuration du workflow GitHub

### 9.1 Créer le fichier workflow
Le workflow sera créé dans `.github/workflows/deploy-prod-ionos.yml` avec les spécifications suivantes :

**Fonctionnalités clés :**
- Déclenchement sur push vers `main` (ou `master`)
- Validation des changements
- Tests pré-déploiement
- Sauvegarde automatique
- Migration sécurisée
- Notifications Discord
- Rollback automatique en cas d'échec

### 9.2 Tests de validation requis
- Tests de lint
- Tests de build
- Validation des variables d'environnement
- Tests de connectivité base de données

### ✅ Test de validation ÉTAPE 9
- Le workflow doit être validé par GitHub Actions
- Test avec un commit de test sur la branche `prod`

---

## 📊 ÉTAPE 10 : Monitoring et maintenance

### 10.1 Scripts de monitoring
```bash
# Créer un script de monitoring
nano ~/production/monitor.sh
```

```bash
#!/bin/bash
echo "=== Monitoring PRODUCTION ==="
echo "Date: $(date)"
echo

echo "=== Services Docker ==="
docker-compose -f ~/production/nestjs-prisma-prod/docker-compose.prod.yml ps

echo "=== Utilisation Disque ==="
df -h

echo "=== Utilisation RAM ==="
free -h

echo "=== Logs récents API ==="
docker-compose -f ~/production/nestjs-prisma-prod/docker-compose.prod.yml logs --tail=10 api

echo "=== Statut Base de Données ==="
docker-compose -f ~/production/nestjs-prisma-prod/docker-compose.prod.yml exec -T db pg_isready
```

```bash
chmod +x ~/production/monitor.sh
```

### 10.2 Tâche cron pour les sauvegardes
```bash
crontab -e
```

```bash
# Sauvegarde quotidienne à 2h du matin
0 2 * * * cd /home/deploy/production/nestjs-prisma-prod && docker-compose exec -T db pg_dump -U postgres postgres > backups/daily_$(date +\%Y\%m\%d).sql

# Nettoyage des sauvegardes > 30 jours
0 3 * * * find /home/deploy/production/nestjs-prisma-prod/backups -name "daily_*.sql" -mtime +30 -delete
```

### ✅ Test de validation ÉTAPE 10
```bash
./monitor.sh
crontab -l
```

---

## 🔧 ÉTAPE 11 : Résolution des problèmes courants

### 11.1 Problèmes de permissions
```bash
# Si erreurs de permissions Docker
sudo chown -R deploy:deploy ~/production
chmod -R 755 ~/production
```

### 11.2 Problèmes de mémoire
```bash
# Ajouter swap si nécessaire (2GB)
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### 11.3 Nettoyage Docker
```bash
# Script de nettoyage
nano ~/production/cleanup.sh
```

```bash
#!/bin/bash
echo "Nettoyage Docker..."
docker system prune -f
docker volume prune -f
docker image prune -a -f
echo "Nettoyage terminé"
```

### ✅ Test de validation ÉTAPE 11
```bash
chmod +x ~/production/cleanup.sh
./cleanup.sh
```

---

## 📋 CHECKLIST FINALE

### ✅ Configuration VPS
- [ ] VPS IONOS configuré et accessible
- [ ] Utilisateur `deploy` créé avec les bonnes permissions
- [ ] Docker et Docker Compose installés
- [ ] Firewall configuré
- [ ] Fail2Ban activé

### ✅ Configuration Application
- [ ] Fichier `.env.prod` créé et sécurisé
- [ ] Fichier `docker-compose.prod.yml` configuré
- [ ] Structure de dossiers créée
- [ ] Scripts de monitoring en place

### ✅ Configuration GitHub
- [ ] Tous les secrets GitHub configurés
- [ ] Clés SSH fonctionnelles
- [ ] Branche `prod` créée
- [ ] Workflow testé manuellement

### ✅ Sécurité et Monitoring
- [ ] Logs configurés avec rotation
- [ ] Sauvegardes automatiques programmées
- [ ] Monitoring en place
- [ ] Procédures de rollback documentées

---

## 🚨 PROCÉDURES D'URGENCE

### En cas de problème critique :

1. **Arrêt d'urgence :**
   ```bash
   cd ~/production/nestjs-prisma-prod
   docker-compose -f docker-compose.prod.ionos.yml down
   ```

2. **Restauration de sauvegarde :**
   ```bash
   # Identifier la dernière bonne sauvegarde
   ls -la backups/
   
   # Restaurer
   docker-compose -f docker-compose.prod.ionos.yml up -d db
   docker-compose -f docker-compose.prod.ionos.yml exec -T db psql -U postgres postgres < backups/[FICHIER_SAUVEGARDE]
   ```

3. **Contact d'urgence :**
   - Vérifier les notifications Discord
   - Consulter les logs : `docker-compose logs`
   - Exécuter le script de monitoring : `./monitor.sh`

---

## 📞 Support et Maintenance

- **Logs principaux :** `~/production/nestjs-prisma-prod/logs/`
- **Script de monitoring :** `~/production/monitor.sh`
- **Script de nettoyage :** `~/production/cleanup.sh`
- **Sauvegardes :** `~/production/nestjs-prisma-prod/backups/`

Ce guide couvre tous les aspects nécessaires pour un déploiement production sécurisé sur IONOS VPS.