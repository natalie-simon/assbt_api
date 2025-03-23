import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './services/articles.service';
import { Article } from '../database/core/article.entity';
import { MembresModule } from '../membres/membres.module';
import { FichierService } from '../fichiers/services/fichier.service';
import { UploadToAwsProvider } from '../fichiers/services/upload-to-aws.provider';
import { Fichier } from '../database/core/fichier.entity';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, FichierService, UploadToAwsProvider],
  imports: [MembresModule, TypeOrmModule.forFeature([Article, Fichier])],
})
export class ArticlesModule {}