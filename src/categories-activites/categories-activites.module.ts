import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorieActiviteController } from './categorie-activite.controller';
import { UploadToAwsProvider } from 'src/uploads/services/upload-to-aws.provider';
import { UploadService } from 'src/uploads/services/upload.service';
import { CategorieActiviteService} from './services/categorie-activite.service';
import { CategorieActivite } from '../database/core/categorie_activite.entity';
import { Upload } from '../database/core/upload.entity';


@Module({
  controllers: [CategorieActiviteController],
  providers: [CategorieActiviteService, UploadService, UploadToAwsProvider],
  imports: [TypeOrmModule.forFeature([CategorieActivite, Upload])],
  exports: [CategorieActiviteService],
})
export class CategoriesActivitesModule {}
