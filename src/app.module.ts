import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmConfig } from '../src/config/typeorm.config'; 
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { dataSourceOptions } from 'db/data-source';
import { ArtistModule } from './artist/artist.module';
import { SongModule } from './song/song.module';
import { PlaylistModule } from './playlist/playlist.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule,

    ArtistModule,

    SongModule,

    PlaylistModule,

    SeedModule  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
