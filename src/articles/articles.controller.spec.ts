import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './services/articles.service';
import { ArticlesServiceMock } from './mocks/articles.service.mock';
import { MembresService } from '../membres/services/membres.service';
import { MembresServiceMock } from '../membres/mocks/membres.service.mock';
import { articlesMock, articlesStandardMock } from './mocks/articles.mock';
import { CreateArticleDto } from './dtos/create-article.dto';
import { ActiveUserData } from '../auth/interfaces/active-user-data.interface';
import { FichierService } from '../fichiers/services/fichier.service';
import { UploadServiceMock } from '../fichiers/mocks/upload.service.mock';
import { categorieArticleTypes } from './enums/categorie-article-types.enum';
import { statutArticleTypes } from './enums/statut-article-types.enum';
import { mockUploadedFile } from '../fichiers/mocks/uploads.mock';

describe('ArticlesController', () => {
  let controller: ArticlesController;
  let articlesService: ArticlesService;
  let uploadService: FichierService;

  const mockActiveUser: ActiveUserData = {
    sub: 1,
    email: 'test@example.com',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [
        {
          provide: ArticlesService,
          useClass: ArticlesServiceMock,
        },
        {
          provide: MembresService,
          useClass: MembresServiceMock,
        },
        {
          provide: FichierService,
          useClass: UploadServiceMock,
        },
      ],
    }).compile();

    controller = module.get<ArticlesController>(ArticlesController);
    articlesService = module.get<ArticlesService>(ArticlesService);
    uploadService = module.get<FichierService>(FichierService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getArticles', () => {
    it('should return all articles', async () => {
      const result = await controller.getArticles();

      expect(result).toEqual(articlesMock);
    });
  });

  describe('findArticleById', () => {
    it('should return an article by id', async () => {
      const result = await controller.findArticleById(1);

      expect(result).toEqual(articlesMock[0]);
    });

    it('should return null when article is not found', async () => {
      const result = await controller.findArticleById(999);

      expect(result).toBeNull();
    });
  });

  describe('createArticle', () => {
    const createDto: CreateArticleDto = {
      titre: 'New Article',
      contenu: 'New Content',
      statut: statutArticleTypes.PUBLIE,
      categorie: categorieArticleTypes.ACCUEIL,
    };

    it('should create a new article with image', async () => {
      const result = await controller.createArticle(createDto, mockUploadedFile, mockActiveUser);

      expect(result).toEqual({
        id: 999,
        ...createDto,
        image: { url: 'https://bucket.s3.amazonaws.com/uploads/abc123-test-image.jpg' },
        redacteur: { email: mockActiveUser.email },
      });
    });

    it('should create a new article without image', async () => {
      const result = await controller.createArticle(createDto, null, mockActiveUser);

      expect(result).toEqual({
        id: 999,
        ...createDto,
        image: { url: null },
        redacteur: { email: mockActiveUser.email },
      });
    });

    it('should handle upload errors', async () => {
      jest.spyOn(uploadService, 'uploadFile').mockRejectedValueOnce(new Error('Upload failed'));

      await expect(
        controller.createArticle(createDto, mockUploadedFile, mockActiveUser),
      ).rejects.toThrow('Upload failed');
    });
  });

  describe('findArticlesByCategorie', () => {
    it('should return articles by category', async () => {
      const categorie = categorieArticleTypes.ACCUEIL;
      const result = await controller.findArticlesByCategorie(categorie);

      expect(result).toEqual(
        articlesStandardMock.filter(
          (article) =>
            article.categorie === categorie &&
            article.statut === statutArticleTypes.PUBLIE,
        ),
      );
    });

    it('should return empty array when no articles found for category', async () => {
      const categorie = categorieArticleTypes.INFOS;
      const result = await controller.findArticlesByCategorie(categorie);

      expect(result).toEqual([]);
    });
  });
});
