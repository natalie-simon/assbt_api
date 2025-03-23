import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfilsController } from './profils.controller';
import { ProfilsService } from './services/profils.service';
import { Profil } from '../database/core/profil.entity';
import { MembresModule } from '../membres/membres.module';
import { FichierService } from '../fichiers/services/fichier.service';
import { UploadToAwsProvider } from '../fichiers/services/upload-to-aws.provider';
import { Fichier } from '../database/core/fichier.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profil, Fichier]),
    MembresModule,
  ],
  controllers: [ProfilsController],
  providers: [ProfilsService, FichierService, UploadToAwsProvider],
  exports: [ProfilsService],
})
export class ProfilsModule {}

