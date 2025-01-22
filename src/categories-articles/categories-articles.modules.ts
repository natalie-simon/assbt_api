import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriesArticlesController } from './categories-articlescontroller';
import { CatetogiesArticlesService } from "./services/categories-articles.services";
import { CategorieArticle } from "./categorie-article.entity";

@Module({
  controllers: [CategoriesArticlesController],
  providers: [CatetogiesArticlesService],
  imports: [TypeOrmModule.forFeature([CategorieArticle])],
  exports: [CatetogiesArticlesService],
})
export class CategoriesArticlesModule {}