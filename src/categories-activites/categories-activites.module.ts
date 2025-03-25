import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorieActivite } from '../database/core/categorie_activite.entity';
import { Fichier } from '../database/core/fichier.entity';
import { CategorieActiviteService } from './services/categorie-activite.service';
import { CategorieActiviteController } from './categorie-activite.controller';
import { CategorieActiviteUploadService } from './services/categorie-activite-upload.service';
import { UploadModule } from '../fichiers/upload.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategorieActivite, Fichier]),
    UploadModule,
  ],
  controllers: [CategorieActiviteController],
  providers: [
    CategorieActiviteService,
    CategorieActiviteUploadService,
  ],
  exports: [CategorieActiviteService],
})
export class CategoriesActivitesModule {}
