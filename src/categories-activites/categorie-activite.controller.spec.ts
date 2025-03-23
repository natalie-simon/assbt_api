import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategorieActiviteService } from './services/categorie-activite.service';
import { CategorieActivite } from '../database/core/categorie_activite.entity';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import {
  mockCategorieActivite,
  mockCreateCategorieActiviteDto,
} from './mocks/categorie-activite.mock';
import { mockUpload } from '../fichiers/mocks/upload.service.mock';
import { CategorieActiviteController } from './categorie-activite.controller';
import { FichierService } from '../fichiers/services/fichier.service';
import { CreateCategorieActiviteDto } from './dtos/create-categorie-activite.dto';
import { Fichier } from '../database/core/fichier.entity';
import { mockUploadedFile } from '../fichiers/mocks/uploads.mock';

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

describe('CategorieActiviteController', () => {
  let controller: CategorieActiviteController;
  let categorieActiviteService: CategorieActiviteService;
  let fichierService: FichierService;

  const mockCategorieActiviteService = {
    createCategorieActivite: jest.fn(),
  };

  const mockFichierService = {
    uploadFile: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategorieActiviteController],
      providers: [
        {
          provide: CategorieActiviteService,
          useValue: mockCategorieActiviteService,
        },
        {
          provide: FichierService,
          useValue: mockFichierService,
        },
      ],
    }).compile();

    controller = module.get<CategorieActiviteController>(CategorieActiviteController);
    categorieActiviteService = module.get<CategorieActiviteService>(CategorieActiviteService);
    fichierService = module.get<FichierService>(FichierService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createCategorieActivite', () => {
    it('should create a new category with image', async () => {
      mockFichierService.uploadFile.mockResolvedValue(mockUpload);
      mockCategorieActiviteService.createCategorieActivite.mockResolvedValue({
        ...mockCategorieActivite,
        image: mockUpload,
      });

      const result = await controller.createCategorieActivite(mockCreateCategorieActiviteDto, mockUploadedFile);

      expect(mockFichierService.uploadFile).toHaveBeenCalledWith(mockUploadedFile);
      expect(mockCategorieActiviteService.createCategorieActivite).toHaveBeenCalledWith(
        mockCreateCategorieActiviteDto,
        mockUpload,
      );
      expect(result).toEqual({
        ...mockCategorieActivite,
        image: mockUpload,
      });
    });

    it('should create a new category without image', async () => {
      mockCategorieActiviteService.createCategorieActivite.mockResolvedValue(mockCategorieActivite);

      const result = await controller.createCategorieActivite(mockCreateCategorieActiviteDto, null);

      expect(mockCategorieActiviteService.createCategorieActivite).toHaveBeenCalledWith(
        mockCreateCategorieActiviteDto,
        null,
      );
      expect(result).toEqual(mockCategorieActivite);
    });

    /*it('should handle upload errors', async () => {
      mockFichierService.uploadFile.mockRejectedValue(new Error('Upload failed'));

      await expect(controller.createCategorieActivite(mockCreateCategorieActiviteDto, mockUploadedFile)).rejects.toThrow(
        'Upload failed',
      );
      expect(mockFichierService.uploadFile).toHaveBeenCalledWith(mockUploadedFile);
      expect(mockCategorieActiviteService.createCategorieActivite).not.toHaveBeenCalled();
    });*/
  });
});
