import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1724843202253 implements MigrationInterface {
    name = 'Init1724843202253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "artists" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "stage_name" character varying NOT NULL, "genre" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "nationality" character varying NOT NULL, CONSTRAINT "UQ_2e97c29b2815ff130344120f870" UNIQUE ("stage_name"), CONSTRAINT "PK_09b823d4607d2675dc4ffa82261" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "songs" ("id" SERIAL NOT NULL, "artistId" integer NOT NULL, "title" character varying NOT NULL, "duration" character varying NOT NULL, "releasedDate" TIMESTAMP NOT NULL, "lyrics" character varying NOT NULL, CONSTRAINT "UQ_c9ceb6ee3db817849d9195e0ba7" UNIQUE ("lyrics"), CONSTRAINT "PK_e504ce8ad2e291d3a1d8f1ea2f4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Playlist-Songs" ("id" SERIAL NOT NULL, "playlistId" integer NOT NULL, "songId" integer NOT NULL, CONSTRAINT "PK_06c9b6511855aecc4c334a5b427" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Playlist" ("id" SERIAL NOT NULL, "playlist_name" character varying NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_cbf731d0c3b4c18ee9930d14790" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "songs" ADD CONSTRAINT "FK_909b985984ad0e366bcdb4224d0" FOREIGN KEY ("artistId") REFERENCES "artists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Playlist-Songs" ADD CONSTRAINT "FK_9a5fe8cae225ae1f495008562e5" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Playlist-Songs" ADD CONSTRAINT "FK_0be1d260bcc1c5dd88993ac1a86" FOREIGN KEY ("songId") REFERENCES "songs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Playlist" ADD CONSTRAINT "FK_f781e4828ac36036bc49f6c6aee" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Playlist" DROP CONSTRAINT "FK_f781e4828ac36036bc49f6c6aee"`);
        await queryRunner.query(`ALTER TABLE "Playlist-Songs" DROP CONSTRAINT "FK_0be1d260bcc1c5dd88993ac1a86"`);
        await queryRunner.query(`ALTER TABLE "Playlist-Songs" DROP CONSTRAINT "FK_9a5fe8cae225ae1f495008562e5"`);
        await queryRunner.query(`ALTER TABLE "songs" DROP CONSTRAINT "FK_909b985984ad0e366bcdb4224d0"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Playlist"`);
        await queryRunner.query(`DROP TABLE "Playlist-Songs"`);
        await queryRunner.query(`DROP TABLE "songs"`);
        await queryRunner.query(`DROP TABLE "artists"`);
    }

}
