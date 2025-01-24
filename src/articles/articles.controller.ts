import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { ArticlesService } from './services/articles.service';
import { CreateArticleDto } from './dtos/create-article.dto';
import { Public } from '../auth/decorators/public.decorators';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

/**
 * Contrôleur des Articles
 * Gestion des routes liées aux Articles
 */
@Controller('articles')
@ApiTags('articles')
export class ArticlesController {
  /**
   * Constructeur
   * @param articlesService
   */
  constructor(private readonly articlesService: ArticlesService) {}

  /**
   * Récupération de tout les articles existants dans l'applications
   * @returns
   */
  @Public()
  @Get()
  @ApiOperation({ summary: 'Liste des articles' })
  @ApiResponse({ status: 200, description: 'Un tableau comportant la liste des Articles' })
  getArticles() {
    return this.articlesService.findAllArticles();
  }

  /**
   * Récupération d'un article par son id
   * @param id
   * @returns
   */
  @ApiOperation({ summary: 'Récupérer un article par son id' })
  @ApiResponse({ status: 200, description: 'Un article' })
  @Public()
  @Get(':id')
  findArticleById(@Param('id', ParseIntPipe) id: number) {
    return this.articlesService.findArticleById(id);
  }

  /**
   * Création d'un nouvel article
   * @param createArticleDto
   * @returns
   */
  @Public()
  @ApiOperation({ summary: 'Créer un article' })
  @ApiResponse({ status: 201, description: "L'Article créé" })
  @Post('create')
  createArticle(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.createArticle(createArticleDto);
  }

  /**
   * Suppresion d'un article par son id
   * @param id
   * @returns
   */
  @ApiOperation({ summary: 'Supprimer un article par son id' })
  @ApiResponse({ status: 200, description: "L'Article supprimé" })
  @Delete(':id')
  deleteArticleById(@Param('id', ParseIntPipe) id: number) {
    return this.articlesService.deleteArticleById(id);
  }

}