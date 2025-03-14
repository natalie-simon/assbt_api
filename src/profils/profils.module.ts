import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { ProfilsController } from './profils.controller';
//import { ProfilsService } from './services/profils.service';
//import { Profil } from '../database/core/profil.entity';
import { MembresModule } from '../membres/membres.module';
import { UploadService } from '../uploads/services/upload.service';
import { UploadToAwsProvider } from '../uploads/services/upload-to-aws.provider';
import { Upload } from '../database/core/upload.entity';

