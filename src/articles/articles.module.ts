import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './services/articles.service';
import { Article } from '../database/core/article.entity';
import { MembresModule } from '../membres/membres.module';
import { UploadService } from '../uploads/services/upload.service';
import { UploadToAwsProvider } from '../uploads/services/upload-to-aws.provider';
import { Upload } from '../database/core/upload.entity';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, UploadService, UploadToAwsProvider],
  imports: [MembresModule, TypeOrmModule.forFeature([Article, Upload])],
})
export class ArticlesModule {}