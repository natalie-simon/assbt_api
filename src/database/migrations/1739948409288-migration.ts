import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Migration de la table article
 */
export class Migration1739948409288 implements MigrationInterface {
  /**
   *nom de la migration
   *
   * @memberof Migration1739948409288
   */
  name = 'Migration1739948409288';

  /**
   * Up
   * @param queryRunner
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article" DROP CONSTRAINT "FK_afcf013647de613cf39111a7ee8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" RENAME COLUMN "categorieId" TO "categorie"`,
    );
    await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "categorie"`);
    await queryRunner.query(
      `CREATE TYPE "public"."article_categorie_enum" AS ENUM('Acceuil', 'Annonce', 'Informations')`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ADD "categorie" "public"."article_categorie_enum" NOT NULL`,
    );
  }

  /**
   * Down
   * @param queryRunner
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "categorie"`);
    await queryRunner.query(`DROP TYPE "public"."article_categorie_enum"`);
    await queryRunner.query(
      `ALTER TABLE "article" ADD "categorie" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" RENAME COLUMN "categorie" TO "categorieId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ADD CONSTRAINT "FK_afcf013647de613cf39111a7ee8" FOREIGN KEY ("categorieId") REFERENCES "categorie_article"("categorie_article_id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
