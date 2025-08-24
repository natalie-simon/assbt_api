import { Module } from '@nestjs/common';
import { CategorieActiviteService } from './services/categorie-activite.service';
import { CategorieActiviteController } from './categorie-activite.controller';
import { CategorieActiviteUploadService } from './services/categorie-activite-upload.service';
import { UploadModule } from '../fichiers/upload.module';

@Module({
  imports: [UploadModule],
  controllers: [CategorieActiviteController],
  providers: [CategorieActiviteService, CategorieActiviteUploadService],
  exports: [CategorieActiviteService],
})
export class CategoriesActivitesModule {}
