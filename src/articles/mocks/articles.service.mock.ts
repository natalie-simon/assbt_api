import { articlesMock } from "./articles.mock";

/**
 * ArticlesServiceMock
 */
export class ArticlesServiceMock {
  /**
   * findAllArticles
   *
   * @memberof ArticlesServiceMock
   */
  findAllArticles = jest.fn().mockResolvedValue(articlesMock);

  /**
   * createArticle
   *
   * @memberof ArticlesServiceMock
   */
  createArticle = jest.fn().mockResolvedValue(articlesMock[0]);

  /**
   * findArticleById
   *
   * @memberof ArticlesServiceMock
   */
  findArticleById = jest.fn((id: number) =>
    Promise.resolve(articlesMock.find(article => article.id === id))
  );

  /**
   * findArticleByCategorie
   *
   * @memberof ArticlesServiceMock
   */
  findArticleByCategorie = jest.fn((categorie: string) =>
    Promise.resolve(articlesMock.filter(
      article => article.categorie === categorie))
  );
}