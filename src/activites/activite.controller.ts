import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateActiviteDto } from './dtos/create-activite.dto';
import { ActiviteService } from './services/activite.service';
import { AuthTypes } from 'src/auth/enums/auth-types.enum';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RoleTypes } from 'src/auth/enums/role-types.enum';

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
