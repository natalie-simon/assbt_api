import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import { Repository } from 'typeorm';
import { Article } from '../../database/core/article.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MembresService } from '../../membres/services/membres.service';
import { CreateArticleDto } from '../dtos/create-article.dto';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';
import { Fichier } from '../../database/core/fichier.entity';
import { ArticleStandardDto } from '../dtos/article-standard.dto';
import { categorieArticleTypes } from '../enums/categorie-article-types.enum';
import { statutArticleTypes } from '../enums/statut-article-types.enum';
import { articlesMock, articlesStandardMock } from '../mocks/articles.mock';
import { membresMock } from '../../membres/mocks/membres.mock';

describe('ArticlesService', () => {
  let service: ArticlesService;
  let articleRepository: Repository<Article>;
  let membresService: MembresService;

  const mockArticleRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
  };

  const mockMembresService = {
    findUserById: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: getRepositoryToken(Article),
          useValue: mockArticleRepository,
        },
        {
          provide: MembresService,
          useValue: mockMembresService,
        },
      ],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
    articleRepository = module.get<Repository<Article>>(getRepositoryToken(Article));
    membresService = module.get<MembresService>(MembresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createArticle', () => {
    it('should create a new article with image', async () => {
      const createArticleDto: CreateArticleDto = {
        titre: 'Nouvel article',
        contenu: 'Contenu de l\'article',
        statut: statutArticleTypes.PUBLIE,
        categorie: categorieArticleTypes.ACCUEIL,
      };

      const activeUser: ActiveUserData = {
        sub: 1,
        email: 'admin@example.com',
      };

      const mockImage: Fichier = {
        id: 1,
        nom: 'test-image.jpg',
        url: 'https://test.com/test-image.jpg',
        type: 'image',
        mime: 'image/jpeg',
        taille: 1024,
        dateCreation: new Date(),
        dateMaj: new Date(),
      };

      mockMembresService.findUserById.mockResolvedValue(membresMock[0]);
      mockArticleRepository.create.mockReturnValue({
        ...createArticleDto,
        redacteur: membresMock[0],
        image: mockImage,
      });
      mockArticleRepository.save.mockResolvedValue({
        id: 1,
        ...createArticleDto,
        redacteur: membresMock[0],
        image: mockImage,
      });

      const result = await service.createArticle(createArticleDto, activeUser, mockImage);

      expect(mockMembresService.findUserById).toHaveBeenCalledWith(1);
      expect(mockArticleRepository.create).toHaveBeenCalledWith({
        ...createArticleDto,
        redacteur: membresMock[0],
        image: mockImage,
      });
      expect(mockArticleRepository.save).toHaveBeenCalled();
      expect(result).toBeInstanceOf(ArticleStandardDto);
      expect(result.id).toBe(1);
      expect(result.titre).toBe(createArticleDto.titre);
      expect(result.image.url).toBe(mockImage.url);
      expect(result.redacteur.email).toBe(membresMock[0].email);
    });

    it('should create a new article without image', async () => {
      const createArticleDto: CreateArticleDto = {
        titre: 'Nouvel article',
        contenu: 'Contenu de l\'article',
        statut: statutArticleTypes.PUBLIE,
        categorie: categorieArticleTypes.ACCUEIL,
      };

      const activeUser: ActiveUserData = {
        sub: 1,
        email: 'admin@example.com',
      };

      mockMembresService.findUserById.mockResolvedValue(membresMock[0]);
      mockArticleRepository.create.mockReturnValue({
        ...createArticleDto,
        redacteur: membresMock[0],
        image: null,
      });
      mockArticleRepository.save.mockResolvedValue({
        id: 1,
        ...createArticleDto,
        redacteur: membresMock[0],
        image: null,
      });

      const result = await service.createArticle(createArticleDto, activeUser, null);

      expect(mockMembresService.findUserById).toHaveBeenCalledWith(1);
      expect(mockArticleRepository.create).toHaveBeenCalledWith({
        ...createArticleDto,
        redacteur: membresMock[0],
        image: null,
      });
      expect(mockArticleRepository.save).toHaveBeenCalled();
      expect(result).toBeInstanceOf(ArticleStandardDto);
      expect(result.id).toBe(1);
      expect(result.titre).toBe(createArticleDto.titre);
      expect(result.image.url).toBeNull();
      expect(result.redacteur.email).toBe(membresMock[0].email);
    });
  });

  describe('findAllArticles', () => {
    it('should return all articles', async () => {
      mockArticleRepository.find.mockResolvedValue(articlesMock);

      const result = await service.findAllArticles();

      expect(mockArticleRepository.find).toHaveBeenCalledWith({
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
      expect(result).toEqual(articlesMock);
    });
  });

  describe('findArticleById', () => {
    it('should return an article by id', async () => {
      mockArticleRepository.findOne.mockResolvedValue(articlesMock[0]);

      const result = await service.findArticleById(1);

      expect(mockArticleRepository.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(result).toEqual(articlesMock[0]);
    });

    it('should return null when article is not found', async () => {
      mockArticleRepository.findOne.mockResolvedValue(null);

      const result = await service.findArticleById(999);

      expect(mockArticleRepository.findOne).toHaveBeenCalledWith({
        where: { id: 999 },
      });
      expect(result).toBeNull();
    });
  });

  describe('findArticlePublieByCategorie', () => {
    it('should return published articles by category', async () => {
      const categorie = categorieArticleTypes.ACCUEIL;
      const filteredArticles = articlesMock.filter(
        (article) =>
          article.categorie === categorie &&
          article.statut === statutArticleTypes.PUBLIE,
      );

      mockArticleRepository.find.mockResolvedValue(filteredArticles);

      const result = await service.findArticlePublieByCategorie(categorie);

      expect(mockArticleRepository.find).toHaveBeenCalledWith({
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
        where: { categorie: categorie, statut: statutArticleTypes.PUBLIE },
      });
      expect(result).toEqual(filteredArticles);
    });

    it('should return empty array when no published articles found for category', async () => {
      const categorie = categorieArticleTypes.ACCUEIL;
      mockArticleRepository.find.mockResolvedValue([]);

      const result = await service.findArticlePublieByCategorie(categorie);

      expect(mockArticleRepository.find).toHaveBeenCalledWith({
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
        where: { categorie: categorie, statut: statutArticleTypes.PUBLIE },
      });
      expect(result).toEqual([]);
    });
  });
}); 