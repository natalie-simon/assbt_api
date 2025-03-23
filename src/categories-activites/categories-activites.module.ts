import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorieActiviteController } from './categorie-activite.controller';
import { UploadToAwsProvider } from '../fichiers/services/upload-to-aws.provider';
import { FichierService } from '../fichiers/services/fichier.service';
import { CategorieActiviteService} from './services/categorie-activite.service';
import { CategorieActivite } from '../database/core/categorie_activite.entity';
import { Fichier } from '../database/core/fichier.entity';


@Module({
  controllers: [CategorieActiviteController],
  providers: [CategorieActiviteService, FichierService, UploadToAwsProvider],
  imports: [TypeOrmModule.forFeature([CategorieActivite, Fichier])],
  exports: [CategorieActiviteService],
})
export class CategoriesActivitesModule {}
