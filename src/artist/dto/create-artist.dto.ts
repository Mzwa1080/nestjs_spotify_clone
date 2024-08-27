import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateArtistDto {

    @ApiProperty({})
    @IsString()
    @IsNotEmpty()
    first_name : string

    @ApiProperty({})
    @IsString()
    @IsNotEmpty()
    stage_name: string;

    @ApiProperty({})
    @IsString()
    @IsNotEmpty()
    genre : string;

    @ApiProperty({})
    @IsDate()
    birth_date : Date


    @ApiProperty({})
    @IsString()
    @IsNotEmpty()
    nationality : string


 
}
