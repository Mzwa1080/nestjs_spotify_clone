import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtistEntity } from './entities/artist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArtistService {
  constructor(@InjectRepository(ArtistEntity) private artistRepository : Repository<ArtistEntity>){}

  async create(createArtistDto: CreateArtistDto) {
    const artistData = new ArtistEntity()
    artistData.first_name = createArtistDto.first_name;
    artistData.birth_date = createArtistDto.birth_date
    artistData.stage_name = createArtistDto.stage_name;
    artistData.genre = createArtistDto.genre;
    artistData.nationality = createArtistDto.nationality

    return await this.artistRepository.save(artistData)
  }

  findAll() {
    return this.artistRepository.find();
  }

  async findOne(id: number) {
    return await this.artistRepository.findOneBy({id:id})
  }

  async update(id: number, updateArtistDto: UpdateArtistDto) {
    return await this.artistRepository.update(id, updateArtistDto)
  }

  remove(id: number) {
    return this.artistRepository.delete(id)
  }
}
