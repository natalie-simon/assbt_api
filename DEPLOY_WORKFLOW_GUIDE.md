# 🚀 Guide Étape par Étape - Déploiement NestJS/Prisma sur OVH

## 📋 Résumé du processus

**Objectif** : Déployer automatiquement l'API NestJS avec Prisma sur un VPS OVH  
**Durée totale** : 4-8 minutes  
**Déclenchement** : Manuel via GitHub Actions  
**Environnement** : VPS OVH avec Docker + PostgreSQL  

---

## 🔄 Les 6 phases du déploiement

### **📥 PHASE 1 : Récupération du code (15s)**

```bash
# GitHub Actions récupère le code
git checkout develop
```

**Ce qui se passe** :
- GitHub Actions clone la branche `develop`
- Le code source est préparé pour le déploiement
- Connexion SSH établie vers le VPS OVH

---

### **🧹 PHASE 2 : Nettoyage de l'environnement (60s)**

```bash
# Arrêt des anciens conteneurs
docker-compose -f docker-compose.prisma.yml down

# Suppression des conteneurs conflictuels
docker rm -f postgres_db traefik api nestjs_api

# Sauvegarde préventive de la base de données
docker exec postgres_db pg_dump -U postgres Assbt > backup_$(date).sql
```

**Ce qui se passe** :
- ✅ Arrêt propre des services existants
- ✅ Suppression forcée des conteneurs problématiques  
- ✅ Sauvegarde automatique de la base de données
- ✅ Préservation des fichiers de configuration (.env.dev)

