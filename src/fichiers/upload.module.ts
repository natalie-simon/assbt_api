import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fichier } from '../database/core/fichier.entity';
import { FichierService } from './services/fichier.service';
import { UploadToO2SwitchProvider } from './providers/upload-to-o2switch.provider';

@Module({
  imports: [TypeOrmModule.forFeature([Fichier])],
  providers: [FichierService, UploadToO2SwitchProvider],
  exports: [FichierService, UploadToO2SwitchProvider],
})
export class UploadModule {} 