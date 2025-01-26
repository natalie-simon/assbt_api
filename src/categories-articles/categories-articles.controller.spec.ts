import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesArticlesController } from './categories-articles.controller';
import { CategoriesArticlesService } from './services/categories-articles.services';
import { CategoriesArticlesServiceMock } from './mocks/categories-articles.service.mock';
import { categoriesArticlesMock } from './mocks/categories-articles.mock';
import { CreateCategorieArticleDto } from './dtos/create-categorie-article.dto';

describe('CategoriesArticlesController', () => {
  let controller: CategoriesArticlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesArticlesController],
      providers: [
        {
          provide: CategoriesArticlesService,
          useClass: CategoriesArticlesServiceMock,
        },
      ],
    }).compile();

    controller = module.get<CategoriesArticlesController>(
      CategoriesArticlesController,
    );
  });

    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  describe("getCategoriesArticles", () => {
    it("should return an array of CategoriesArticles", () => {
      expect(controller.getCategoriesArticles()).resolves.toEqual(categoriesArticlesMock);
    });
  });

  describe("createCategorieArticle", () => {
    const dto = { lbl_categorie: 'Accueil' } as CreateCategorieArticleDto;

    it("should return a new CategorieArticle", () => {
      expect(
        controller.createCategorieArticle(dto)).resolves.toEqual(categoriesArticlesMock[0]);
    });
  });

});
