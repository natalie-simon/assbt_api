import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Article } from '../../database/core/article.entity';
import { Repository } from 'typeorm';
import { MembresService } from '../../membres/services/membres.service';
import { MembresServiceMock } from '../../membres/mocks/membres.service.mock';
import { articlesMock } from '../mocks/articles.mock';
import { CreateArticleDto } from '../dtos/create-article.dto';
import { categorieArticleTypes } from '../enums/categorie-article-types.enum';
import { statutArticleTypes } from '../enums/statut-article-types.enum';
import { membresMock } from '../../membres/mocks/membres.mock';
import { mockUploadedFile } from '../../uploads/mocks/uploads.mock';
import { NotFoundException } from '@nestjs/common';
import { ArticleStandardDto } from '../dtos/article-standard.dto';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('ArticlesService', () => {
  let service: ArticlesService;
  let usersService: MembresService;
  let articleRepository: MockRepository<Article>;

  beforeEach(async () => {
    // Création du mock repository
    articleRepository = {
      find: jest.fn(),
      findOne: jest.fn(),
      save: jest.fn(),
      create: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: getRepositoryToken(Article),
          useValue: articleRepository,
        },
        {
          provide: MembresService,
          useClass: MembresServiceMock,
        },
      ],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
    usersService = module.get<MembresService>(MembresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllArticles', () => {
    it('should return all articles', async () => {
      // Arrange
      articleRepository.find.mockResolvedValue(articlesMock);

      // Act
      const result = await service.findAllArticles();

      // Assert
      expect(result).toEqual(articlesMock);
      expect(articleRepository.find).toHaveBeenCalledWith({
        relations: ['image'],
        select: {
          id: true,
          titre: true,
          contenu: true,
          statut: true,
          categorie: true,
          image: {
            url: true,
          },
          redacteur: {
            id: true,
          },
        },
      });
    });

    it('should return empty array when no articles exist', async () => {
      // Arrange
      articleRepository.find.mockResolvedValue([]);

      // Act
      const result = await service.findAllArticles();

      // Assert
      expect(result).toEqual([]);
      expect(articleRepository.find).toHaveBeenCalled();
    });

    it('should handle repository errors', async () => {
      // Arrange
      const errorMessage = 'Database connection error';
      articleRepository.find.mockRejectedValue(new Error(errorMessage));

      // Act & Assert
      await expect(service.findAllArticles()).rejects.toThrow(Error);
      await expect(service.findAllArticles()).rejects.toThrow(errorMessage);
    });
  });

  describe('findArticleById', () => {
    it('should return an article by id', async () => {
      // Arrange
      const id = 1;
      articleRepository.findOne.mockResolvedValue(articlesMock[0]);

      // Act
      const result = await service.findArticleById(id);

      // Assert
      expect(result).toEqual(articlesMock[0]);
      expect(articleRepository.findOne).toHaveBeenCalledWith({
        where: { id: id },
      });
    });

    it('should return null when article is not found', async () => {
      // Arrange
      const id = 999;
      articleRepository.findOne.mockResolvedValue(null);

      // Act
      const result = await service.findArticleById(id);

      // Assert
      expect(result).toBeNull();
      expect(articleRepository.findOne).toHaveBeenCalledWith({
        where: { id: id },
      });
    });

    it('should handle invalid id parameter', async () => {
      // Arrange
      const id = NaN;

      // Act
      const result = await service.findArticleById(id);

      // Assert
      expect(articleRepository.findOne).toHaveBeenCalledWith({
        where: { id: id },
      });
    });

    it('should handle repository errors', async () => {
      // Arrange
      const id = 1;
      const errorMessage = 'Database connection error';
      articleRepository.findOne.mockRejectedValue(new Error(errorMessage));

      // Act & Assert
      await expect(service.findArticleById(id)).rejects.toThrow(Error);
      await expect(service.findArticleById(id)).rejects.toThrow(errorMessage);
    });
  });

  describe('createArticle', () => {
    it('should create and return a new article with image', async () => {
      // Arrange
      const createArticleDto: CreateArticleDto = {
        titre: 'Nouvel Article',
        contenu: 'Contenu du nouvel article',
        statut: statutArticleTypes.BROUILLON,
        categorie: categorieArticleTypes.ACCUEIL,
      };

      const user = { sub: 1, email: 'admin@example.com' };
      const foundUser = membresMock[0];
      const image = mockUploadedFile[0];

      jest.spyOn(usersService, 'findUserById').mockResolvedValue(foundUser);

      const newArticle = {
        ...createArticleDto,
        redacteur: foundUser,
        image: image,
      };

      const savedArticle = {
        id: 999,
        ...newArticle,
      };

      articleRepository.create.mockReturnValue(newArticle);
      articleRepository.save.mockResolvedValue(savedArticle);

      // Act
      const result = await service.createArticle(createArticleDto, user, image);

      // Assert
      expect(result).toBeInstanceOf(ArticleStandardDto);
      expect(result).toEqual(
        expect.objectContaining({
          id: 999,
          titre: createArticleDto.titre,
          contenu: createArticleDto.contenu,
          statut: createArticleDto.statut,
          categorie: createArticleDto.categorie,
          image: {
            url: image.url,
          },
          redacteur: {
            email: user.email,
          },
        }),
      );
      expect(usersService.findUserById).toHaveBeenCalledWith(user.sub);
      expect(articleRepository.create).toHaveBeenCalledWith(
        expect.objectContaining({
          ...createArticleDto,
          redacteur: foundUser,
          image: image,
        }),
      );
      expect(articleRepository.save).toHaveBeenCalled();
    });

    /*it('should create article without image when image is null', async () => {
      // Arrange
      const createArticleDto: CreateArticleDto = {
        titre: 'Nouvel Article',
        contenu: 'Contenu du nouvel article',
        statut: statutArticleTypes.BROUILLON,
        categorie: categorieArticleTypes.ACCUEIL,
      };

      const user = { sub: 1, email: 'admin@example.com' };
      const foundUser = usersMock[0];

      jest.spyOn(usersService, 'findUserById').mockResolvedValue(foundUser);

      const newArticle = {
        ...createArticleDto,
        redacteur: foundUser,
        image: null,
      };

      const savedArticle = {
        id: 999,
        ...newArticle,
      };

      articleRepository.create.mockReturnValue(newArticle);
      articleRepository.save.mockResolvedValue(savedArticle);

      // Act
      const result = await service.createArticle(createArticleDto, user, null);

      // Assert
      expect(result).toBeInstanceOf(ArticleStandardDto);
      expect(result).toEqual(
        expect.objectContaining({
          id: 999,
          titre: createArticleDto.titre,
          contenu: createArticleDto.contenu,
          statut: createArticleDto.statut,
          categorie: createArticleDto.categorie,
          image: {
            url: null,
          },
          redacteur: {
            email: user.email,
          },
        }),
      );
      expect(usersService.findUserById).toHaveBeenCalledWith(user.sub);
      expect(articleRepository.create).toHaveBeenCalledWith(
        expect.objectContaining({
          ...createArticleDto,
          redacteur: foundUser,
          image: null,
        }),
      );
      expect(articleRepository.save).toHaveBeenCalled();
    });*/

    /*it('should throw NotFoundException when user is not found', async () => {
      // Arrange
      const createArticleDto: CreateArticleDto = {
        titre: 'Nouvel Article',
        contenu: 'Contenu du nouvel article',
        statut: statutArticleTypes.BROUILLON,
        categorie: categorieArticleTypes.ACCUEIL,
      };

      const user = { sub: 999, email: 'nonexistent@example.com' };

      jest.spyOn(usersService, 'findUserById').mockResolvedValue(null);

      // Act & Assert
      await expect(
        service.createArticle(createArticleDto, user, null),
      ).rejects.toThrow(NotFoundException);
      expect(usersService.findUserById).toHaveBeenCalledWith(user.sub);
    });*/

    it('should handle repository errors during article creation', async () => {
      // Arrange
      const createArticleDto: CreateArticleDto = {
        titre: 'Nouvel Article',
        contenu: 'Contenu du nouvel article',
        statut: statutArticleTypes.BROUILLON,
        categorie: categorieArticleTypes.ACCUEIL,
      };

      const user = { sub: 1, email: 'admin@example.com' };
      const foundUser = membresMock[0];

      jest.spyOn(usersService, 'findUserById').mockResolvedValue(foundUser);

      const errorMessage = 'Could not create article';
      articleRepository.save.mockRejectedValue(new Error(errorMessage));
      articleRepository.create.mockReturnValue({});

      // Act & Assert
      await expect(
        service.createArticle(createArticleDto, user, null),
      ).rejects.toThrow(Error);
      await expect(
        service.createArticle(createArticleDto, user, null),
      ).rejects.toThrow(errorMessage);
    });
  });

  describe('findArticlePublieByCategorie', () => {
    it('should return published articles by category', async () => {
      // Arrange
      const categorie = categorieArticleTypes.ACCUEIL;
      const filteredArticles = articlesMock.filter(
        (article) =>
          article.categorie === categorie &&
          article.statut === statutArticleTypes.PUBLIE,
      );

      articleRepository.find.mockResolvedValue(filteredArticles);

      // Act
      const result = await service.findArticlePublieByCategorie(categorie);

      // Assert
      expect(result).toEqual(filteredArticles);
      expect(articleRepository.find).toHaveBeenCalledWith({
        relations: ['image', 'redacteur'],
        select: {
          id: true,
          titre: true,
          contenu: true,
          statut: true,
          categorie: true,
          image: {
            url: true,
          },
          redacteur: {
            email: true,
          },
        },
        where: {
          categorie: categorie,
          statut: statutArticleTypes.PUBLIE,
        },
      });
    });

    it('should return empty array when no articles match the criteria', async () => {
      // Arrange
      const categorie = 'inexistant' as categorieArticleTypes;

      articleRepository.find.mockResolvedValue([]);

      // Act
      const result = await service.findArticlePublieByCategorie(categorie);

      // Assert
      expect(result).toEqual([]);
      expect(articleRepository.find).toHaveBeenCalled();
    });

    it('should handle repository errors', async () => {
      // Arrange
      const categorie = categorieArticleTypes.ACCUEIL;
      const errorMessage = 'Database connection error';
      articleRepository.find.mockRejectedValue(new Error(errorMessage));

      // Act & Assert
      await expect(
        service.findArticlePublieByCategorie(categorie),
      ).rejects.toThrow(Error);
      await expect(
        service.findArticlePublieByCategorie(categorie),
      ).rejects.toThrow(errorMessage);
    });
  });
});
