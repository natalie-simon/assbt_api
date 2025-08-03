-- AlterTable
ALTER TABLE "public"."Activite" ADD COLUMN     "max_participant" INTEGER NOT NULL DEFAULT 99,
ADD COLUMN     "motif_annulation" TEXT,
ADD COLUMN     "nbr_attente" INTEGER NOT NULL DEFAULT 0;
