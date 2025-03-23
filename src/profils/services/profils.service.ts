import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profil } from '../../database/core/profil.entity';
import { FichierService } from '../../fichiers/services/fichier.service';

@Injectable()
export class ProfilsService {
  constructor(
    @InjectRepository(Profil)
    private readonly profilRepository: Repository<Profil>,
    private readonly fichierService: FichierService,
  ) {}

  async findOne(id: number): Promise<Profil | null> {
    return this.profilRepository.findOne({
      where: { id },
    });
  }

  async update(profil: Profil): Promise<Profil> {
    return this.profilRepository.save(profil);
  }

  async create(profil: Profil): Promise<Profil> {
    const newProfil = this.profilRepository.create(profil);
    return this.profilRepository.save(newProfil);
  }

  async updateAvatar(id: number, file: Express.Multer.File): Promise<Profil> {
    const profil = await this.findOne(id);
    if (!profil) {
      throw new BadRequestException('Profil non trouvé');
    }

    const fichier = await this.fichierService.uploadFile(file);
    profil.avatar = fichier;

    return this.profilRepository.save(profil);
  }
} 