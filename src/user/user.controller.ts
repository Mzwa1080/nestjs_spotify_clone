import { Body, Controller, Post, Get, Param, Put, ParseIntPipe, HttpException, BadRequestException, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { userDto } from './dto/userDto';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { userUpdateDto } from './dto/user-update-dto';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiBearerAuth('JWT-auth')
@ApiTags('users')
@Controller()
export class UserController {

    constructor(private userService: UserService) { }



    @Post('register')
    async registerUser(@Body() body: userDto) {
        return await this.userService.register(body)
    }

    @UseGuards(AuthGuard)
    @Get('users')
    async getAllUser() {
        return await this.userService.getUsers()
    }

    @UseGuards(AuthGuard)   
     @Get('user/:id')
    async getUserById(@Param('id') id: number) {
        return await this.userService.getSingleUser(id)
    }

    @UseGuards(AuthGuard)
    @Put('update/:id')
    updateUser(@Param('id') id: number, @Body() body: userUpdateDto) {
        return this.userService.updateUser(id, body)
    }
    @UseGuards(AuthGuard)
    @Delete('delete/:id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
      const deleteSingleUser = await this.userService.deleteUserById(id);

      if (deleteSingleUser.affected === 0) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return  `User is deleted!`;
    }


}
