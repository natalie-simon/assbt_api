import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dtos/createuser.dto';
import { UsersService } from './services/users.service';
//import { Public } from '../auth/decorators/public.decorators';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


/**
 * Users controller
 * Controlleur pour les routes liées aux utilisateurs
 */
@Controller('membres')
@ApiTags('membres')
export class UsersController {
  /**
   * Constructeur
   * @param usersService Le service UsersService
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * Route pour la création d'un nouvel utilisateur
   * @param createUserDto La DTO correspondant à la création d'un utilisateur
   * @returns
   */
  //@Public()
  @Post('register')
  @ApiOperation({
    summary: "Création d'un nouvel utilisateur",
    description: 'Enregistrer un nouvel utilisateur',
  })
  registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.usersService.createUser(createUserDto);
  }

  /**
   * Route pour la récupérer l'ensemble des utilisateurs
   * @returns
   */
  @Get()
  @ApiOperation({
    summary: 'Récupérer tout les utilisateurs',
    description: "Récupérer l'ensemble des utilisateurs",
  })
  @ApiResponse({
    status: 200,
    description: 'Un tableau comportant la liste des utilisateurs',
  })
  getUsers() {
    return this.usersService.findAllUsers();
  }
}
