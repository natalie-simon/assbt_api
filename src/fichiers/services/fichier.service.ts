import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UploadToO2SwitchProvider } from '../providers/upload-to-o2switch.provider';
import { ConfigService } from '@nestjs/config';

/**
 * Service de gestion des uploads
 */
@Injectable()
export class FichierService {
  /**
   * Constructeur
   * @param uploadToAwsProvider
   * @param configService
   * @param prisma
   */
  constructor(
    private readonly uploadToAwsProvider: UploadToO2SwitchProvider,
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Upload d'un fichier
   * @param file
   * @returns
   */
  public async uploadFile(file: Express.Multer.File) {
    if (
      !['image/gif', 'image/jpg', 'image/jpeg', 'image/png'].includes(
        file.mimetype,
      )
    ) {
      throw new BadRequestException('Format de fichier non supporté');
    }

    try {
      const fichierData = await this.uploadToAwsProvider.uploadFile(file);
          return this.prisma.fichier.create({
            data: {
              nom: fichierData.nom,
              url: fichierData.url,
              mime: fichierData.mime,
              type: fichierData.type as any, // Convertir en enum si nécessaire
              taille: String(fichierData.taille), // Convertir en string
            },
          });

    } catch (error) {
      console.log(error);
      throw new ConflictException(error.message);
    }
  }
}
