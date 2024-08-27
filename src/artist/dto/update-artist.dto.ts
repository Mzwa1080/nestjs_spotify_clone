import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateArtistDto } from './create-artist.dto';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateArtistDto extends PartialType(CreateArtistDto) {



    @ApiProperty({})
    @IsString()
    @IsOptional()
    stage_name_rebranding: string;

    @ApiProperty({})
    @IsString()
    @IsOptional()
    genre : string;

    @ApiProperty({})
    @IsDate()
    @IsOptional()
    birth_date : Date


    @ApiProperty({})
    @IsString()
    @IsOptional()
    nationality : string

}
