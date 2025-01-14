import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Delete,
} from '@nestjs/common';
import { CreateAccueilDto } from 'src/accueils/dtos/accueil.dtos';
import { AccueilsService } from 'src/accueils/services/accueils.service';
import { Public } from 'src/auth/decorators/public.decorators';

/**
 * Accueils controller
 * Controlleur pour les routes liées aux accueils
 * Cela correpond aux informations de la page d'accueil de l'application
 */
@Controller('accueils')
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
  @Public()
  @Get()
  getAccueils() {
    return this.accueilsService.findAllAccueil();
  }

  /**
   * Route pour récupérer un accueil par son id
   * @param id Un Entier correspondant à l'id de l'accueil
   * @returns 
   */
  @Public()
  @Get(':id')
  findAccueilById(@Param('id', ParseIntPipe) id: number) {
    return this.accueilsService.findAccueilById(id);
  }

  /**
   * Route pour créer un nouvel accueil
   * @param createAccueilDto La BTO correspondant à la création d'un accueil
   * @returns
   */
  @Post('create')
  createAccueils(@Body() createAccueilDto: CreateAccueilDto) {
    return this.accueilsService.createAccueil(createAccueilDto);
  }

  /**
   * Route pour supprimer un acc
   * @param id Un entier correspondant à l'id de l'accueil à supprimer
   * @returns
   */
  @Delete('delete/:id')
  deleteAccueil(@Param('id', ParseIntPipe) id: number) {
    return this.accueilsService.deleteAccueilById(id);
  }
}
