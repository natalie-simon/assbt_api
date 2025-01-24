import { categoriesArticlesMock } from "./categories-articles.mock";

export class CategoriesAriclesServiceMock {
  createCategorieArticle = jest.fn();
  findAllCategorieArticle = jest.fn().mockResolvedValue(categoriesArticlesMock);
}