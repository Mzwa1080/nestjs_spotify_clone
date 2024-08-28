import { PlaylistEntity } from "src/playlist/entities/playlist.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export class UserEntity{

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    first_name : string;

    @Column()
    last_name : string;

    @Column({unique : true})
    email : string;

    @Column()
    password : string

    @OneToMany(() => PlaylistEntity, (playlist)=> playlist.user)
    playlists : PlaylistEntity[]
}