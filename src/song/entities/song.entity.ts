import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('songs')
export class SongEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    artists : string

    @Column()
    title : string

    @Column()
    duration : Date
    
    @Column()
    releasedDate : Date
    
    @Column()
    lyrics : string

}
