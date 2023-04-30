import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<User> {
    return await this.userService.createUser(body);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    console.log(id);
  }
}
