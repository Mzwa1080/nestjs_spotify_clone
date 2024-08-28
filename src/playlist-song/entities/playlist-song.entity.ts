import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
// import { PlaylistEntity } from "./playlist.entity";
import { SongEntity } from "src/song/entities/song.entity";
import { PlaylistEntity } from "src/playlist/entities/playlist.entity";

@Entity('Playlist-Songs')
export class PlaylistSongEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    playlistId : number;

    @Column()
    songId : number;

    @ManyToOne(() => PlaylistEntity, (playlist) => playlist.playlistSongs)
    @JoinColumn()
    playlist: PlaylistEntity;

    
    @ManyToOne(() => SongEntity, (song) => song.songPlaylists)
    @JoinColumn()
    song: SongEntity;
}