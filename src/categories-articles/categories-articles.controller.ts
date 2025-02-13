import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
} from "@nestjs/common";
import { CategoriesArticlesService } from './services/categories-articles.services';
import { CreateCategorieArticleDto } from "./dtos/create-categorie-article.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Roles } from "../auth/decorators/roles.decorator";
import { RoleTypes } from "../auth/enums/role-types.enum";
import { AuthTypes } from "../auth/enums/auth-types.enum";
import { Auth } from "../auth/decorators/auth.decorator";

/**
 * Controller des catégories d'articles
 */
@Controller('categories-articles')
@Roles(RoleTypes.Admin)
@ApiTags('categories-articles')
export class CategoriesArticlesController {
  /**
   * Constructeur
   * @param categoriesArticles
   */
  constructor(private readonly categoriesArticles: CategoriesArticlesService) {}

  /**
   * Récupérer la liste des catégories d'articles
   *
   * @return {*}
   * @memberof CategoriesArticlesController
   */
  //@Public()
  @Get()
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.Admin, RoleTypes.Redac)
  @ApiOperation({ summary: "Liste des catégories d'articles" })
  @ApiResponse({
    status: 200,
    description: "Un tableau comportant la liste des catégories d'articles",
  })
  getCategoriesArticles() {
    return this.categoriesArticles.findAllCategorieArticle();
  }

  /**
   * Création d'une catégorie d'articles
   * @param createCategorieArticleDto
   * @returns
   */
  //@Public()
  @Post('create')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.Admin)
  @ApiOperation({ summary: "Créer une catégorie d'articles" })
  @ApiResponse({ status: 201, description: "La catégorie d'articles créée" })
  createCategorieArticle(
    @Body() createCategorieArticleDto: CreateCategorieArticleDto,
  ) {
    return this.categoriesArticles.createCategorieArticle(
      createCategorieArticleDto,
    );
  }
}