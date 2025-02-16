import { MigrationInterface, QueryRunner } from "typeorm";

/**
 * Migration table upload
 */
export class Migration1739700484734 implements MigrationInterface {
    /**
     * Nom de la migration
     *
     * @memberof Migration1739700484734
     */
    name = 'Migration1739700484734'

    /**
     * Up
     * @param queryRunner
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."upload_type_enum" AS ENUM('image', 'video', 'audio', 'document', 'other')`);
        await queryRunner.query(`CREATE TABLE "upload" ("id" SERIAL NOT NULL, "nom" character varying(255) NOT NULL, "url" character varying(1024) NOT NULL, "type" "public"."upload_type_enum" NOT NULL DEFAULT 'image', "mime" character varying(128) NOT NULL, "size" character varying(1024) NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1fe8db121b3de4ddfa677fc51f3" PRIMARY KEY ("id"))`);
    }

    /**
     * Rollback
     * @param queryRunner
     */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "upload"`);
        await queryRunner.query(`DROP TYPE "public"."upload_type_enum"`);
    }

}
