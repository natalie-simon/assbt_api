import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  ParseIntPipe,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateActiviteDto } from './dtos/create-activite.dto';
import { ActiviteService } from './services/activite.service';
import { AuthTypes } from '../auth/enums/auth-types.enum';
import { Auth } from '../auth/decorators/auth.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { RoleTypes } from '../auth/enums/role-types.enum';
import { ActiveUser } from '../auth/decorators/active-user.decorator';
import { ActiveUserData } from '../auth/interfaces/active-user-data.interface';
import { InscriptionActiviteDto } from './dtos/inscription-activite.dto';

/**
 * Contrôleur des Activités
 * Gestion des routes liées aux Activités
 */
@Controller('activites')
@ApiTags('activites')
export class ActiviteController {
  /**
   * Constructeur
   * @param activiteService
   */
  constructor(private readonly activiteService: ActiviteService) {}

  /**
   * Récupération de toutes les activités
   * @returns
   */
  @Get()
  @Auth(AuthTypes.Bearer)
  @ApiOperation({ summary: 'Récupération de toutes les activités' })
  @ApiResponse({
    status: 200,
    description: 'Liste de toutes les activités',
  })
  public async findAllActivites() {
    return this.activiteService.findAllActivites();
  }

  /**
   * Récupération d'une activité avec filtres possibles
   * @param id
   * @param participants
   * @returns
   */
  @Get(':id')
  @Auth(AuthTypes.Bearer)
  @ApiOperation({
    summary: "Récupération d'une activité avec filtres possibles",
  })
  @ApiResponse({
    status: 200,
    description: "Détails de l'activité",
  })
  public async findOneActiviteWithFilters(
    @Param('id') id: number,
    @Query('participants') participants?: boolean,
  ) {
    return this.activiteService.findOneActiviteWithFilters(id, participants);
  }

  /**
   * Création d'une activité
   * @param createActiviteDto
   * @returns
   */
  @Post('create')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.ADMIN)
  @ApiOperation({ summary: "Création d'une activité" })
  @ApiResponse({
    status: 201,
    description: "L'activité a été créée avec succès",
  })
  public async createActivite(@Body() createActiviteDto: CreateActiviteDto) {
    return this.activiteService.createActivite(createActiviteDto);
  }

  /**
   * inscription d'un utilisateur à une activité
   * @param id
   * @param inscriptionActiviteDto
   * @param user
   * @returns
   */
  @Post(':id/inscription')
  @Auth(AuthTypes.Bearer)
  @ApiOperation({ summary: "Inscription d'un utilisateur à une activité" })
  @ApiResponse({
    status: 201,
    description: "L'inscription a été créée avec succès",
  })
  public async inscriptionActivite(
    @Param('id', ParseIntPipe) id: number,
    @Body() inscriptionActiviteDto: InscriptionActiviteDto,
    @ActiveUser() user: ActiveUserData,
  ) {
    return this.activiteService.inscriptionActivite(
      id,
      inscriptionActiviteDto,
      user,
    );
  }

  /**
   * désinscription d'une activité
   * @param id
   * @param user
   * @returns
   */
  @Put(':id/desinscription')
  @Auth(AuthTypes.Bearer) // On protège la route avec le token Beare
  @ApiOperation({ summary: "Se désinscrire d'une activité" })
  @ApiResponse({
    status: 200,
    description: "L'inscription a été supprimée avec succès",
  })
  public async desinscriptionActivite(
    @Param('id', ParseIntPipe) id: number,
    @ActiveUser() user: ActiveUserData,
  ) {
    return this.activiteService.desinscriptionActivite(id, user);
  }

  @Put(':id')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.ADMIN)
  @ApiOperation({ summary: 'Mettre à jour une activité' })
  @ApiResponse({
    status: 200,
    description: "L'activité a été mise à jour avec succès",
  })
  public async updateActivite(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateActiviteDto: CreateActiviteDto,
  ) {
    return this.activiteService.updateActivite(id, updateActiviteDto);
  }

  @Delete(':id')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.ADMIN)
  @ApiOperation({ summary: 'Supprimer une activité' })
  @ApiResponse({
    status: 200,
    description: "L'activité a été supprimée avec succès",
  })
  public async deleteActivite(@Param('id', ParseIntPipe) id: number) {
    return this.activiteService.deleteActivite(id);
  }
}
