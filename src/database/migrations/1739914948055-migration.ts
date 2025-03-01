import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Migration de la table article
 */
export class Migration1739914948055 implements MigrationInterface {
  /**
   * nom de la migration
   *
   * @memberof Migration1739914948055
   */
  name = 'Migration1739914948055';

  /**
   * Up
   *
   * @param queryRunner
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article" RENAME COLUMN "image" TO "imageId"`,
    );
    await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "imageId"`);
    await queryRunner.query(`ALTER TABLE "article" ADD "imageId" integer`);
    await queryRunner.query(
      `ALTER TABLE "article" ADD CONSTRAINT "FK_9e8730599dfbfa1e2ae6225b95e" FOREIGN KEY ("imageId") REFERENCES "upload"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  /**
   * Down
   *
   * @param queryRunner
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "article" DROP CONSTRAINT "FK_9e8730599dfbfa1e2ae6225b95e"`,
    );
    await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "imageId"`);
    await queryRunner.query(`ALTER TABLE "article" ADD "imageId" text`);
    await queryRunner.query(
      `ALTER TABLE "article" RENAME COLUMN "imageId" TO "image"`,
    );
  }
}
