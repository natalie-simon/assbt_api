import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { FichierService } from './services/fichier.service';
import { Fichier } from '../database/core/fichier.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadToAwsProvider } from './services/upload-to-aws.provider';

@Module({
  controllers: [UploadsController],
  providers: [FichierService, UploadToAwsProvider],
  imports: [TypeOrmModule.forFeature([Fichier])],
})
export class FichiersModule {}