**Fichiers préservés** :
- `.env.dev` (variables d'environnement)
- `backups/` (sauvegardes de base de données)

---

### **📦 PHASE 3 : Mise à jour du code (30s)**

```bash
# Clone dans un répertoire temporaire
git clone --depth=1 --branch=develop https://github.com/natalie-simon/assbt_api.git /tmp/repo

# Nettoyage du répertoire de l'app
rm -rf /home/deploy/app/nestjs-prisma/* (sauf .env.dev et backups)

# Copie des nouveaux fichiers
cp -R /tmp/repo/* /home/deploy/app/nestjs-prisma/

# Restauration de la configuration
cp .env.dev.backup .env.dev
```

**Ce qui se passe** :
- ✅ Récupération du code le plus récent
- ✅ Clone optimisé (depth=1) pour la rapidité
- ✅ Remplacement complet du code source
- ✅ Restauration intelligente des configurations

---

### **🐳 PHASE 4 : Démarrage Docker orchestré (3-5 min)**

#### 4.1 Démarrage de la base de données
```bash
# Lancement PostgreSQL en premier
docker-compose -f docker-compose.prisma.yml up -d db

# Attente que la DB soit prête (health check)
until pg_isready; do
  echo "Attente de PostgreSQL..."
  sleep 5
done
```

#### 4.2 Construction et lancement de l'API
```bash
# Build et démarrage de l'API NestJS
docker-compose -f docker-compose.prisma.yml up -d --build

# Attente du démarrage complet
sleep 30
```

**Ce qui se passe** :
- ✅ **Démarrage séquentiel** : Base de données d'abord, puis API
- ✅ **Health checks** : Vérification que PostgreSQL répond
- ✅ **Build automatique** : Reconstruction des images si nécessaire
- ✅ **Attente intelligente** : Délai pour la stabilisation

**Services démarrés** :
- `db` : PostgreSQL 15
- `api` : NestJS + Prisma
- `traefik` : Reverse proxy (si configuré)

---

### **🔄 PHASE 5 : Migrations et schéma de base (1-2 min)**

#### 5.1 Génération du client Prisma
```bash
docker-compose exec -T api npx prisma generate
```

#### 5.2 Application des migrations
```bash
# Tentative d'application des migrations existantes
docker-compose exec -T api npx prisma migrate deploy

# Si échec, logique de rattrapage
if [ $? -ne 0 ]; then
  # Cas 1: Première installation
  if [aucune migration]; then
    npx prisma migrate dev --name init --create-only
    npx prisma migrate deploy
  
  # Cas 2: Désynchronisation de schéma
  else
    npx prisma db pull  # Synchronise avec la DB existante
    npx prisma migrate dev --name schema_sync --create-only
    npx prisma migrate deploy
  fi
fi
```

**Ce qui se passe** :
- ✅ **Génération du client** : Code TypeScript pour accès à la DB
- ✅ **Migrations automatiques** : Application des changements de schéma
- ✅ **Gestion des cas d'échec** :
  - Première installation → Migration `init`
  - Désynchronisation → Migration de rattrapage
- ✅ **Vérification finale** : État des migrations

**Résultat** : Base de données à jour avec le schéma Prisma

---

### **📊 PHASE 6 : Vérifications et monitoring (30s)**

```bash
# Vérification de l'état des services
docker-compose ps

# Vérification des tables de la base
psql -U postgres -d Assbt -c "\dt"

# Affichage des logs récents
docker-compose logs --tail=50 api

# Nettoyage des images inutiles
docker image prune -f
```

**Ce qui se passe** :
- ✅ **État des services** : Vérification que tout fonctionne
- ✅ **Structure de la base** : Contrôle des tables créées
- ✅ **Logs de l'API** : Vérification du démarrage correct
- ✅ **Nettoyage** : Suppression des images Docker obsolètes

**Indicateurs de succès** :
- Services `Up` dans `docker-compose ps`
- Tables Prisma visibles dans PostgreSQL
- Logs API sans erreur critique
- Endpoint API accessible

---

## 🎯 Points de contrôle critiques

### **🔴 Étapes qui peuvent échouer**

1. **Connexion SSH** → Vérifier les clés et l'adresse IP
2. **Sauvegarde DB** → Conteneur PostgreSQL introuvable
3. **Clone du repo** → Problème réseau ou authentification
4. **Build Docker** → Erreurs de dépendances ou mémoire
5. **Migrations Prisma** → Conflit de schéma ou base corrompue

### **🟢 Signaux de réussite**

- ✅ Connexion SSH établie
- ✅ Sauvegarde DB créée
- ✅ Code source mis à jour
- ✅ Conteneurs Docker `Up`
- ✅ Migrations Prisma `Applied`
- ✅ API logs normaux

---

## 🛠️ Fichiers clés impliqués

### **Sur le serveur VPS**
- `/home/deploy/app/nestjs-prisma/` → Répertoire de l'application
- `.env.dev` → Variables d'environnement
- `docker-compose.prisma.yml` → Configuration Docker
- `backups/` → Sauvegardes automatiques
- `prisma/migrations/` → Historique des migrations

### **Dans le dépôt GitHub**
- `prisma/schema.prisma` → Schéma de base de données
- `src/` → Code source NestJS
- `docker-compose.prisma.yml` → Configuration de déploiement
- `package.json` → Dépendances Node.js

---

## ⚡ Temps d'exécution par étape

| Phase | Temps estimé | Détail |
|-------|--------------|--------|
| 1. Checkout | 10-15s | Clone GitHub |
| 2. Nettoyage | 30-60s | Arrêt conteneurs + sauvegarde |
| 3. Mise à jour code | 15-30s | Clone + copie fichiers |
| 4. Docker startup | 2-5min | Build images + démarrage |
| 5. Migrations | 30-120s | Prisma generate + migrate |
| 6. Vérifications | 15-30s | Tests + logs |

**⏱️ Total : 4-8 minutes selon la complexité**

---

## 🚨 Que faire en cas de problème ?

### **Échec de connexion SSH**
```bash
# Vérifier depuis la machine locale
ssh -i ~/.ssh/ovh_key deploy@VPS_HOST -p 2222
```

### **Conteneurs qui ne démarrent pas**
```bash
# Se connecter au VPS et vérifier
docker-compose -f docker-compose.prisma.yml logs
docker-compose -f docker-compose.prisma.yml ps
```

### **Erreur de migration Prisma**
```bash
# Reset complet de la base (DANGER - perte de données)
docker-compose exec -T api npx prisma migrate reset --force

# Ou restauration depuis sauvegarde
psql -U postgres -d Assbt < backups/backup_YYYYMMDD.sql
```

### **API inaccessible**
```bash
# Vérifier les logs
docker-compose logs api

# Redémarrer le service
docker-compose restart api
```

---

## 🎯 Amélioration continue

**Ce déploiement fonctionne bien pour un environnement de développement, mais pour la production il faudrait ajouter :**

- 🔒 **Tests automatisés** avant déploiement
- 📊 **Monitoring avancé** (Prometheus/Grafana) 
- 🔄 **Blue/Green deployment** pour zero-downtime
- 🛡️ **Scan de sécurité** des images Docker
- 📝 **Notifications** Slack/Discord sur succès/échec

**Le processus est robuste et bien pensé pour un déploiement automatisé !** ✨

---

## 📝 Configuration et modification des variables d'environnement

### **🎯 Emplacement du fichier .env sur le serveur**

Le fichier principal de configuration se trouve à :
```bash
/home/deploy/app/nestjs-prisma/.env.dev
```

### **🔄 Logique de gestion dans le workflow**

Le workflow a une **logique de fallback intelligent** dans l'ordre suivant :

1. **Fichier principal** (priorité 1)
   ```bash
   /home/deploy/app/nestjs-prisma/.env.dev
   ```

2. **Fichier de backup** (priorité 2) 
   ```bash
   /home/deploy/app/nestjs-prisma/.env.dev.backup
   ```

3. **Fichier racine** (priorité 3)
   ```bash
   /home/deploy/app/.env.dev
   ```

### **🛠️ Procédures de modification**

#### **Option 1 : Modification directe (recommandée)**
```bash
# Connexion SSH au serveur
ssh deploy@VPS_HOST -p 2222 -i ~/.ssh/ovh_key

# Aller dans le répertoire de l'application
cd /home/deploy/app/nestjs-prisma

# Modifier le fichier
nano .env.dev
# ou
vim .env.dev
```

#### **Option 2 : Depuis ta machine locale**
```bash
# Télécharger le fichier actuel
scp -P 2222 -i ~/.ssh/ovh_key deploy@VPS_HOST:/home/deploy/app/nestjs-prisma/.env.dev ./env.dev.backup

# Modifier localement avec ton éditeur préféré
code ./env.dev.backup

# Renvoyer sur le serveur
scp -P 2222 -i ~/.ssh/ovh_key ./env.dev.backup deploy@VPS_HOST:/home/deploy/app/nestjs-prisma/.env.dev
```

#### **Option 3 : Créer un .env "maître" (pour éviter les modifications répétées)**
```bash
# Créer un .env de référence qui sera toujours utilisé
ssh deploy@VPS_HOST -p 2222 -i ~/.ssh/ovh_key

# Créer le fichier maître
nano /home/deploy/app/.env.dev

# Le workflow le copiera automatiquement à chaque déploiement
```

### **📋 Variables d'environnement typiques**

Exemple de contenu `.env.dev` :
```bash
# Base de données
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres  
DB_PASSWORD=ton_mot_de_passe_securise
DB_NAME=Assbt

# Application
NODE_ENV=development
PORT=3000
JWT_SECRET=ton_secret_jwt_unique

# URLs
API_URL=https://api-dev.lesbulleurstoulonnais.fr
FRONTEND_URL=https://dev.lesbulleurstoulonnais.fr

# Services externes (email, upload, etc.)
SMTP_HOST=smtp.exemple.com
SMTP_PORT=587
SMTP_USER=noreply@lesbulleurstoulonnais.fr
SMTP_PASS=mot_de_passe_email

# Upload et stockage
UPLOAD_MAX_SIZE=10485760
STORAGE_PATH=/app/uploads
```

### **🔄 Application des modifications**

Après modification du fichier `.env.dev` :

```bash
# Redémarrage léger des services
cd /home/deploy/app/nestjs-prisma
docker-compose -f docker-compose.prisma.yml restart

# Ou redémarrage complet si nécessaire
docker-compose -f docker-compose.prisma.yml down
docker-compose -f docker-compose.prisma.yml up -d
```

### **✅ Vérification des modifications**

```bash
# Vérifier que les services redémarrent correctement
docker-compose -f docker-compose.prisma.yml ps

# Consulter les logs pour s'assurer du bon fonctionnement
docker-compose -f docker-compose.prisma.yml logs api

# Tester l'API
curl http://localhost:3000/health
```

### **🛡️ Sécurité des variables d'environnement**

**⚠️ Important** :
- **Ne jamais commiter** le fichier `.env.dev` dans le dépôt
- **Utiliser des mots de passe forts** pour JWT_SECRET et DB_PASSWORD  
- **Limiter les accès SSH** au serveur
- **Sauvegarder** les configurations importantes

**✅ Le fichier `.env.dev` est automatiquement préservé lors des déploiements !**