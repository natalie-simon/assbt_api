import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Delete,
} from '@nestjs/common';
import { CreateAccueilDto } from '../accueils/dtos/accueil.dtos';
import { AccueilsService } from '../accueils/services/accueils.service';
//import { Public } from '../auth/decorators/public.decorators';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

/**
 * Accueils controller
 * Controlleur pour les routes liées aux accueils
 * Cela correpond aux informations de la page d'accueil de l'application
 */
@Controller('accueils')
@ApiTags('accueils')
export class AccueilsController {
  /**
   * Constructeur
   * @param accueilsService Le service AccueilsService
   */
  constructor(private readonly accueilsService: AccueilsService) {}

  /**
   * Route pour récupérer l'ensemble des accueils
   * @returns
   */
  //@Public()
  @Get()
  @ApiOperation({ summary: 'Liste des accueils' })
  @ApiResponse({ status: 200, description: 'Un tableau comportant la liste des Accueils' })
  getAccueils() {
    return this.accueilsService.findAllAccueil();
  }

  /**
   * Route pour récupérer un accueil par son id
   * @param id Un Entier correspondant à l'id de l'accueil
   * @returns
   */
  @ApiOperation({ summary: 'Récupérer un accueil par son id' })
  @ApiResponse({ status: 200, description: 'Un accueil' })
  //@Public()
  @Get(':id')
  findAccueilById(@Param('id', ParseIntPipe) id: number) {
    return this.accueilsService.findAccueilById(id);
  }

  /**
   * Route pour créer un nouvel accueil
   * @param createAccueilDto La BTO correspondant à la création d'un accueil
   * @returns
   */
  @ApiOperation({ summary: 'Créer un accueil' })
  @ApiResponse({ status: 201, description: "L'Accueil créé" })
  @Post('create')
  createAccueils(@Body() createAccueilDto: CreateAccueilDto) {
    return this.accueilsService.createAccueil(createAccueilDto);
  }

  /**
   * Route pour supprimer un acc
   * @param id Un entier correspondant à l'id de l'accueil à supprimer
   * @returns
   */
  @ApiOperation({ summary: 'Supprimer un accueil' })
  @ApiResponse({ status: 200, description: "" })
  @Delete('delete/:id')
  deleteAccueil(@Param('id', ParseIntPipe) id: number) {
    return this.accueilsService.deleteAccueilById(id);
  }
}
