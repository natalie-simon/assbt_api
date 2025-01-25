import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './services/articles.service';
import { Article } from './article.entity';
import { UsersModule } from '../users/users.module';
import { StatutsModule } from '../statuts/statuts.module';
import { CategoriesArticlesModule } from '../categories-articles/categories-articles.modules';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [UsersModule, StatutsModule, CategoriesArticlesModule, TypeOrmModule.forFeature([Article])],
})
export class ArticlesModule {}