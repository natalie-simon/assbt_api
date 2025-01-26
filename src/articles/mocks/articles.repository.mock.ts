import { CreateArticleDto } from "../dtos/create-article.dto";
import { articlesMock } from "../mocks/articles.mock";

/**
 * Mock of the ArticlesRepository
 */
export const mockArticlesRepository = {
  find: jest.fn().mockResolvedValue(articlesMock),
  create: jest.fn((dto: CreateArticleDto) => ({
    id: 1,
    ...dto,
  })),
  save: jest.fn((entity) => Promise.resolve({ id: 1, ...entity })),
  findOne: jest.fn((criteres) => {
    const { where } = criteres;
    return Promise.resolve(
      articlesMock.find((c) => c.id === where.id),
    );
  }),
}