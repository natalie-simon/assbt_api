import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Param,
  Query,
  ClassSerializerInterceptor,
  UseInterceptors,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/createMembre.dto';
import { ContactDto } from './dtos/contact.dto';
import { MembresService } from './services/membres.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Auth } from '../auth/decorators/auth.decorator';
import { AuthTypes } from '../auth/enums/auth-types.enum';
import { RoleTypes } from '../auth/enums/role-types.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { ActiveUserData } from 'src/auth/interfaces/active-user-data.interface';
import { ActiveUser } from '../auth/decorators/active-user.decorator';
import { UpdateMembreDto } from './dtos/updateMembre.dto';

/**
 * Users controller
 * Controlleur pour les routes liées aux utilisateurs
 */
@Controller('membres')
@ApiTags('membres')
export class MembresController {
  /**
   * Constructeur
   * @param membreService Le service UsersService
   */
  constructor(private readonly membreService: MembresService) {}

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
    return this.membreService.createUser(createUserDto);
  }

  @Post('contact')
  @Auth(AuthTypes.None)
  @ApiOperation({
    summary: 'Contactez-nous',
    description: 'Contactez-nous via le formulaire de contact',
  })
  contact(@Body() contactDto: ContactDto) {
    return this.membreService.contact(contactDto);
  }

  /**
   * Route pour la récupérer l'ensemble des utilisateurs
   * @returns
   */
  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.ADMIN)
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
    return this.membreService.findAllUsers();
  }

  /**
   * Route de récupération du profil de l'utilisateur connecté avec filtres possibles
   * @param activeUser
   * @param activites
   * @returns
   */
  @Get('infos')
  @Auth(AuthTypes.Bearer)
  @ApiOperation({ summary: 'Récupérer un utilisateur par son id' })
  @ApiResponse({ status: 200, description: 'Un utilisateur' })
  public async findUserByIdWithFilters(
    @ActiveUser() activeUser: ActiveUserData,
    @Query('activites') activites?: boolean,
  ) {
    return this.membreService.findProfileByUserIdWithFilters(
      activeUser.sub,
      activites,
    );
  }

  /**
   * Récupération des statistiques membres
   * @param activeUser
   * @returns
   */
  @Get('dashboard/statistiques')
  @Auth(AuthTypes.Bearer)
  @ApiOperation({
    summary: 'Récupérer les différents compteurs stats du membre connecté',
  })
  @ApiResponse({ status: 200, description: 'Les données' })
  public async getDashboardStatistiques(
    @ActiveUser() activeUser: ActiveUserData,
  ) {
    return this.membreService.statistiques(activeUser.sub);
  }

  /**
   * Récupération des statistiques membres
   * @param activeUser
   * @returns
   */
  @Get('dashboard/compteurs')
  @Auth(AuthTypes.Bearer)
  @ApiOperation({ summary: 'Récupérer différents compteurs' })
  @ApiResponse({ status: 200, description: 'Les données' })
  public async getDashboardCompteurs(@ActiveUser() activeUser: ActiveUserData) {
    return this.membreService.compteurs(activeUser.sub);
  }

  @Put(':id/admin')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.ADMIN)
  @ApiOperation({ summary: "Modification d'un utilisateur" })
  @ApiResponse({ status: 200, description: 'Utilisateur modifié' })
  async updateUser(
    @Param('id') id: number,
    @Body() updateUser: UpdateMembreDto,
  ) {
    const membre = this.membreService.findUserById(id);

    if (!membre) {
      throw new NotFoundException(`Utilsateur avec l'id ${id} non trouvé`);
    }

    return this.membreService.updateAdmin(id, updateUser);
  }

  /**
   * Route pour la récupération d'un utilisateur par son id
   * @param id
   * @returns
   */
  @Put(':id/desactiver')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.ADMIN)
  @ApiOperation({ summary: 'Désactiver un utilisateur' })
  @ApiResponse({ status: 200, description: 'Utilisateur désactivé' })
  async desactiverUser(@Param('id') id: string) {
    return this.membreService.desactiverUser(+id);
  }

  /**
   * Route pour la récupération d'un utilisateur par son id
   * @param id
   * @returns
   */
  @Put(':id/restorer')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.ADMIN)
  @ApiOperation({ summary: 'Désactiver un utilisateur' })
  @ApiResponse({ status: 200, description: 'Utilisateur désactivé' })
  async restorerUser(@Param('id') id: string) {
    return this.membreService.restorerUser(+id);
  }
}
