import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesArticlesService } from './categories-articles.services';
import { DataSource } from 'typeorm';
import { CategorieArticle } from '../categorie-article.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { categoriesArticlesMock } from '../mocks/categories-articles.mock';
import { mockCategoriesArticlesRepository } from '../mocks/categories-articles.repository.mock';

describe('CateloriesArticlesService', () => {
  let service: CategoriesArticlesService;
  const dto = { lbl_categorie: 'Accueil' };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesArticlesService,
        {
          provide: DataSource,
          useValue: {
            find: jest.fn().mockReturnValue(categoriesArticlesMock),
          },
        },
        {
          provide: getRepositoryToken(CategorieArticle),
          useValue: mockCategoriesArticlesRepository,
        },
      ],
    }).compile();

    service = module.get<CategoriesArticlesService>(CategoriesArticlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /**
   * T.U. findAllCategorieArticle
   */
  describe('findAllCategorieArticle', () => {
    it('should call findAllCategorieArticle', async () => {
      const result = await service.findAllCategorieArticle();
      expect(mockCategoriesArticlesRepository.find).toHaveBeenCalled();
      expect(result).toEqual(categoriesArticlesMock);
    });
  });

  /**
   * T.U. findCategorieArticleById
   */
  describe('findCategorieArticleById', () => {
    it('should call findAllCategorieArticle', async () => {
      const result = await service.findCategorieArticleById(1);
      expect(mockCategoriesArticlesRepository.findOne).toHaveBeenCalled();
      expect(result).toEqual(categoriesArticlesMock[0]);
    });
  });

  /**
   * T.U. createCategorieArticle
   */
  /*describe('createCategorieArticle', () => {
    it('should create and save a new category article', async () => {
      const result = await service.createCategorieArticle(dto);
      expect(mockCategoriesArticlesRepository.create).toHaveBeenCalledWith(dto);
      expect(mockCategoriesArticlesRepository.save).toHaveBeenCalledWith({
        id: expect.any(Number),
        ...dto,
      });
      expect(result).toEqual(categoriesArticlesMock[0]);
    });
  });*/
});
