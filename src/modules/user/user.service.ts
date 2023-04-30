import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  async createUser(body: CreateUserDto) {
    console.log(body);
    return await this.userRepository.save(body);
  }

  async getAllUsers() {
    return await [1, 2, 3, 4, 'from service'];
  }
}
