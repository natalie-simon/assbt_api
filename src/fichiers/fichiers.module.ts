import { Module } from '@nestjs/common';
import { FichierService } from './services/fichier.service';
import { UploadsController } from './uploads.controller';
import { UploadToO2SwitchProvider } from './providers/upload-to-o2switch.provider';

@Module({
  controllers: [UploadsController],
  providers: [FichierService, UploadToO2SwitchProvider],
  exports: [FichierService],
})
export class FichiersModule {}
