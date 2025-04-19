import { Module } from '@nestjs/common';
import { ProfilsController } from './profils.controller';
import { ProfilsService } from './services/profils.service';
import { MembresModule } from '../membres/membres.module';
import { FichierService } from '../fichiers/services/fichier.service';
import { UploadModule } from '../fichiers/upload.module';
import { CategorieActiviteUploadService } from 'src/categories-activites/services/categorie-activite-upload.service';
@Module({
  imports: [
    MembresModule,
    UploadModule
  ],
  controllers: [ProfilsController],
  providers: [ProfilsService, CategorieActiviteUploadService, FichierService],
  exports: [ProfilsService],
})
export class ProfilsModule {}

