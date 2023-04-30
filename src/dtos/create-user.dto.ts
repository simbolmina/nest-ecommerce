import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  // @IsString()
  @IsNotEmpty({ message: 'name is required' })
  username: string;
  @IsString()
  password: string;
  @IsEmail()
  email: string;
}
