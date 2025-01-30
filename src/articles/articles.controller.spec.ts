import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './services/articles.service';
import { ArticlesServiceMock } from './mocks/articles.service.mock';
import { UsersService } from '../users/services/users.service';
import { UsersServiceMock } from '../users/mocks/users.service.mock';
import { articlesMock } from './mocks/articles.mock';
import { CreateArticleDto } from './dtos/create-article.dto';
import { ActiveUserData } from 'src/auth/interfaces/active-user-data.interface';

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
      //redacteur: 1,
      statut: 1,
      categorie: 1,
      image:
        'https://www.neozone.org/blog/wp-content/uploads/2022/12/invention-innovation-bouteille-plongee-avelo-001.jpg',
    } as CreateArticleDto;

    it('should return a new Article', () => {
      expect(controller.createArticle(dto, user)).resolves.toEqual(articlesMock[0]);
    });
  });

  describe('findArticleByCategorie', () => {
    it('should return an array of Articles', () => {
      const categorieId = 1;
      const response = articlesMock.filter(
        (article) => article.categorie.id === categorieId,
      );
      expect(controller.findArticlesByCategorie(categorieId)).resolves.toEqual(
        response,
      );
    });
  });

});
