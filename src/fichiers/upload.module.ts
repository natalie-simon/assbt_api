import { Module } from '@nestjs/common';
import { FichierService } from './services/fichier.service';
import { UploadToO2SwitchProvider } from './providers/upload-to-o2switch.provider';

@Module({
  providers: [FichierService, UploadToO2SwitchProvider],
  exports: [FichierService, UploadToO2SwitchProvider],
})
export class UploadModule {}
