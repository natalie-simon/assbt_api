import { CreateCategorieArticleDto } from '../dtos/create-categorie-article.dto';
import { categoriesArticlesMock } from '../mocks/categories-articles.mock';

/**
 * Mock repository for categories-articles
 */
export const mockCategoriesArticlesRepository = {
  find: jest.fn().mockResolvedValue(categoriesArticlesMock),
  create: jest.fn((dto: CreateCategorieArticleDto) => ({
    id: 1,
    ...dto,
  })),
  save: jest.fn((entity) => Promise.resolve({ id: 1, ...entity })),
  findOne: jest.fn((criteres) => {
    const { where } = criteres;
    return Promise.resolve(
      categoriesArticlesMock.find((c) => c.id === where.id),
    );
  }),
};
