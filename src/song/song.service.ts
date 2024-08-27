import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SongEntity } from './entities/song.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SongService {
  constructor(@InjectRepository(SongEntity) private songService : Repository<SongEntity>){}

  create(createSongDto: CreateSongDto) {
    const songData = new SongEntity()
    songData.artists = createSongDto.artists
    songData.title = createSongDto.title
    // songData.duration = createSongDto.duration
    songData.releasedDate = createSongDto.releasedDate;
    songData.lyrics = createSongDto.lyrics

    return this.songService.save(songData)
  }

  findAll() {
    return `This action returns all song`;
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
