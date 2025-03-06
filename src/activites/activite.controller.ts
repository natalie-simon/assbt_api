import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateActiviteDto } from './dtos/create-activite.dto';
import { ActiviteService } from './services/activite.service';
import { AuthTypes } from '../auth/enums/auth-types.enum';
import { Auth } from '../auth/decorators/auth.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { RoleTypes } from '../auth/enums/role-types.enum';

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
  @Roles(RoleTypes.ADMIN)
  @ApiOperation({ summary: 'Récupération de toutes les activités' })
  @ApiResponse({
    status: 200,
    description: 'Liste de toutes les activités',
  })
  public async findAllActivites() {
    return this.activiteService.findAllActivites();
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
}
