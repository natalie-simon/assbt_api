import {
  mockCategorieActivite,
  CategoriesActiviteMock,
} from './categorie-activite.mock';
import { CategorieActivite } from '../../database/core/categorie_activite.entity';
import { CreateCategorieActiviteDto } from '../../categories-activites/dtos/create-categorie-activite.dto';
import { Upload } from '../../database/core/upload.entity';

export class CategorieActiviteServiceMock {
  findCategorieActiviteById(id: number): Promise<CategorieActivite> {
    const categorie = CategoriesActiviteMock.find((cat) => cat.id === id);
    return Promise.resolve(categorie || null);
  }

  createCategorieActivite(
    createCategorieActiviteDto: CreateCategorieActiviteDto,
    image: Upload | null,
  ): Promise<CategorieActivite> {
    return Promise.resolve({
      ...mockCategorieActivite,
      ...createCategorieActiviteDto,
      image,
    });
  }
}
