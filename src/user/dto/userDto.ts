import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class userDto{

    @ApiProperty({ description: 'first_name', example: 'mzwa' })
    @IsString()
    first_name : string ;

    @ApiProperty({ description: 'last_name', example: 'louw' })
    @IsString()
    last_name : string;

    @ApiProperty({ description: 'email', example: 'ml@gmail.com' })
    @IsString()
    email : string;


    @ApiProperty({ description: 'passowrd', example: '123456' })
    @IsString()
    password : string
}