import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profil } from '../../database/core/profil.entity';
import { FichierService } from '../../fichiers/services/fichier.service';
import { Fichier } from '../../database/core/fichier.entity';
import { Membre } from '../../database/core/membre.entity';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';
import { MembresService } from '../../membres/services/membres.service';

@Injectable()
export class ProfilsService {
  constructor(
    @InjectRepository(Profil)
    private readonly profilRepository: Repository<Profil>,
    @InjectRepository(Membre)
    private readonly membreRepository: Repository<Membre>,
    private readonly fichierService: FichierService,
    private readonly membresService: MembresService,
  ) {}

  async findOne(id: number): Promise<Profil | null> {
    return this.profilRepository.findOne({
      where: { id },
    });
  }

  async update(profil: Profil): Promise<Profil> {
    return this.profilRepository.save(profil);
  }

  async create(profil: Profil, avatar: Fichier | null,  activeUser: ActiveUserData,
  ): Promise<Profil> {
    const newProfil = this.profilRepository.create({...profil, avatar : avatar});
    const savedProfil = await this.profilRepository.save(newProfil);
    let membre = await this.membresService.findUserById(activeUser['sub']);
    membre.profil = savedProfil;
    await this.membreRepository.save(membre);
    return savedProfil;
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