# 🏊‍♂️ API ASSBT - Association Sportive Saint-Barthélémy-Toirac

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
</p>

<p align="center">API REST moderne construite avec NestJS pour la gestion d'une association sportive de plongée sous-marine.</p>

<p align="center">
  <img src="https://img.shields.io/badge/node-%3E%3D18-brightgreen" alt="Node Version" />
  <img src="https://img.shields.io/badge/TypeScript-5.1.3-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/NestJS-10.0-red" alt="NestJS" />
  <img src="https://img.shields.io/badge/Prisma-6.13-orange" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-15+-blue" alt="PostgreSQL" />
</p>

---

## 🎯 Description

Cette API REST permet la gestion complète d'une association sportive de plongée sous-marine, incluant :

- **Gestion des membres** et profils utilisateurs
- **Système d'authentification** JWT avec rôles (Admin, User, Rédacteur)
- **Gestion des activités** de plongée avec inscriptions
- **Système d'articles** avec différents statuts et catégories
- **Upload de fichiers** vers AWS S3 et serveurs FTP
- **Notifications par email** avec templates EJS

## 🏗️ Architecture

### Technologies principales

- **Framework** : NestJS 10.x (Node.js/TypeScript)
- **Base de données** : PostgreSQL avec Prisma ORM
- **Authentification** : JWT + bcrypt
- **Validation** : class-validator + class-transformer
- **Upload** : AWS S3 + FTP (O2Switch)
- **Email** : Nodemailer avec templates EJS
- **Documentation** : Swagger/OpenAPI

### Structure du projet

```
src/
├── activites/           # Gestion des activités de plongée
├── articles/            # Système de publication d'articles
├── auth/               # Authentification JWT + guards
├── categories-activites/ # Catégories d'activités
├── config/             # Configuration de l'application
├── fichiers/           # Upload et gestion des fichiers
├── mail/               # Service d'envoi d'emails
├── membres/            # Gestion des membres
├── prisma/             # Client Prisma ORM
├── profils/            # Profils utilisateurs
└── main.ts             # Point d'entrée de l'application
```

## 🚀 Installation et configuration

### Prérequis

- Node.js >= 18.0.0
- PostgreSQL >= 15
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <url-du-repo>
cd assbt_api

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env
```

### Configuration des variables d'environnement

```bash
# Base de données
DB_HOST_PRISMA="postgresql://username:password@localhost:5432/assbt_db"

# JWT
JWT_SECRET="votre-secret-jwt-super-secure"
JWT_ACCESS_TOKEN_TTL=3600

# AWS S3
AWS_ACCESS_KEY_ID="your-access-key"
AWS_SECRET_ACCESS_KEY="your-secret-key"
AWS_REGION="eu-west-3"
AWS_S3_BUCKET="your-bucket-name"

# Email
MAIL_HOST="smtp.your-provider.com"
MAIL_PORT=587
MAIL_USER="your-email@domain.com"
MAIL_PASS="your-password"

# FTP (O2Switch)
FTP_HOST="your-ftp-host"
FTP_USER="your-ftp-user"
FTP_PASS="your-ftp-password"
```

### Configuration de la base de données

```bash
# Générer le client Prisma
npm run prisma:generate

# Appliquer les migrations
npm run prisma:deploy

# (Optionnel) Peupler la base avec des données de test
npm run prisma:seed
```

## 🏃‍♂️ Démarrage

```bash
# Mode développement avec rechargement automatique
npm run start:dev

# Mode production
npm run start:prod

# Mode debug
npm run start:debug
```

L'API sera accessible sur `http://localhost:3000/api`

## 📚 Documentation API

### Swagger/OpenAPI

Une fois l'application démarrée, la documentation interactive est disponible sur :
- **Documentation Swagger** : `http://localhost:3000/documentation`

### Endpoints principaux

