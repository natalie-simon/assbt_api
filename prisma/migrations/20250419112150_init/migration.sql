-- CreateEnum
CREATE TYPE "RoleTypes" AS ENUM ('ADMIN', 'USER', 'REDAC');

-- CreateEnum
CREATE TYPE "StatutArticleTypes" AS ENUM ('BROUILLON', 'PUBLIE', 'CORBEILLE');

-- CreateEnum
CREATE TYPE "CategorieArticleTypes" AS ENUM ('ACCUEIL', 'ANNONCE', 'INFOS');

-- CreateEnum
CREATE TYPE "FileTypes" AS ENUM ('IMAGE', 'VIDEO', 'AUDIO', 'DOCUMENT', 'AUTRE');

-- CreateTable
CREATE TABLE "Fichier" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "url" VARCHAR(1024) NOT NULL,
    "type" "FileTypes" NOT NULL DEFAULT 'IMAGE',
    "mime" VARCHAR(128) NOT NULL,
    "taille" VARCHAR(1024) NOT NULL,
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateMaj" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fichier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Membre" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(96) NOT NULL,
    "mot_de_passe" TEXT NOT NULL,
    "est_supprime" BOOLEAN NOT NULL DEFAULT false,
    "role" "RoleTypes" NOT NULL DEFAULT 'USER',

    CONSTRAINT "Membre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profil" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(50) NOT NULL,
    "prenom" VARCHAR(50) NOT NULL,
    "telephone" VARCHAR(12),
    "communication_mail" BOOLEAN NOT NULL DEFAULT false,
    "communication_sms" BOOLEAN NOT NULL DEFAULT false,
    "avatarId" INTEGER,
    "membreId" INTEGER NOT NULL,

    CONSTRAINT "Profil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategorieActivite" (
    "id" SERIAL NOT NULL,
    "lbl_categorie" VARCHAR(20) NOT NULL,
    "avec_equipement" BOOLEAN NOT NULL DEFAULT false,
    "couleur" VARCHAR(6) NOT NULL,
    "avec_notification" BOOLEAN NOT NULL DEFAULT true,
    "is_supprime" BOOLEAN NOT NULL DEFAULT false,
    "imageId" INTEGER,

    CONSTRAINT "CategorieActivite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activite" (
    "id" SERIAL NOT NULL,
    "titre" VARCHAR(50) NOT NULL,
    "contenu" TEXT NOT NULL,
    "date_heure_debut" TIMESTAMP(3) NOT NULL,
    "date_heure_fin" TIMESTAMP(3) NOT NULL,
    "categorieId" INTEGER NOT NULL,

    CONSTRAINT "Activite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MembreActivite" (
    "id" SERIAL NOT NULL,
    "observations" TEXT,
    "dateInscription" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "membreId" INTEGER NOT NULL,
    "activiteId" INTEGER NOT NULL,

    CONSTRAINT "MembreActivite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "titre" VARCHAR(25) NOT NULL,
    "contenu" TEXT NOT NULL,
    "statut" "StatutArticleTypes" NOT NULL,
    "categorie" "CategorieArticleTypes" NOT NULL,
    "imageId" INTEGER,
    "redacteurId" INTEGER NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Membre_email_key" ON "Membre"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profil_membreId_key" ON "Profil"("membreId");

-- AddForeignKey
ALTER TABLE "Profil" ADD CONSTRAINT "Profil_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Fichier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profil" ADD CONSTRAINT "Profil_membreId_fkey" FOREIGN KEY ("membreId") REFERENCES "Membre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategorieActivite" ADD CONSTRAINT "CategorieActivite_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Fichier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activite" ADD CONSTRAINT "Activite_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "CategorieActivite"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembreActivite" ADD CONSTRAINT "MembreActivite_membreId_fkey" FOREIGN KEY ("membreId") REFERENCES "Membre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MembreActivite" ADD CONSTRAINT "MembreActivite_activiteId_fkey" FOREIGN KEY ("activiteId") REFERENCES "Activite"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Fichier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_redacteurId_fkey" FOREIGN KEY ("redacteurId") REFERENCES "Membre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
