import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Upload } from '../../database/core/upload.entity';
import { Repository } from 'typeorm';
import { UploadToAwsProvider } from './upload-to-aws.provider';
import { ConfigService } from '@nestjs/config';
import { UploadFile } from '../interfaces/upload-file.interface';
import { fileTypes } from '../enums/file-types.enum';

/**
 * Service de gestion des uploads
 */
@Injectable()
export class UploadService {
  /**
   * Constructeur
   * @param uploadToAwsProvider
   * @param configService
   * @param uploadsRepository
   */
  constructor(
    private readonly uploadToAwsProvider: UploadToAwsProvider,
    private readonly configService: ConfigService,
    @InjectRepository(Upload)
    private readonly uploadsRepository: Repository<Upload>,
  ) {}

  /**
   * Upload d'un fichier
   * @param file
   * @returns
   */
  public async uploadFile(file: Express.Multer.File): Promise<Upload> {
    if (
      !['image/gif', 'image/jpg', 'image/jpeg', 'image/png'].includes(
        file.mimetype,
      )
    ) {
      throw new BadRequestException('Format de fichier non supporté');
    }

    try {
      const nom = await this.uploadToAwsProvider.uploadFile(file);
      const uploadFile: UploadFile = {
        nom: nom,
        url: `https://${this.configService.get('appConfig.cloudfront_url')}/${nom}`,
        type: fileTypes.IMAGE,
        mime: file.mimetype,
        size: file.size,
      };
      const upload = this.uploadsRepository.create(uploadFile);
      return await this.uploadsRepository.save(upload);
    } catch (error) {
      console.log(error);
      throw new ConflictException(error.message);
    }
  }
}
