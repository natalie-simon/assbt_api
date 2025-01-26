import { categoriesArticlesMock } from "./categories-articles.mock";

/**
 * Mock of the CategoriesArticlesService class.
 */
export class CategoriesArticlesServiceMock {
  /**
   * Mock of the findAllCategorieArticle method.
   *
   * @memberof CategoriesArticlesServiceMock
   */
  findAllCategorieArticle = jest.fn().mockResolvedValue(categoriesArticlesMock);

  /**
   * Mock of the findCategorieArticleById method.
   *
   * @memberof CategoriesArticlesServiceMock
   **/
  findCategorieArticleById = jest.fn((id: number) =>
    Promise.resolve(categoriesArticlesMock.find(categorieArticle => categorieArticle.id === id))
  );
  /**
   * Mock of the createCategorieArticle method.
   *
   * @memberof CategoriesArticlesServiceMock
   */
  createCategorieArticle = jest
    .fn()
    .mockResolvedValue(categoriesArticlesMock[0]);
}