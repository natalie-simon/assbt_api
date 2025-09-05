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

  /**
   * Méthode pour uploader un fichier
   * @param file
   * @returns
   */
  async uploadFile(file: Express.Multer.File) {
    const fichierData = await this.uploadProvider.uploadFile(file); // Créer manuellement un objet avec la structure exacte attendue par Prisma
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

  /**
   * Méthode pour supprimer un fichier
   * @param id
   * @returns
   */
  async deleteFile(id: number) {
    try {
      // Étape préliminaire: récupérer les informations du fichier pour pouvoir le supprimer
      const fichier = await this.prisma.fichier.findUnique({
        where: { id },
      });

      if (!fichier) {
        throw new Error(`Fichier avec l'id ${id} non trouvé`);
      }

      // Étape 1: Supprimer le fichier physique sur le serveur en utilisant le nom du fichier
      await this.uploadProvider.deleteFile(fichier.nom);

      // Étape 2: Supprimer l'entrée dans la base de données
      await this.prisma.fichier.delete({
        where: { id },
      });

      return { success: true, message: 'Fichier supprimé avec succès' };
    } catch (error) {
      console.error(
        `Erreur lors de la suppression du fichier avec l'ID ${id}:`,
        error,
      );
      throw error; // Propager l'erreur pour la gérer au niveau supérieur
    }
  }
}
