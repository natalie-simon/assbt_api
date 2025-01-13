import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dtos/createuser.dto';
import { UsersService } from './services/users.service';
import { Public } from 'src/auth/decorators/public.decorators';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


/** Controleur pour les Users (membres) */
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /** Route pour enregister un nouvel utilisateur */
  @Public()
  @Post('register')
  @ApiOperation({
    summary: 'Register a new user',
    description: 'Enregistrer un nouvel utilisateur',
  })
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  /** Route pour récupérer l'ensemble des utilisateurs */
  @Get()
  @ApiOperation({
    summary: 'Récupérer tout les utilisateur',
    description: 'Récupérer l\'ensemble des utilisateurs',
  })
  @ApiResponse({
    status: 200,
    description: 'Liste des utilisateurs',
  })
  getUsers() {
    return this.usersService.findAllUsers();
  }
}
