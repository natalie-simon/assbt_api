import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1739945202482 implements MigrationInterface {
    name = 'Migration1739945202482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "membre" DROP CONSTRAINT "FK_b54aa55efc46398d11b1b548692"`);
        await queryRunner.query(`ALTER TABLE "membre" RENAME COLUMN "roleId" TO "type"`);
        await queryRunner.query(`ALTER TABLE "membre" DROP COLUMN "type"`);
        await queryRunner.query(`CREATE TYPE "public"."membre_type_enum" AS ENUM('User', 'Admin', 'Redacteur')`);
        await queryRunner.query(`ALTER TABLE "membre" ADD "type" "public"."membre_type_enum" NOT NULL DEFAULT 'User'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "membre" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."membre_type_enum"`);
        await queryRunner.query(`ALTER TABLE "membre" ADD "type" integer`);
        await queryRunner.query(`ALTER TABLE "membre" RENAME COLUMN "type" TO "roleId"`);
        await queryRunner.query(`ALTER TABLE "membre" ADD CONSTRAINT "FK_b54aa55efc46398d11b1b548692" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
