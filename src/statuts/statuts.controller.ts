import {
  Controller,
  Get,
  Body,
  Post,
} from '@nestjs/common';
import { StatutsService } from './services/statuts.service';
import { CreateStatutDto } from './dtos/create-statut.dto';
//import { Public } from '../auth/decorators/public.decorators';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

/**
 * Contrôleur des Statuts
 * Gestion des routes liées aux Statuts
 */
@Controller('statuts')
@ApiTags('statuts')
export class StatutsController {
  /**
   * Constructeur
   * @param statutsService Le service des Statuts
   */
  constructor(private readonly statutsService: StatutsService) {}

  /**
   * Récupération de tout les statuts existants dans l'applications
   * @returns
   */
  //@Public()
  @Get()
  @ApiOperation({ summary: 'Liste des statuts' })
  @ApiResponse({
    status: 200,
    description: 'Un tableau comportant la liste des Statuts',
  })
  getStatuts() {
    return this.statutsService.findAllStatut();
  }

  /**
   * Création d'un nouveau statut
   * @param createStatutDto
   * @returns
   */
  //@Public()
  @Post('create')
  @ApiOperation({ summary: 'Créer un statut' })
  @ApiResponse({ status: 201, description: 'Le Statut créé' })
  createStatut(@Body() createStatutDto: CreateStatutDto) {
    return this.statutsService.createStatut(createStatutDto);
  }
}