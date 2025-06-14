import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';

import { ArticlesService } from './services/articles.service';
import { CreateArticleDto } from './dtos/create-article.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiHeaders,
} from '@nestjs/swagger';
import { AuthTypes } from '../auth/enums/auth-types.enum';
import { Auth } from '../auth/decorators/auth.decorator';
import { ActiveUser } from '../auth/decorators/active-user.decorator';
import { ActiveUserData } from '../auth/interfaces/active-user-data.interface';
import { RoleTypes } from '../auth/enums/role-types.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { FichierService } from '../fichiers/services/fichier.service';
import { categorieArticleTypes } from './enums/categorie-article-types.enum';
import { ConditionalAuth } from '../auth/decorators/conditional-auth.decorator';

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
  constructor(
    private readonly articlesService: ArticlesService,
    private readonly fichierService: FichierService,
  ) {}

  /**
   * Récupération de tout les articles existants dans l'applications
   * @returns
   */
  //@Public()
  @Get()
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.ADMIN)
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
  @Roles(RoleTypes.ADMIN)
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
  @Roles(RoleTypes.ADMIN)
  @UseInterceptors(FileInterceptor('fichier'))
  @ApiHeaders([
    { name: 'Content-Type', description: 'multipart/form-data' },
    { name: 'Authorization', description: 'Bearer Token' },
  ])
  @ApiOperation({ summary: 'Créer un article' })
  @ApiResponse({ status: 201, description: "L'Article créé" })
  public async createArticle(
    @Body() createArticleDto: CreateArticleDto,
    @UploadedFile() file: Express.Multer.File,
    @ActiveUser() user: ActiveUserData,
  ) {
    let imageId = null;
    if (file) {
      const image = await this.fichierService.uploadFile(file);
      imageId = image.id; // On récupère seulement l'id
    }
    return this.articlesService.createArticle(createArticleDto, user, imageId);
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
  @Get('categorie/:categorie')
  @ConditionalAuth((req) => {
    const categorieSansAuth = 'accueil'; // Modifier selon besoin
    return req.params?.categorie === categorieSansAuth
      ? AuthTypes.None
      : AuthTypes.Bearer;
  })
  @ApiOperation({
    summary:
      "Récupération de tout les articles d'une catégorie qui sont au statut 'publie'",
  })
  @ApiResponse({
    status: 200,
    description: 'Un tableau comportant la liste des Articles',
  })
  public async findArticlesByCategorie(
    @Param('categorie') categorie: categorieArticleTypes,
  ) {
    return this.articlesService.findArticlePublieByCategorie(categorie);
  }
}

