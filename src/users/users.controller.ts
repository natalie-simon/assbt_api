import { Body, Controller, Post, Get, UseGuards, SetMetadata } from '@nestjs/common';
import { CreateUserDto } from './dtos/createuser.dto';
import { UsersService } from './services/users.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Auth } from '../auth/decorators/auth.decorator';
import { AuthTypes } from '../auth/enums/auth-types.enum';
import { RoleTypes } from '../auth/enums/role-types.enum';
import { Roles } from '../auth/decorators/roles.decorator';


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
  @Auth(AuthTypes.None)
  @ApiOperation({
    summary: "Création d'un nouvel utilisateur",
    description: 'Enregistrer un nouvel utilisateur',
  })
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  /**
   * Route pour la récupérer l'ensemble des utilisateurs
   * @returns
   */
  @Get()
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.Admin)
  @ApiOperation({
    summary: 'Récupérer tout les utilisateurs',
    description: "Récupérer l'ensemble des utilisateurs",
  })
  @ApiResponse({
    status: 200,
    description: 'Un tableau comportant la liste des utilisateurs',
  })
  @ApiBearerAuth()
  getUsers() {
    return this.usersService.findAllUsers();
  }

}

