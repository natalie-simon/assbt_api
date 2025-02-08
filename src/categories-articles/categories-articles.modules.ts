import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriesArticlesController } from './categories-articles.controller';
import { CategoriesArticlesService } from './services/categories-articles.services';
import { CategorieArticle } from "../database/core/categorie-article.entity";

@Module({
  controllers: [CategoriesArticlesController],
  providers: [CategoriesArticlesService],
  imports: [TypeOrmModule.forFeature([CategorieArticle])],
  exports: [CategoriesArticlesService],
})
export class CategoriesArticlesModule {}