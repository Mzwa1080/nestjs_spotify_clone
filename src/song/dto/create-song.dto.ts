import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateSongDto {

    @IsArray()
    @ApiProperty({})
    @IsString({each : true})
    readonly artistId : number;

    @IsDateString()
    @ApiProperty({})
    @IsNotEmpty()
    @Transform(({ value }) => new Date(value).toISOString().split('T')[0])
    readonly releasedDate : Date

  //======  HH:MM  ======
    // @IsMilitaryTime()
    @ApiProperty({})
    @IsNotEmpty()
    @Transform(({ value }) => {
        const date = new Date(value);
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        return `${minutes}:${seconds}`;
      })
    readonly duration : string

    @IsString()
    @ApiProperty({})
    @IsNotEmpty()
    title : string
    
    @IsString()
    @ApiProperty({})
    @IsNotEmpty()
    lyrics : string
    
}
