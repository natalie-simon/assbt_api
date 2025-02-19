import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1739977820472 implements MigrationInterface {
    name = 'Migration1739977820472'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."article_categorie_enum" RENAME TO "article_categorie_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."article_categorie_enum" AS ENUM('accueil', 'annonce', 'informations')`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "categorie" TYPE "public"."article_categorie_enum" USING "categorie"::"text"::"public"."article_categorie_enum"`);
        await queryRunner.query(`DROP TYPE "public"."article_categorie_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."article_categorie_enum_old" AS ENUM('Acceuil', 'Annonce', 'Informations')`);
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "categorie" TYPE "public"."article_categorie_enum_old" USING "categorie"::"text"::"public"."article_categorie_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."article_categorie_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."article_categorie_enum_old" RENAME TO "article_categorie_enum"`);
    }

}
