import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { userDto } from './dto/userDto';
import { User } from './user.interface';
import { userUpdateDto } from './dto/user-update-dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }

    async register(@Body() user: userDto): Promise<UserEntity> {
        console.log(user.first_name);

        const userData = new UserEntity();
        userData.first_name = user.first_name;
        userData.last_name = user.last_name;
        userData.email = user.email;
        const salt = await bcrypt.genSalt();
        userData.password = await bcrypt.hash(user.password, salt);
        return await this.userRepository.save(userData)
    }

    async getUsers() {
        return await this.userRepository.find()
    }

    async getSingleUser(id: number) {
        return this.userRepository.findBy({ id })
    }

    async findOneByUserEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOneBy({ email });
    }

    async updateUser(id: number, updateUserData: userUpdateDto) {
        return await this.userRepository.update(id, updateUserData)
    }

    deleteUserById(id: number) {
        return this.userRepository.delete({ id: id })
    }
}
