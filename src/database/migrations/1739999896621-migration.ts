import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1739999896621 implements MigrationInterface {
    name = 'Migration1739999896621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."membre_role_enum" AS ENUM('User', 'Admin', 'Redacteur')`);
        await queryRunner.query(`CREATE TABLE "membre" ("id" SERIAL NOT NULL, "email" character varying(96) NOT NULL, "mot_de_passe" text NOT NULL, "est_supprime" boolean NOT NULL DEFAULT false, "role" "public"."membre_role_enum" NOT NULL DEFAULT 'User', CONSTRAINT "UQ_1d9e6730c9f02626476f6b9f58b" UNIQUE ("email"), CONSTRAINT "PK_29f70347c7e5db7a98937c91a1c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."upload_type_enum" AS ENUM('image', 'video', 'audio', 'document', 'other')`);
        await queryRunner.query(`CREATE TABLE "upload" ("id" SERIAL NOT NULL, "nom" character varying(255) NOT NULL, "url" character varying(1024) NOT NULL, "type" "public"."upload_type_enum" NOT NULL DEFAULT 'image', "mime" character varying(128) NOT NULL, "size" character varying(1024) NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1fe8db121b3de4ddfa677fc51f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."article_statut_enum" AS ENUM('brouillon', 'publie', 'corbeille')`);
        await queryRunner.query(`CREATE TYPE "public"."article_categorie_enum" AS ENUM('accueil', 'annonce', 'informations')`);
        await queryRunner.query(`CREATE TABLE "article" ("id" SERIAL NOT NULL, "titre" character varying(25) NOT NULL, "contenu" text NOT NULL, "statut" "public"."article_statut_enum" NOT NULL, "categorie" "public"."article_categorie_enum" NOT NULL, "imageId" integer, "redacteurId" integer NOT NULL, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "article" ADD CONSTRAINT "FK_9e8730599dfbfa1e2ae6225b95e" FOREIGN KEY ("imageId") REFERENCES "upload"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "article" ADD CONSTRAINT "FK_354d6aa9ed3e7fb58b86f9b406d" FOREIGN KEY ("redacteurId") REFERENCES "membre"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" DROP CONSTRAINT "FK_354d6aa9ed3e7fb58b86f9b406d"`);
        await queryRunner.query(`ALTER TABLE "article" DROP CONSTRAINT "FK_9e8730599dfbfa1e2ae6225b95e"`);
        await queryRunner.query(`DROP TABLE "article"`);
        await queryRunner.query(`DROP TYPE "public"."article_categorie_enum"`);
        await queryRunner.query(`DROP TYPE "public"."article_statut_enum"`);
        await queryRunner.query(`DROP TABLE "upload"`);
        await queryRunner.query(`DROP TYPE "public"."upload_type_enum"`);
        await queryRunner.query(`DROP TABLE "membre"`);
        await queryRunner.query(`DROP TYPE "public"."membre_role_enum"`);
    }

}
