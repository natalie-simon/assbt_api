import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategorieActiviteService } from './services/categorie-activite.service';
import { CategorieActivite } from '../database/core/categorie_activite.entity';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import {
  //mockCategoriesActivite,
  mockCategorieActivite,
  mockCreateCategorieActiviteDto,
} from './mocks/categorie-activite.mock';
import { mockUpload } from '../fichiers/mocks/upload.service.mock';

const mockLogger = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  debug: jest.fn(),
};

const mockCategorieActiviteRepository = {
  findOneBy: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
};

describe('CategorieActiviteService', () => {
  let service: CategorieActiviteService;
  let categorieActiviteRepository: Repository<CategorieActivite>;

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
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findCategorieActiviteById', () => {
    it('should return a categorie activite by id', async () => {
      // Arrange
      const categorieId = 1;
      mockCategorieActiviteRepository.findOneBy.mockResolvedValue(
        mockCategorieActivite,
      );

      // Act
      const result = await service.findCategorieActiviteById(categorieId);

      // Assert
      expect(mockCategorieActiviteRepository.findOneBy).toHaveBeenCalledWith({
        id: categorieId,
      });
      expect(result).toEqual(mockCategorieActivite);
    });

    it('should return null if categorie activite is not found', async () => {
      // Arrange
      const categorieId = 999;
      mockCategorieActiviteRepository.findOneBy.mockResolvedValue(null);

      // Act
      const result = await service.findCategorieActiviteById(categorieId);

      // Assert
      expect(mockCategorieActiviteRepository.findOneBy).toHaveBeenCalledWith({
        id: categorieId,
      });
      expect(result).toBeNull();
    });
  });

  describe('createCategorieActivite', () => {
    it('should create and return a new categorie activite with image', async () => {
      // Arrange
      const createDto = mockCreateCategorieActiviteDto;
      const image = mockUpload;
      const newCategorieActivite = { ...mockCategorieActivite, image };

      mockCategorieActiviteRepository.create.mockReturnValue(
        newCategorieActivite,
      );
      mockCategorieActiviteRepository.save.mockResolvedValue(
        newCategorieActivite,
      );

      // Act
      const result = await service.createCategorieActivite(createDto, image);

      // Assert
      expect(mockCategorieActiviteRepository.create).toHaveBeenCalledWith({
        ...createDto,
        image,
      });
      expect(mockCategorieActiviteRepository.save).toHaveBeenCalledWith(
        newCategorieActivite,
      );
      expect(mockLogger.log).toHaveBeenCalled();
      expect(result).toEqual(newCategorieActivite);
    });

    it('should create and return a new categorie activite without image', async () => {
      // Arrange
      const createDto = mockCreateCategorieActiviteDto;
      const newCategorieActivite = { ...mockCategorieActivite, image: null };

      mockCategorieActiviteRepository.create.mockReturnValue(
        newCategorieActivite,
      );
      mockCategorieActiviteRepository.save.mockResolvedValue(
        newCategorieActivite,
      );

      // Act
      const result = await service.createCategorieActivite(createDto, null);

      // Assert
      expect(mockCategorieActiviteRepository.create).toHaveBeenCalledWith({
        ...createDto,
        image: null,
      });
      expect(mockCategorieActiviteRepository.save).toHaveBeenCalledWith(
        newCategorieActivite,
      );
      expect(mockLogger.log).toHaveBeenCalled();
      expect(result).toEqual(newCategorieActivite);
    });
  });
});
