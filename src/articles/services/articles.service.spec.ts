import { Test, TestingModule } from '@nestjs/testing';
import { DataSource } from 'typeorm';
import { Article } from '../../database/core/article.entity';
import { CreateArticleDto } from '../dtos/create-article.dto';
import { UsersService } from '../../users/services/users.service';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';

import { mockArticlesRepository } from '../mocks/articles.repository.mock';
import { articlesMock } from '../mocks/articles.mock';
import { ArticlesService } from './articles.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersServiceMock } from '../../users/mocks/users.service.mock';
import { Upload } from '../../database/core/upload.entity';

describe('ArticleService', () => {
  let service: ArticlesService;
  const dto = {
    titre: 'Voir un titre',
    contenu: 'toto123456',
    image: 1,
    categorie: 'accueil',
    statut: 'publie',
    redacteur: {
      email: 'test@example.com',
    },
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
      const upload = {
        url: 'https://d3vv71s67qf4h4.cloudfront.net/connexion_bulleurs-1739980811134-572aefb0-c2c1-46a7-bf22-bbf1065673f4.png',
      } as Upload;
      const result = await service.createArticle(dto, userInfo, upload);
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
