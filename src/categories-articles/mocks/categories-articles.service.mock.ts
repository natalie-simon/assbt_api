import { categoriesArticlesMock } from "./categories-articles.mock";

/**
 * Mock of the CategoriesArticlesService class.
 */
export class CategoriesAriclesServiceMock {
  /**
   * Mock of the findAllCategorieArticle method.
   *
   * @memberof CategoriesAriclesServiceMock
   */
  findAllCategorieArticle = jest.fn().mockResolvedValue(categoriesArticlesMock);

  /**
   * Mock of the findCategorieArticleById method.
   *
   * @memberof CategoriesAriclesServiceMock
   */
  createCategorieArticle = jest
    .fn()
    .mockResolvedValue(categoriesArticlesMock[0]);
}