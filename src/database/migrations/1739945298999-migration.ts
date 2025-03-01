import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Migration de la table membre
 */
export class Migration1739945298999 implements MigrationInterface {
  /**
   * nom de la migration
   *
   * @memberof Migration1739945298999
   */
  name = 'Migration1739945298999';

  /**
   * Up
   * @param queryRunner
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "membre" RENAME COLUMN "type" TO "role"`,
    );
    await queryRunner.query(
      `ALTER TYPE "public"."membre_type_enum" RENAME TO "membre_role_enum"`,
    );
  }

  /**
   * Down
   * @param queryRunner
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TYPE "public"."membre_role_enum" RENAME TO "membre_type_enum"`,
    );
    await queryRunner.query(
      `ALTER TABLE "membre" RENAME COLUMN "role" TO "type"`,
    );
  }
}
