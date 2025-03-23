import { Test, TestingModule } from '@nestjs/testing';
import { CategorieActiviteService } from './categorie-activite.service';
import { Repository } from 'typeorm';
import { CategorieActivite } from '../../database/core/categorie_activite.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { CreateCategorieActiviteDto } from '../dtos/create-categorie-activite.dto';
import { Fichier } from '../../database/core/fichier.entity';
import { mockCategorieActivite, mockCreateCategorieActiviteDto } from '../mocks/categorie-activite.mock';

describe('CategorieActiviteService', () => {
  let service: CategorieActiviteService;
  let categorieActiviteRepository: Repository<CategorieActivite>;
  let logger: any;

  const mockCategorieActiviteRepository = {
    create: jest.fn(),
    save: jest.fn(),
    findOneBy: jest.fn(),
  };

  const mockLogger = {
    log: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategorieActiviteService,
        {
          provide: getRepositoryToken(CategorieActivite),
          useValue: mockCategorieActiviteRepository,
        },
        {
          provide: WINSTON_MODULE_NEST_PROVIDER,
          useValue: mockLogger,
        },
      ],
    }).compile();

    service = module.get<CategorieActiviteService>(CategorieActiviteService);
    categorieActiviteRepository = module.get<Repository<CategorieActivite>>(
      getRepositoryToken(CategorieActivite),
    );
    logger = module.get(WINSTON_MODULE_NEST_PROVIDER);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createCategorieActivite', () => {
    it('should create a new category activity', async () => {
      const mockImage = {
        id: 1,
        nom: 'test-image.jpg',
        url: 'https://test.com/test-image.jpg',
        type: 'image',
        mime: 'image/jpeg',
        taille: 1024,
      } as Fichier;

      mockCategorieActiviteRepository.create.mockReturnValue({
        ...mockCreateCategorieActiviteDto,
        image: mockImage,
      });
      mockCategorieActiviteRepository.save.mockResolvedValue({
        id: 1,
        ...mockCreateCategorieActiviteDto,
        image: mockImage,
      });

      const result = await service.createCategorieActivite(
        mockCreateCategorieActiviteDto,
        mockImage,
      );

      expect(mockCategorieActiviteRepository.create).toHaveBeenCalledWith({
        ...mockCreateCategorieActiviteDto,
        image: mockImage,
      });
      expect(mockCategorieActiviteRepository.save).toHaveBeenCalled();
      expect(mockLogger.log).toHaveBeenCalled();
      expect(result).toBeDefined();
      expect(result.id).toBe(1);
      expect(result.lbl_categorie).toBe(mockCreateCategorieActiviteDto.lbl_categorie);
    });

    it('should create a new category activity without image', async () => {
      mockCategorieActiviteRepository.create.mockReturnValue(mockCreateCategorieActiviteDto);
      mockCategorieActiviteRepository.save.mockResolvedValue({
        id: 1,
        ...mockCreateCategorieActiviteDto,
      });

      const result = await service.createCategorieActivite(
        mockCreateCategorieActiviteDto,
        null,
      );

      expect(mockCategorieActiviteRepository.create).toHaveBeenCalledWith({
        ...mockCreateCategorieActiviteDto,
        image: null,
      });
      expect(mockCategorieActiviteRepository.save).toHaveBeenCalled();
      expect(mockLogger.log).toHaveBeenCalled();
      expect(result).toBeDefined();
      expect(result.id).toBe(1);
      expect(result.lbl_categorie).toBe(mockCreateCategorieActiviteDto.lbl_categorie);
    });
  });

  describe('findCategorieActiviteById', () => {
    it('should return a category activity by id', async () => {
      mockCategorieActiviteRepository.findOneBy.mockResolvedValue(mockCategorieActivite);

      const result = await service.findCategorieActiviteById(1);

      expect(mockCategorieActiviteRepository.findOneBy).toHaveBeenCalledWith({ id: 1 });
      expect(result).toEqual(mockCategorieActivite);
    });

    it('should return null when category activity is not found', async () => {
      mockCategorieActiviteRepository.findOneBy.mockResolvedValue(null);

      const result = await service.findCategorieActiviteById(999);

      expect(mockCategorieActiviteRepository.findOneBy).toHaveBeenCalledWith({ id: 999 });
      expect(result).toBeNull();
    });
  });
}); 