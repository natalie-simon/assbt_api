import {
  mockCategorieActivite,
  CategoriesActiviteMock,
} from './categorie-activite.mock';
import { CategorieActivite } from '../../database/core/categorie_activite.entity';
import { CreateCategorieActiviteDto } from '../../categories-activites/dtos/create-categorie-activite.dto';
import { Fichier } from '../../database/core/fichier.entity';

/**
 * Service mock pour les catégories d'activités
 */
export class CategorieActiviteServiceMock {
  /**
   * Mocks de récupération de toutes les catégories d'activités
   * @param id
   * @returns
   */
  findCategorieActiviteById(id: number): Promise<CategorieActivite> {
    const categorie = CategoriesActiviteMock.find((cat) => cat.id === id);
    return Promise.resolve(categorie || null);
  }

  /**
   * Mocks de récupération de toutes les catégories d'activités
   * @param createCategorieActiviteDto
   * @param image
   * @returns
   */
  createCategorieActivite(
    createCategorieActiviteDto: CreateCategorieActiviteDto,
    image: Fichier | null,
  ): Promise<CategorieActivite> {
    return Promise.resolve({
      ...mockCategorieActivite,
      ...createCategorieActiviteDto,
      image,
    });
  }
}
