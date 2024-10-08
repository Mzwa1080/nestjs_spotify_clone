import { UserEntity } from 'src/user/user.entity'
import {DataSource, DataSourceOptions} from 'typeorm'
import  {config } from 'dotenv'
import { ArtistEntity } from 'src/artist/entities/artist.entity'
import { PlaylistEntity } from 'src/playlist/entities/playlist.entity'
import { SongEntity } from 'src/song/entities/song.entity'
import { PlaylistSongEntity } from 'src/playlist-song/entities/playlist-song.entity'

config()
export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [UserEntity, ArtistEntity, PlaylistEntity, SongEntity, PlaylistSongEntity],
    synchronize: true,
    migrations: ['dist/db/migrations/*.js']
    
    
}
console.log('database', process.env.DB_NAME);
console.log('database', process.env.DB_HOST);

const datasource = new DataSource(dataSourceOptions)
export default datasource;