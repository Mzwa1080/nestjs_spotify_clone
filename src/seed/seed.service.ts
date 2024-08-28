import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SongEntity } from 'src/song/entities/song.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedService {

  constructor(@InjectRepository(SongEntity) private songSeed: Repository<SongEntity>) {}

  async run() {

    // const songs: Partial<SongEntity>[] = [
    //   {
    //     // artistId: 1,
    //     title: 'Turn on the light',
    //     releasedDate: new Date('2018-05-02'),
    //     duration: '05:23',
    //     lyrics: 'Turn on the lights I\'m lookin for her too I heard she keep her promises and never turn on you I heard she',
    //   },
    //   {
    //     // artistId: 1,
    //     title: 'Not Like Us',
    //     releasedDate: new Date('2024-05-02'),
    //     duration: '09:23',
    //     lyrics: 'They not like us, they not like us, they not like us They not like us, they not like us, they not like us You think the Bay gon\' let you disrespect Pac, nigga?',
    //   },
    //   {
    //     artists: 3,
    //     title: 'Imithandazo',
    //     releasedDate: new Date('2024-01-02'),
    //     duration: '04:23',
    //     lyrics: 'Khomelela mungana wa mino (hm-hmm) Nita vuya mungana wa mino Unga rili mungana wa mino (oh, oh Swita lungha mungana wa mino (oh yeah) Bambelela mngani wami Sophumelela yizwa ngami (ni nge tleli, ni nge tleli) Lento ngeyethu sinikiwe',
    //   },
    // ];

    // await this.songSeed.save(songs);
    // console.log('Songs have been seeded successfully');
  }
}
