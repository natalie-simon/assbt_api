import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './services/articles.service';
import { Article } from 'src/articles/article.entity';
import { UsersModule } from 'src/users/users.module';
import { StatutsModule } from 'src/statuts/statuts.module';
import { CategoriesArticlesModule } from 'src/categories-articles/categories-articles.modules';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [UsersModule, StatutsModule, CategoriesArticlesModule, TypeOrmModule.forFeature([Article])],
})
export class ArticlesModule {}