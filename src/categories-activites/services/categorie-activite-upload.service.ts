import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fichier } from '../../database/core/fichier.entity';
import { Express } from 'express';
import { UploadToO2SwitchProvider } from '../../fichiers/providers/upload-to-o2switch.provider';

@Injectable()
export class CategorieActiviteUploadService {
  constructor(
    @InjectRepository(Fichier)
    private fichierRepository: Repository<Fichier>,
    private uploadProvider: UploadToO2SwitchProvider,
  ) {}

  async uploadFile(file: Express.Multer.File): Promise<Fichier> {
    const fichier = await this.uploadProvider.uploadFile(file);
    return this.fichierRepository.save(fichier);
  }
} 