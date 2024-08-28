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
    songData.artistId = createSongDto.artistId
    songData.title = createSongDto.title
    songData.duration = createSongDto.duration
    songData.releasedDate = createSongDto.releasedDate;
    songData.lyrics = createSongDto.lyrics

    return this.songService.save(songData)
  }

  findAll() {
// Implement try catch 
    return this.songService.find();
  }

  findOne(id: number) {
    // implement 
    return this.songService.findBy({id})
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return this.songService.update(id, updateSongDto);
  }

  remove(id: number) {
    return this.songService.delete(id)
  }
}
