import { ArtistEntity } from "src/artist/entities/artist.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('songs')
export class SongEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable : false})
    artistId : number

    @Column()
    title : string

    @Column()
    duration : string
    
    @Column()
    releasedDate : Date
    
    @Column({unique : true})
    lyrics : string

    @ManyToOne(() => ArtistEntity, (artist) => artist.songs)
    artist: ArtistEntity
}
