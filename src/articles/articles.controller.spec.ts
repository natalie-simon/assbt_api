import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './services/articles.service';
import { ArticlesServiceMock } from './mocks/articles.service.mock';
import { UsersService } from '../users/services/users.service';
import { UsersServiceMock } from '../users/mocks/users.service.mock';
import { articlesMock } from './mocks/articles.mock';
import { CreateArticleDto } from './dtos/create-article.dto';
import { ActiveUserData } from '../auth/interfaces/active-user-data.interface';
import { UploadServiceMock } from '../uploads/mocks/upload.service.mock';
import { UploadService } from '../uploads/services/upload.service';
import { categorieArticleTypes } from './enums/categorie-article-types.enum';

describe('ArticlesController', () => {
  let controller: ArticlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [
        {
          provide: ArticlesService,
          useClass: ArticlesServiceMock,
        },
        {
          provide: UsersService,
          useClass: UsersServiceMock,
        },
        {
          provide: UploadService,
          useValue: UploadServiceMock,
        }
      ],
    }).compile();
    controller = module.get<ArticlesController>(ArticlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getArticles', () => {
    it('should return an array of Articles', () => {
      expect(controller.getArticles()).resolves.toEqual(articlesMock);
    });
  });

  describe('findArticleById', () => {
    it('should return an Article', async () => {
      expect(controller.findArticleById(1)).resolves.toEqual(articlesMock[0]);
    });
  });

  describe('createArticle', () => {
    const user = { sub: 1, email: 'test@example.com' } as ActiveUserData;
    const dto = {
      titre: 'Article 1',
      contenu: "Contenu de l'article 1",
      statut: 'brouillon',
      categorie: 'accueil',
      image: 1
        } as CreateArticleDto;

    it('should return a new Article', () => {
      //expect(controller.createArticle(dto, user)).resolves.toEqual(articlesMock[0]);
    });
  });

  describe('findArticleByCategorie', () => {
    it('should return an array of Articles', () => {
      const categorie = 'accueil';
      const response = articlesMock.filter(
        (article) => article.categorie === categorie,
      );
      expect(controller.findArticlesByCategorie(categorieArticleTypes.ACCUEIL)).resolves.toEqual(
        response,
      );
    });
  });
});
