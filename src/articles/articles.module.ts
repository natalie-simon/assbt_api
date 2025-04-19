import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './services/articles.service';
import { MembresModule } from '../membres/membres.module';
import { FichierService } from '../fichiers/services/fichier.service';
import { UploadToAwsProvider } from '../fichiers/services/upload-to-aws.provider';
import { UploadModule } from '../fichiers/upload.module';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, FichierService, UploadToAwsProvider],
  imports: [
    MembresModule,
    UploadModule,
  ],
  exports: [ArticlesService],
})
export class ArticlesModule {}