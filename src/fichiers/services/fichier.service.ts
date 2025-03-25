import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fichier } from '../../database/core/fichier.entity';
import { Repository } from 'typeorm';
import { UploadToO2SwitchProvider } from '../providers/upload-to-o2switch.provider';
import { ConfigService } from '@nestjs/config';
import { UploadFile } from '../interfaces/upload-file.interface';
import { fileTypes } from '../enums/file-types.enum';

/**
 * Service de gestion des uploads
 */
@Injectable()
export class FichierService {
  /**
   * Constructeur
   * @param uploadToAwsProvider
   * @param configService
   * @param uploadsRepository
   */
  constructor(
    private readonly uploadToAwsProvider: UploadToO2SwitchProvider,
    private readonly configService: ConfigService,
    @InjectRepository(Fichier)
    private readonly uploadsRepository: Repository<Fichier>,
  ) {}

  /**
   * Upload d'un fichier
   * @param file
   * @returns
   */
  public async uploadFile(file: Express.Multer.File): Promise<Fichier> {
    if (
      !['image/gif', 'image/jpg', 'image/jpeg', 'image/png'].includes(
        file.mimetype,
      )
    ) {
      throw new BadRequestException('Format de fichier non supporté');
    }

    try {
      const fichier = await this.uploadToAwsProvider.uploadFile(file);
      return this.uploadsRepository.save(fichier);
    } catch (error) {
      console.log(error);
      throw new ConflictException(error.message);
    }
  }
}
