import { Profil } from '../../database/core/profil.entity';
import { Fichier } from '../../database/core/fichier.entity';

export const mockProfil: Profil = {
  id: 1,
  nom: 'Doe',
  prenom: 'John',
  telephone: '0123456789',
  communication_mail: true,
  communication_sms: false,
  avatar: null,
  membre: null,
};

export const mockFichier: Fichier = {
  id: 1,
  nom: 'avatar.jpg',
  url: 'https://example.com/avatar.jpg',
  type: 'image',
  mime: 'image/jpeg',
  taille: 1024,
  dateCreation: new Date(),
  dateMaj: new Date(),
};

export const mockActiveUser = {
  sub: 1,
  email: 'test@example.com',
}; 