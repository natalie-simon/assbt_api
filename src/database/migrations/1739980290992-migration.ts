import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Migration de la table article
 */
export class Migration1739980290992 implements MigrationInterface {
  /**
   * nom de la migration
   *
   * @memberof Migration1739980290992
   */
  name = 'Migration1739980290992';

  /**
   * Up
   * @param queryRunner
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article" DROP CONSTRAINT "FK_21112d85bf29253ab3b89fa27fd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" RENAME COLUMN "statutId" TO "statut"`,
    );
    await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "statut"`);
    await queryRunner.query(
      `CREATE TYPE "public"."article_statut_enum" AS ENUM('brouillon', 'publie', 'corbeille')`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ADD "statut" "public"."article_statut_enum" NOT NULL`,
    );
  }

  /**
   * Down
   * @param queryRunner
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "statut"`);
    await queryRunner.query(`DROP TYPE "public"."article_statut_enum"`);
    await queryRunner.query(
      `ALTER TABLE "article" ADD "statut" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" RENAME COLUMN "statut" TO "statutId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "article" ADD CONSTRAINT "FK_21112d85bf29253ab3b89fa27fd" FOREIGN KEY ("statutId") REFERENCES "statut"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
