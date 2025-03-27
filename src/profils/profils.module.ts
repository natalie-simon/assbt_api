import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilsController } from './profils.controller';
import { ProfilsService } from './services/profils.service';
import { Profil } from '../database/core/profil.entity';
import { MembresModule } from '../membres/membres.module';
import { FichierService } from '../fichiers/services/fichier.service';
import { Fichier } from '../database/core/fichier.entity';
import { UploadModule } from '../fichiers/upload.module';
import { CategorieActiviteUploadService } from 'src/categories-activites/services/categorie-activite-upload.service';
import { Membre } from 'src/database/core/membre.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Profil, Fichier, Membre]),
    MembresModule,
    UploadModule
  ],
  controllers: [ProfilsController],
  providers: [ProfilsService, CategorieActiviteUploadService, FichierService],
  exports: [ProfilsService],
})
export class ProfilsModule {}

