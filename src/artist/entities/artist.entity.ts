import { SongEntity } from "src/song/entities/song.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('artists')
export class ArtistEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    first_name : string;

    @Column({unique : true})
    stage_name : string

    @Column()
    genre :string

    @Column()
    birth_date : Date

    @Column()
    nationality : string
    
    @OneToMany(() => SongEntity, (song) => song.artist)
    songs: SongEntity[]
    
}
