import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1724750535516 implements MigrationInterface {
    name = 'Init1724750535516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "artists" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "stage_name" character varying NOT NULL, "genre" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "nationality" character varying NOT NULL, CONSTRAINT "UQ_2e97c29b2815ff130344120f870" UNIQUE ("stage_name"), CONSTRAINT "PK_09b823d4607d2675dc4ffa82261" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "songs" ("id" SERIAL NOT NULL, "artists" character varying NOT NULL, "title" character varying NOT NULL, "duration" TIMESTAMP NOT NULL, "releasedDate" TIMESTAMP NOT NULL, "lyrics" character varying NOT NULL, CONSTRAINT "PK_e504ce8ad2e291d3a1d8f1ea2f4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "songs"`);
        await queryRunner.query(`DROP TABLE "artists"`);
    }

}
