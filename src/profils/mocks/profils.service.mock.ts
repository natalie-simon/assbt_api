import { Injectable } from '@nestjs/common';
import { Profil } from '../../database/core/profil.entity';
import { mockProfil, mockFichier } from './profils.mock';

@Injectable()
export class ProfilsServiceMock {
  async findOne(id: number): Promise<Profil | null> {
    if (id === mockProfil.id) {
      return mockProfil;
    }
    return null;
  }

  async update(profil: Profil): Promise<Profil> {
    return { ...mockProfil, ...profil };
  }

  async updateAvatar(id: number, file: Express.Multer.File): Promise<Profil> {
    if (id !== mockProfil.id) {
      throw new Error('Profile not found');
    }
    return { ...mockProfil, avatar: mockFichier };
  }
} 