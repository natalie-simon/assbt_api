import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UploadToO2SwitchProvider } from '../../fichiers/providers/upload-to-o2switch.provider';

@Injectable()
export class AvatarUploadService {
  constructor(
    private prisma: PrismaService,
    private uploadProvider: UploadToO2SwitchProvider,
  ) {}

  async uploadFile(file: Express.Multer.File) {
    const fichierData = await this.uploadProvider.uploadFile(file);
    return this.prisma.fichier.create({
      data: {
        nom: fichierData.nom,
        url: fichierData.url,
        mime: fichierData.mime,
        type: fichierData.type as any, // Convertir en enum si nécessaire
        taille: String(fichierData.taille), // Convertir en string
      },
    });
  }
}
