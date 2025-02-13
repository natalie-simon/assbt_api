import { MigrationInterface, QueryRunner } from "typeorm";

/**
 * Migration de la base de données (role, memmbre, categorie_article, article, statut)
 */
export class Migration1739383653644 implements MigrationInterface {
    /**
     * Nom de la migration
     *
     * @memberof Migration1739383653644
     */
    name = 'Migration1739383653644'

    /**
     * Création
     * @param queryRunner
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "role" character varying(10) NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "membre" ("id" SERIAL NOT NULL, "email" character varying(96) NOT NULL, "mot_de_passe" text NOT NULL, "est_supprime" boolean NOT NULL DEFAULT false, "roleId" integer, CONSTRAINT "UQ_1d9e6730c9f02626476f6b9f58b" UNIQUE ("email"), CONSTRAINT "PK_29f70347c7e5db7a98937c91a1c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categorie_article" ("categorie_article_id" SERIAL NOT NULL, "lbl_categorie" character varying(25) NOT NULL, CONSTRAINT "UQ_fe4ed9deff7df2df1a1ed614ba9" UNIQUE ("lbl_categorie"), CONSTRAINT "PK_983b52a18c329424267af82e6f1" PRIMARY KEY ("categorie_article_id"))`);
        await queryRunner.query(`CREATE TABLE "article" ("id" SERIAL NOT NULL, "titre" character varying(25) NOT NULL, "contenu" text NOT NULL, "image" text, "statutId" integer NOT NULL, "categorieId" integer NOT NULL, "redacteurId" integer NOT NULL, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "statut" ("id" SERIAL NOT NULL, "lbl_statut" character varying(10) NOT NULL, CONSTRAINT "PK_71cbc7d060386956ec620562ca7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "membre" ADD CONSTRAINT "FK_b54aa55efc46398d11b1b548692" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "article" ADD CONSTRAINT "FK_21112d85bf29253ab3b89fa27fd" FOREIGN KEY ("statutId") REFERENCES "statut"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "article" ADD CONSTRAINT "FK_afcf013647de613cf39111a7ee8" FOREIGN KEY ("categorieId") REFERENCES "categorie_article"("categorie_article_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "article" ADD CONSTRAINT "FK_354d6aa9ed3e7fb58b86f9b406d" FOREIGN KEY ("redacteurId") REFERENCES "membre"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    /**
     * Rollback
     * @param queryRunner
     */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" DROP CONSTRAINT "FK_354d6aa9ed3e7fb58b86f9b406d"`);
        await queryRunner.query(`ALTER TABLE "article" DROP CONSTRAINT "FK_afcf013647de613cf39111a7ee8"`);
        await queryRunner.query(`ALTER TABLE "article" DROP CONSTRAINT "FK_21112d85bf29253ab3b89fa27fd"`);
        await queryRunner.query(`ALTER TABLE "membre" DROP CONSTRAINT "FK_b54aa55efc46398d11b1b548692"`);
        await queryRunner.query(`DROP TABLE "statut"`);
        await queryRunner.query(`DROP TABLE "article"`);
        await queryRunner.query(`DROP TABLE "categorie_article"`);
        await queryRunner.query(`DROP TABLE "membre"`);
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
