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
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthTypes } from '../auth/enums/auth-types.enum';
import { Auth } from '../auth/decorators/auth.decorator';
import { ActiveUser } from '../auth/decorators/active-user.decorator';
import { ActiveUserData } from '../auth/interfaces/active-user-data.interface';
import { RoleTypes } from '../auth/enums/role-types.enum';
import { Roles } from '../auth/decorators/roles.decorator';

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
  //@Public()
  @Get()
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.Admin)
  @ApiOperation({ summary: 'Liste des articles' })
  @ApiResponse({
    status: 200,
    description: 'Un tableau comportant la liste des Articles',
  })
  getArticles() {
    return this.articlesService.findAllArticles();
  }

  /**
   * Récupération d'un article par son id
   * @param id
   * @returns
   */
  @Get(':id')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.Admin)
  @ApiOperation({ summary: 'Récupérer un article par son id' })
  @ApiResponse({ status: 200, description: 'Un article' })
  findArticleById(@Param('id', ParseIntPipe) id: number) {
    return this.articlesService.findArticleById(id);
  }

  /**
   * Création d'un nouvel article
   * @param createArticleDto
   * @returns
   */
  //@Public()
  @Post('create')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.Admin)
  @ApiOperation({ summary: 'Créer un article' })
  @ApiResponse({ status: 201, description: "L'Article créé" })
  createArticle(
    @Body() createArticleDto: CreateArticleDto,
    @ActiveUser() user: ActiveUserData,
  ) {
    return this.articlesService.createArticle(createArticleDto, user);
  }

  /**
   * Suppresion d'un article par son id
   * @param id
   * @returns
   */
  /*@ApiOperation({ summary: 'Supprimer un article par son id' })
  @ApiResponse({ status: 200, description: "L'Article supprimé" })
  @Delete(':id')
  deleteArticleById(@Param('id', ParseIntPipe) id: number) {
    return this.articlesService.deleteArticleById(id);
  }*/

  /**
   * Récupération des articles d'une catégorie
   * @param id
   * @returns
   */
  @Get('categorie/:id')
  @Auth(AuthTypes.None)
  @ApiOperation({
    summary: "Récupération de tout les articles d'une catégorie",
  })
  @ApiResponse({
    status: 200,
    description: 'Un tableau comportant la liste des Articles',
  })
  public async findArticlesByCategorie(@Param('id', ParseIntPipe) id: number) {
    return this.articlesService.findArticleByCategorie(id);
  }
}
