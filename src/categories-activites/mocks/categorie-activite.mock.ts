import { CategorieActivite } from '../../database/core/categorie_activite.entity';
import { CreateCategorieActiviteDto } from '../../categories-activites/dtos/create-categorie-activite.dto';
import { CategorieActiviteDto } from '../../categories-activites/dtos/categorie-activite.dto';

// Mock des catégories d'activités
export const CategoriesActiviteMock: CategorieActivite[] = [
  {
    id: 1,
    lbl_categorie: 'Sport',
    avec_equipement: true,
    couleur: 'FF5733',
    avec_notification: true,
    image: null,
  },
  {
    id: 2,
    lbl_categorie: 'Culture',
    avec_equipement: false,
    couleur: '33FF57',
    avec_notification: true,
    image: null,
  },
  {
    id: 3,
    lbl_categorie: 'Nautique',
    avec_equipement: true,
    couleur: '3357FF',
    avec_notification: false,
    image: null,
  },
];

// Mock d'une seule catégorie d'activité (pour les tests ciblés)
export const mockCategorieActivite: CategorieActivite = CategoriesActiviteMock[0];

// Mock d'un DTO de création de catégorie d'activité
export const mockCreateCategorieActiviteDto: CreateCategorieActiviteDto = {
  lbl_categorie: 'Nouvelle Catégorie',
  avec_equipement: true,
  couleur: '5733FF',
  avec_notification: true,
};

// Mock de DTO de catégorie d'activité (pour les retours des contrôleurs)
export const mockCategorieActiviteDto: CategorieActiviteDto = {
  id: 1,
  lbl_categorie: 'Sport',
  avec_equipement: true,
  couleur: 'FF5733',
};

// Mock des DTOs de catégories
export const mockCategoriesActiviteDto: CategorieActiviteDto[] = [
  mockCategorieActiviteDto,
  {
    id: 2,
    lbl_categorie: 'Culture',
    avec_equipement: false,
    couleur: '33FF57',
  },
  {
    id: 3,
    lbl_categorie: 'Nautique',
    avec_equipement: true,
    couleur: '3357FF',
  },
];
