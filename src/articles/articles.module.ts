import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './services/articles.service';
import { Article } from '../database/core/article.entity';
import { UsersModule } from '../users/users.module';
import { StatutsModule } from '../statuts/statuts.module';
import { CategoriesArticlesModule } from '../categories-articles/categories-articles.modules';
import { UploadService } from '../uploads/services/upload.service';
import { UploadToAwsProvider } from 'src/uploads/services/upload-to-aws.provider';
import { Upload } from '../database/core/upload.entity';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, UploadService, UploadToAwsProvider],
  imports: [UsersModule, StatutsModule, CategoriesArticlesModule, TypeOrmModule.forFeature([Article, Upload])],
})
export class ArticlesModule {}