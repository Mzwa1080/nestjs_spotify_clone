// typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { SongEntity } from 'src/song/entities/song.entity';
import { PlaylistEntity } from 'src/playlist/entities/playlist.entity';
import { PlaylistSongEntity } from 'src/playlist/entities/playlist-song.entity';
import { ArtistEntity } from 'src/artist/entities/artist.entity';
import { UserEntity } from 'src/user/user.entity';

export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: +configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  entities: [SongEntity, PlaylistEntity, PlaylistSongEntity, ArtistEntity, UserEntity],
  synchronize: true,
});

