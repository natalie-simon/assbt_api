import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UploadToO2SwitchProvider } from '../../fichiers/providers/upload-to-o2switch.provider';
import { FileTypes } from '../../../generated/prisma';

@Injectable()
export class CategorieActiviteUploadService {
  constructor(
    private prisma: PrismaService,
    private uploadProvider: UploadToO2SwitchProvider,
  ) {}

  async uploadFile(file: Express.Multer.File) {
    const fichierData = await this.uploadProvider.uploadFile(file);

    // Créer manuellement un objet avec la structure exacte attendue par Prisma
    const created = await this.prisma.fichier.create({
      data: {
        nom: fichierData.nom,
        url: fichierData.url,
        mime: fichierData.mime,
        type: FileTypes.IMAGE, // Convertir en enum si nécessaire
        taille: String(fichierData.taille), // Convertir en string
      },
    });

    return created?.id;
  }
}