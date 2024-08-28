import { ArtistEntity } from "src/artist/entities/artist.entity";
import { PlaylistSongEntity } from "src/playlist-song/entities/playlist-song.entity";
// import { PlaylistSongEntity } from "src/playlist/entities/playlist-song.entity";
import { PlaylistEntity } from "src/playlist/entities/playlist.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => PlaylistSongEntity, (playlist) => playlist.song)
    songPlaylists : PlaylistSongEntity[];
}
