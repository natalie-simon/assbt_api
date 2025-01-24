import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesArticlesController } from './categories-articles.controller';
import { CatetogiesArticlesService } from './services/categories-articles.services';
import { CategoriesAriclesServiceMock } from './mocks/categories-articles.service.mock';
import { categoriesArticlesMock } from './mocks/categories-articles.mock';

describe('CategoriesArticlesController', () => {
  let controller: CategoriesArticlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesArticlesController],
      providers: [
        {
          provide: CatetogiesArticlesService,
          useClass: CategoriesAriclesServiceMock,
        },
      ],
    }).compile();

    controller = module.get<CategoriesArticlesController>(
      CategoriesArticlesController,
    );
  });

  describe("getCategoriesArticles", () => {
    it("should return an array of CategoriesArticles", () => {
      expect(controller.getCategoriesArticles()).resolves.toEqual(categoriesArticlesMock);
    });
  });

  describe("createCategorieAricle", () => {

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
