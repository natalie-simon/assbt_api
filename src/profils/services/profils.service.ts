import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { FichierService } from '../../fichiers/services/fichier.service';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';
import { MembresService } from '../../membres/services/membres.service';
import type { CreateProfilDto } from '../dtos/createProfil.dto';
@Injectable()
export class ProfilsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly fichierService: FichierService,
    private readonly membresService: MembresService,
  ) {}

  async findOne(id: number) {
    return this.prisma.profil.findUnique({
      where: { id },
    });
  }

  async update(id: number, userId: number, profil: any) {
    const profilActuel = await this.findOne(id);

    if (profilActuel.membreId !== userId) {
      throw new BadRequestException(
        "Vous ne pouvez pas modifier ce profil qui n'est pas le votre.",
      );
    }

    return this.prisma.profil.update({
      where: { id: id },
      data: profil,
    });
  }

  async create(
    profil: CreateProfilDto,
    avatarId: number | null,
    activeUser: ActiveUserData,
  ) {
    // Créer le profil
    const savedProfil = await this.prisma.profil.create({
      data: {
        ...profil,
        avatarId: avatarId,
        membreId: activeUser['sub'],
      },
    });

    return savedProfil;
  }

  async updateAvatar(id: number, file: Express.Multer.File) {
    const profil = await this.findOne(id);
    if (!profil) {
      throw new BadRequestException('Profil non trouvé');
    }

    // penser à ajouter la suppression de l'ancien avatar (unlink);

    const fichier = await this.fichierService.uploadFile(file);

    return this.prisma.profil.update({
      where: { id },
      data: {
        avatarId: fichier.id,
      },
      include: {
        avatar: true,
      },
    });
  }
}
