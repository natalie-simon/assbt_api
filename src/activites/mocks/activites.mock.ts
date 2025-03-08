import { Activite } from '../../database/core/activite.entity';
import { CategorieActivite } from '../../database/core/categorie_activite.entity';
import { MembreActivite } from '../../database/core/membre_activite.entity';
import { CreateActiviteDto } from '../dtos/create-activite.dto';
import { InscriptionActiviteDto } from '../dtos/inscription-activite.dto';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';

// Mock d'une catégorie d'activité
export const mockCategorieActivite: CategorieActivite = {
  id: 1,
  lbl_categorie: 'Sport',
  avec_equipement: false,
  couleur: 'FF0000',
  avec_notification: false,
  image: null,
};

// Mock des activités
export const mockActivites: Activite[] = [
  {
    id: 1,
    titre: 'Sortie en mer',
    contenu: 'Sortie en mer pour les jeunes bulleurs',
    date_heure_debut: new Date('2023-08-20T14:00:00'),
    date_heure_fin: new Date('2023-08-20T17:00:00'),
    categorie: mockCategorieActivite,
    participants: [],
  },
  {
    id: 2,
    titre: 'Randonnée',
    contenu: 'Randonnée en montagne',
    date_heure_debut: new Date('2023-09-10T09:00:00'),
    date_heure_fin: new Date('2023-09-10T16:00:00'),
    categorie: mockCategorieActivite,
    participants: [],
  },
];

// Mock d'un DTO de création d'activité
export const mockCreateActiviteDto: CreateActiviteDto = {
  titre: 'Nouvelle activité',
  contenu: 'Contenu de la nouvelle activité',
  date_heure_debut: new Date('2023-10-15T10:00:00'),
  date_heure_fin: new Date('2023-10-15T12:00:00'),
  categorie: 1,
};

// Mock d'une activité nouvellement créée
export const mockNewActivite: Activite = {
  id: 3,
  titre: 'Nouvelle activité',
  contenu: 'Contenu de la nouvelle activité',
  date_heure_debut: new Date('2023-10-15T10:00:00'),
  date_heure_fin: new Date('2023-10-15T12:00:00'),
  categorie: mockCategorieActivite,
  participants: [],
};

// Mock d'un utilisateur actif
export const mockActiveUser: ActiveUserData = {
  sub: 1,
  email: 'user@example.com',
};

// Mock d'un DTO d'inscription à une activité
export const mockInscriptionActiviteDto: InscriptionActiviteDto = {
  observations: 'Besoin de matériel spécifique',
};

// Mock d'une inscription d'utilisateur à une activité
export const mockMembreActivite: MembreActivite = {
  id: 1,
  observations: 'Besoin de matériel spécifique',
  membre: null, // Normalement ce serait l'objet utilisateur complet
  membre_id: 1,
  activite: mockActivites[0],
  activite_id: 1,
  dateInscription: new Date(),
};

// Mock des activités avec leurs participants
export const mockActivitesAvecParticipants: Activite[] = [
  {
    ...mockActivites[0],
    participants: [mockMembreActivite],
  },
  {
    ...mockActivites[1],
    participants: [],
  },
];