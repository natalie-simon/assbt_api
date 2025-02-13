import { MigrationInterface, QueryRunner } from "typeorm";

/**
 * Migration pour ajouter la contrainte d'unicité sur le nom d'un role
 */
export class Migration1739387387583 implements MigrationInterface {
    /**
     * Nom de la migration
     *
     * @memberof Migration1739387387583
     */
    name = 'Migration1739387387583'

    /**
     * Up
     * @param queryRunner
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" ADD CONSTRAINT "UQ_367aad98203bd8afaed0d704093" UNIQUE ("role")`);
    }

    /**
     * Rollback
     * @param queryRunner
     */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "role" DROP CONSTRAINT "UQ_367aad98203bd8afaed0d704093"`);
    }

}
