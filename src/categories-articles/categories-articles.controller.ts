import {
  Controller,
  Get,
  Post,
  Body,
} from "@nestjs/common";
import { CatetogiesArticlesService } from './services/categories-articles.services';
import { CreateCategorieArticleDto } from "./dtos/create-categorie-article.dto";
import { Public } from "../auth/decorators/public.decorators";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";


/**
 * Controller des catégories d'articles
 */
@Controller('categories-articles')
@ApiTags('categories-articles')
export class CategoriesArticlesController {
  /**
   * Constructeur
   * @param categoriesArticles
   */
  constructor(private readonly categoriesArticles: CatetogiesArticlesService) {}

  /**
   * Récupérer la liste des catégories d'articles
   *
   * @return {*}
   * @memberof CategoriesArticlesController
   */
  @Public()
  @Get()
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
  @Public()
  @Post('create')
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