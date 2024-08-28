import { PlaylistSongEntity } from "src/playlist-song/entities/playlist-song.entity";
import { SongEntity } from "src/song/entities/song.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { PlaylistSongEntity } from "./playlist-song.entity";

@Entity('Playlist')
export class PlaylistEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable : false})
    playlist_name: string;

    @Column()
    userId: number;

    @ManyToOne(() => UserEntity, (user) => user.playlists)
    user: UserEntity;

    @OneToMany(() => PlaylistSongEntity, (playlist) => playlist.playlist)
    playlistSongs : PlaylistSongEntity[];
}