| Module | Endpoint | Description |
|--------|----------|-------------|
| **Auth** | `POST /api/auth/signin` | Connexion utilisateur |
| **Auth** | `POST /api/auth/forgot-password` | Réinitialisation mot de passe |
| **Membres** | `GET /api/membres` | Liste des membres |
| **Membres** | `POST /api/membres` | Création d'un membre |
| **Activités** | `GET /api/activites` | Liste des activités |
| **Activités** | `POST /api/activites` | Création d'activité |
| **Articles** | `GET /api/articles` | Liste des articles |
| **Uploads** | `POST /api/uploads` | Upload de fichiers |

### Authentification

L'API utilise JWT Bearer tokens :

```bash
# Exemple de requête authentifiée
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     http://localhost:3000/api/membres
```

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests e2e
npm run test:e2e

# Couverture de code
npm run test:cov

# Tests en mode watch
npm run test:watch
```

## 🔧 Scripts disponibles

```bash
# Développement
npm run start:dev          # Démarrage avec rechargement automatique
npm run start:debug        # Démarrage en mode debug

# Base de données
npm run prisma:generate    # Générer le client Prisma
npm run prisma:deploy      # Appliquer les migrations
npm run prisma:studio      # Interface graphique Prisma
npm run prisma:reset       # Reset de la base de données

# Qualité du code
npm run lint              # Linting ESLint
npm run format            # Formatage Prettier

# Build
npm run build             # Compilation TypeScript
```

## 🔐 Sécurité

### Rôles et permissions

- **ADMIN** : Accès complet à toutes les fonctionnalités
- **REDAC** : Création et édition d'articles
- **USER** : Consultation et inscription aux activités

### Bonnes pratiques

- Mots de passe hachés avec bcrypt (salt rounds: 12)
- Validation stricte des données d'entrée
- Protection CSRF via configuration CORS
- Rate limiting sur les endpoints sensibles
- Logs sécurisés sans exposition d'informations sensibles

### Audit de sécurité

Un audit de sécurité est disponible : `AUDIT_SECURITE_2025-08-08.md`

## 🐳 Docker

```bash
# Développement
docker-compose -f docker-compose.dev.yml up -d

# Production
docker-compose -f docker-compose.prod.yml up -d

# Simple
docker-compose -f docker-compose.simple.yml up -d
```

## 📦 Déploiement

### Scripts de déploiement

```bash
# Déploiement production
./deploy-prod.sh

# Déploiement simple
./deploy-simple.sh
```

### Variables d'environnement de production

Assurez-vous de configurer :
- Base de données PostgreSQL sécurisée
- Certificats SSL/TLS
- Variables d'environnement de production
- Monitoring et logs centralisés

## 🤝 Contribution

### Workflow Git

- **Branche principale** : `develop`
- **Branches de fonctionnalités** : `feature/nom-fonctionnalite`
- **Branches de correction** : `hotfix/nom-correction`

### Standards de code

- TypeScript strict activé
- ESLint + Prettier pour le formatage
- Tests unitaires requis pour les nouvelles fonctionnalités
- Documentation des endpoints Swagger

## 📝 Changelog

### Version 0.0.1 (En cours)

- ✅ Système d'authentification JWT
- ✅ Gestion des membres et profils
- ✅ CRUD activités avec inscriptions
- ✅ Système d'articles avec catégories
- ✅ Upload de fichiers (AWS S3 + FTP)
- ✅ Notifications par email
- 🔄 Évolution des activités (branche actuelle)

## 👥 Équipe

- **Développement** : Natalie Simon (admin@nataliesimon.fr)
- **Association** : ASSBT - Association Sportive Saint-Barthélémy-Toirac

## 📄 Licence

Ce projet est sous licence UNLICENSED - voir le fichier package.json pour les détails.

## 🆘 Support

Pour toute question ou problème :

1. Consultez la documentation Swagger : `/documentation`
2. Vérifiez les logs de l'application
3. Contactez l'équipe de développement

---

<p align="center">
  Développé avec ❤️ pour l'ASSBT par l'équipe technique
</p>