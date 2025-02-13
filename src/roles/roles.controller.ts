import { Controller, Get, Body, Post } from '@nestjs/common';
import { RolesService } from './services/roles.service';
import { CreateRoleDto } from './dtos/create-role.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from '../auth/decorators/roles.decorator';
import { RoleTypes } from '../auth/enums/role-types.enum';
import { AuthTypes } from 'src/auth/enums/auth-types.enum';
import { Auth } from 'src/auth/decorators/auth.decorator';


/**
 * RolesController
 * Controlleur pour les routes liées aux roles
 */
@Controller('roles')
@ApiTags('roles')
export class RolesController {
  /**
   * Constructeur
   * @param rolesService Le service RolesService
   */
  constructor(private readonly rolesService: RolesService) {}

  /**
   * Route pour récupérer la liste des roles
   * @returns
   */
  @Get()
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.Admin)
  @ApiOperation({ summary: 'Liste des roles' })
  @ApiResponse({
    status: 200,
    description: 'Un tableau comportant la liste des Roles',
  })
  getRoles() {
    return this.rolesService.findAllRole();
  }

  /**
   * Route pour la création d'un role
   * @param createRoleDto La DTO correspondant à la création d'un role
   * @returns
   */
  @Post('create')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.Admin)
  @ApiOperation({ summary: 'Créer un role' })
  @ApiResponse({ status: 201, description: 'Le Role créé' })
  createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.createRole(createRoleDto);
  }
}
