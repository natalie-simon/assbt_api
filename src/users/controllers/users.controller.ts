import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createuser.dto';
import { UsersService } from '../services/users.service';
import { Public } from 'src/auth/decorators/public.decorators';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getUsers() {
    return this.usersService.findAllUsers();
  }
}
