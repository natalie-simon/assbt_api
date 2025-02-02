import { CreateArticleDto } from "../dtos/create-article.dto";
import { articlesMock } from "../mocks/articles.mock";

/**
 * Mock of the ArticlesRepository
 */
export const mockArticlesRepository = {
  create: jest.fn((dto: CreateArticleDto) => ({
    id: 1,
    ...dto,
  })),
  save: jest.fn((entity) => Promise.resolve({ id: 1, ...entity })),
  find: jest.fn().mockResolvedValue(articlesMock),
  findOne: jest.fn((criteres) => {
    const { where } = criteres;
    return Promise.resolve(articlesMock.find((c) => c.id === where.id));
  }),
  delete: jest.fn().mockResolvedValue({ affected: 1 }),
};