import { MigrationInterface, QueryRunner } from "typeorm";

/**
 * Migration pour rendre la colonne Role.role nullable
 */
export class Migration1739383737264 implements MigrationInterface {
    /**
     * Nom de la migration
     *
     * @memberof Migration1739383737264
     */
    name = 'Migration1739383737264'

    /**
     * Up
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "role" DROP NOT NULL`);
    }

    /**
     * Rollback
     */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ALTER COLUMN "role" SET NOT NULL`);
    }

}
