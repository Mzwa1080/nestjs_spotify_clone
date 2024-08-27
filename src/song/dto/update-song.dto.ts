import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSongDto } from './create-song.dto';
import { IsArray, IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateSongDto extends PartialType(CreateSongDto) {

    @IsArray()
    @ApiProperty({})
    @IsString({each : true})
    @IsOptional()
    readonly artists : string;

    @IsString()
    @ApiProperty({})
    @IsOptional()
    title : string
    
    @IsString()
    @ApiProperty({})
    @IsOptional()
    lyrics : string
}
