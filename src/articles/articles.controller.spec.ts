import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './services/articles.service';
import { ArticlesServiceMock } from './mocks/articles.service.mock';
import { MembresService } from '../membres/services/membres.service';
import { MembresServiceMock } from '../membres/mocks/membres.service.mock';
import { articlesMock, articlesStandardMock } from './mocks/articles.mock';
import { CreateArticleDto } from './dtos/create-article.dto';
import { ActiveUserData } from '../auth/interfaces/active-user-data.interface';
import { UploadService } from '../uploads/services/fichier.service';
import { UploadServiceMock } from '../uploads/mocks/upload.service.mock';
import { categorieArticleTypes } from './enums/categorie-article-types.enum';
import { statutArticleTypes } from './enums/statut-article-types.enum';
import { fileTypes } from '../uploads/enums/file-types.enum';
import { Upload } from '../database/core/fichier.entity';
import { Article } from '../database/core/article.entity';

describe('ArticlesController', () => {
  let controller: ArticlesController;
  let articlesService: ArticlesService;
  let uploadService: UploadService;

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
          provide: UploadService,
          useClass: UploadServiceMock,
        },
      ],
    }).compile();

    controller = module.get<ArticlesController>(ArticlesController);
    articlesService = module.get<ArticlesService>(ArticlesService);
    uploadService = module.get<UploadService>(UploadService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getArticles', () => {
    it('should return all articles', async () => {
      // Arrange
      jest
        .spyOn(articlesService, 'findAllArticles')
        .mockResolvedValue(articlesMock as Article[]);

      // Act
      const result = await controller.getArticles();

      // Assert
      expect(result).toEqual(articlesMock);
      expect(articlesService.findAllArticles).toHaveBeenCalled();
    });
  });

  describe('findArticleById', () => {
    it('should return an article by id', async () => {
      // Arrange
      const id = 1;
      jest
        .spyOn(articlesService, 'findArticleById')
        .mockResolvedValue(articlesMock[0] as Article);

      // Act
      const result = await controller.findArticleById(id);

      // Assert
      expect(result).toEqual(articlesMock[0]);
      expect(articlesService.findArticleById).toHaveBeenCalledWith(id);
    });
  });

  describe('createArticle', () => {
    it('should create a new article with uploaded file', async () => {
      // Arrange
      const createArticleDto: CreateArticleDto = {
        titre: 'Nouvel Article',
        contenu: 'Contenu du nouvel article',
        statut: statutArticleTypes.BROUILLON,
        categorie: categorieArticleTypes.ACCUEIL,
      };

      const user: ActiveUserData = { sub: 1, email: 'admin@example.com' };

      const mockFile = {
        originalname: 'testimage.jpg',
        mimetype: 'image/jpeg',
        size: 5000,
      } as Express.Multer.File;

      const uploadedImage: Upload = {
        id: 4,
        nom: 'testimage',
        url: '/uploads/testimage.jpg',
        type: fileTypes.IMAGE,
        mime: 'image/jpeg',
        size: 5000,
        createDate: new Date(),
        updateDate: new Date(),
      };

      const expectedResult = {
        id: 999,
        ...createArticleDto,
        image: {
          url: uploadedImage.url,
        },
        redacteur: {
          email: user.email,
        },
      };

      jest.spyOn(uploadService, 'uploadFile').mockResolvedValue(uploadedImage);
      jest
        .spyOn(articlesService, 'createArticle')
        .mockResolvedValue(expectedResult);

      // Act
      const result = await controller.createArticle(
        createArticleDto,
        mockFile,
        user,
      );

      // Assert
      expect(result).toEqual(expectedResult);
      expect(uploadService.uploadFile).toHaveBeenCalledWith(mockFile);
      expect(articlesService.createArticle).toHaveBeenCalledWith(
        createArticleDto,
        user,
        uploadedImage,
      );
    });

    /*it('should create a new article without uploaded file', async () => {
      // Arrange
      const createArticleDto: CreateArticleDto = {
        titre: 'Nouvel Article',
        contenu: 'Contenu du nouvel article',
        statut: statutArticleTypes.BROUILLON,
        categorie: categorieArticleTypes.ACCUEIL,
      };

      const user: ActiveUserData = { sub: 1, email: 'admin@example.com' };

      const expectedResult = {
        id: 999,
        ...createArticleDto,
        image: {
          url: null,
        },
        redacteur: {
          email: user.email,
        },
      };

      jest
        .spyOn(articlesService, 'createArticle')
        .mockResolvedValue(expectedResult);

      // Act
      const result = await controller.createArticle(
        createArticleDto,
        null,
        user,
      );

      // Assert
      expect(result).toEqual(expectedResult);
      expect(uploadService.uploadFile).not.toHaveBeenCalled();
      expect(articlesService.createArticle).toHaveBeenCalledWith(
        createArticleDto,
        user,
        null,
      );
    });*/
  });

  describe('findArticlesByCategorie', () => {
    it('should return articles filtered by category', async () => {
      // Arrange
      const categorie = categorieArticleTypes.ACCUEIL;

      // Créer des articles avec la structure complète pour le test
      const filteredArticles = articlesMock.filter(
        (article) =>
          article.categorie === categorie &&
          article.statut === statutArticleTypes.PUBLIE,
      );

      jest
        .spyOn(articlesService, 'findArticlePublieByCategorie')
        .mockResolvedValue(filteredArticles as Article[]);

      // Act
      const result = await controller.findArticlesByCategorie(categorie);

      // Assert
      expect(result).toEqual(filteredArticles);
      expect(articlesService.findArticlePublieByCategorie).toHaveBeenCalledWith(
        categorie,
      );
    });

    it('should return empty array when no articles found for category', async () => {
      // Arrange
      const categorie = 'inexistant' as categorieArticleTypes;

      jest
        .spyOn(articlesService, 'findArticlePublieByCategorie')
        .mockResolvedValue([]);

      // Act
      const result = await controller.findArticlesByCategorie(categorie);

      // Assert
      expect(result).toEqual([]);
      expect(articlesService.findArticlePublieByCategorie).toHaveBeenCalledWith(
        categorie,
      );
    });
  });
});
