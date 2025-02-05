import { Test, TestingModule } from '@nestjs/testing';
import { DataSource } from 'typeorm';
import { Article } from '../article.entity';
import { CreateArticleDto } from '../dtos/create-article.dto';
import { UsersService } from '../../users/services/users.service';
import { CategoriesArticlesService } from '../../categories-articles/services/categories-articles.services';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';

import { mockArticlesRepository } from '../mocks/articles.repository.mock';
import { articlesMock } from '../mocks/articles.mock';
import { CategoriesArticlesServiceMock } from '../../categories-articles/mocks/categories-articles.service.mock';
import { ArticlesService } from './articles.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { StatutsService } from '../../statuts/services/statuts.service';
import { StatutsServiceMock } from '../../statuts/mocks/statuts.service.mock';
import { UsersServiceMock } from '../../users/mocks/users.service.mock';

describe('ArticleService', () => {
  let service: ArticlesService;
  const dto = {
    titre: 'Voir un titre',
    contenu: 'toto123456',
    categorie: 1,
    statut: 1,
    image:
      'https://image.over-blog.com/O1chlSo4u_D7uD0qC9z-9lzHTHg=/filters:no_upscale()/image%2F1438473%2F20201007%2Fob_f4e04f_diver.jpg',
  } as CreateArticleDto;;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: DataSource,
          useValue: {
            find: jest.fn().mockReturnValue(articlesMock),
          },
        },
        {
          provide: StatutsService,
          useClass: StatutsServiceMock,
        },
        {
          provide: CategoriesArticlesService,
          useClass: CategoriesArticlesServiceMock,
        },

        {
          provide: UsersService,
          useClass: UsersServiceMock,
        },
        {
          provide: getRepositoryToken(Article),
          useValue: mockArticlesRepository,
        },
      ],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createArticle', () => {
    it('should call createArticle', async () => {
      const userInfo = { sub: 1, email: 'test@example.com' } as ActiveUserData;
      const result = await service.createArticle(dto, userInfo);
      expect(mockArticlesRepository.create).toHaveBeenCalled();
      expect(mockArticlesRepository.save).toHaveBeenCalled();
      expect(result).toEqual(articlesMock[0]);
    });
  });

  describe('findAllArticles', () => {
    it('should call findAllArticles', async () => {
      const result = await service.findAllArticles();
      expect(mockArticlesRepository.find).toHaveBeenCalled();
      expect(result).toEqual(articlesMock);
    });
  });

});
