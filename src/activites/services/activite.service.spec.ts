import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActiviteService } from './activite.service';
import { Activite } from '../../database/core/activite.entity';
import { MembreActivite } from '../../database/core/membre_activite.entity';
import { CategorieActiviteService } from '../../categories-activites/services/categorie-activite.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import {
  mockActivites,
  mockCreateActiviteDto,
  mockNewActivite,
  mockActiveUser,
  mockInscriptionActiviteDto,
  mockMembreActivite,
  mockActivitesAvecParticipants,
} from '../mocks/activites.mock';
import { CategorieActiviteServiceMock } from  '../../categories-activites/mocks/categorie-activites.service.mock'
import { mockCategorieActivite } from '../../categories-activites/mocks/categorie-activite.mock';

const mockLogger = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  debug: jest.fn(),
};

const mockActiviteRepository = {
  find: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
};

const mockMembreActiviteRepository = {
  findOne: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
  remove: jest.fn(),
};

describe('ActiviteService', () => {
  let service: ActiviteService;
  let activiteRepository: Repository<Activite>;
  let membreActiviteRepository: Repository<MembreActivite>;
  let categorieActiviteService: CategorieActiviteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActiviteService,
        {
          provide: getRepositoryToken(Activite),
          useValue: mockActiviteRepository,
        },
        {
          provide: getRepositoryToken(MembreActivite),
          useValue: mockMembreActiviteRepository,
        },
        {
          provide: CategorieActiviteService,
          useClass: CategorieActiviteServiceMock,
        },
        {
          provide: WINSTON_MODULE_NEST_PROVIDER,
          useValue: mockLogger,
        },
      ],
    }).compile();

    service = module.get<ActiviteService>(ActiviteService);
    activiteRepository = module.get<Repository<Activite>>(
      getRepositoryToken(Activite),
    );
    membreActiviteRepository = module.get<Repository<MembreActivite>>(
      getRepositoryToken(MembreActivite),
    );
    categorieActiviteService = module.get<CategorieActiviteService>(
      CategorieActiviteService,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllActivites', () => {
    it('should return an array of activites', async () => {
      // Arrange
      mockActiviteRepository.find.mockResolvedValue(mockActivites);

      // Act
      const result = await service.findAllActivites();

      // Assert
      expect(mockActiviteRepository.find).toHaveBeenCalledWith({
        relations: ['categorie'],
      });
      expect(result).toBeDefined();
    });
  });

  describe('createActivite', () => {
    it('should create and return a new activite', async () => {
      // Arrange
      jest
        .spyOn(categorieActiviteService, 'findCategorieActiviteById')
        .mockResolvedValue(mockCategorieActivite);
      mockActiviteRepository.create.mockReturnValue(mockNewActivite);
      mockActiviteRepository.save.mockResolvedValue(mockNewActivite);

      // Act
      const result = await service.createActivite(mockCreateActiviteDto);

      // Assert
      expect(
        categorieActiviteService.findCategorieActiviteById,
      ).toHaveBeenCalledWith(mockCreateActiviteDto.categorie);
      expect(mockActiviteRepository.create).toHaveBeenCalledWith({
        ...mockCreateActiviteDto,
        categorie: mockCategorieActivite,
      });
      expect(mockActiviteRepository.save).toHaveBeenCalledWith(mockNewActivite);
      expect(mockLogger.log).toHaveBeenCalled();
      expect(result).toEqual(mockNewActivite);
    });

    it('should throw an error if categorie is not found', async () => {
      // Arrange
      jest
        .spyOn(categorieActiviteService, 'findCategorieActiviteById')
        .mockResolvedValue(null);

      // Act & Assert
      await expect(
        service.createActivite(mockCreateActiviteDto),
      ).rejects.toThrow('Catégorie non trouvée');
    });
  });

  describe('inscriptionActivite', () => {
    it('should create and return a new inscription', async () => {
      // Arrange
      const activiteId = 1;
      mockActiviteRepository.findOne.mockResolvedValue(mockActivites[0]);
      mockMembreActiviteRepository.findOne.mockResolvedValue(null);
      mockMembreActiviteRepository.create.mockReturnValue(mockMembreActivite);
      mockMembreActiviteRepository.save.mockResolvedValue(mockMembreActivite);

      // Act
      const result = await service.inscriptionActivite(
        activiteId,
        mockInscriptionActiviteDto,
        mockActiveUser,
      );

      // Assert
      expect(mockActiviteRepository.findOne).toHaveBeenCalledWith({
        where: { id: activiteId },
      });
      expect(mockMembreActiviteRepository.findOne).toHaveBeenCalled();
      expect(mockMembreActiviteRepository.create).toHaveBeenCalledWith({
        membre_id: mockActiveUser.sub,
        activite: mockActivites[0],
        observations: mockInscriptionActiviteDto.observations,
      });
      expect(mockMembreActiviteRepository.save).toHaveBeenCalledWith(
        mockMembreActivite,
      );
      expect(mockLogger.log).toHaveBeenCalled();
      expect(result).toEqual(mockMembreActivite);
    });

    it('should throw BadRequestException if activite is not found', async () => {
      // Arrange
      const activiteId = 999;
      mockActiviteRepository.findOne.mockResolvedValue(null);

      // Act & Assert
      await expect(
        service.inscriptionActivite(
          activiteId,
          mockInscriptionActiviteDto,
          mockActiveUser,
        ),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException if membre is already inscrit', async () => {
      // Arrange
      const activiteId = 1;
      mockActiviteRepository.findOne.mockResolvedValue(mockActivites[0]);
      mockMembreActiviteRepository.findOne.mockResolvedValue(
        mockMembreActivite,
      );

      // Act & Assert
      await expect(
        service.inscriptionActivite(
          activiteId,
          mockInscriptionActiviteDto,
          mockActiveUser,
        ),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('desinscriptionActivite', () => {
    it('should remove inscription and return success message', async () => {
      // Arrange
      const activiteId = 1;
      mockActiviteRepository.findOne.mockResolvedValue(mockActivites[0]);
      mockMembreActiviteRepository.findOne.mockResolvedValue(
        mockMembreActivite,
      );
      mockMembreActiviteRepository.remove.mockResolvedValue(mockMembreActivite);

      // Act
      const result = await service.desinscriptionActivite(
        activiteId,
        mockActiveUser,
      );

      // Assert
      expect(mockActiviteRepository.findOne).toHaveBeenCalledWith({
        where: { id: activiteId },
      });
      expect(mockMembreActiviteRepository.findOne).toHaveBeenCalled();
      expect(mockMembreActiviteRepository.remove).toHaveBeenCalledWith(
        mockMembreActivite,
      );
      expect(mockLogger.log).toHaveBeenCalled();
      expect(result).toEqual({
        success: true,
        message: 'Désinscription effectuée avec succès',
      });
    });

    it('should throw BadRequestException if activite is not found', async () => {
      // Arrange
      const activiteId = 999;
      mockActiviteRepository.findOne.mockResolvedValue(null);

      // Act & Assert
      await expect(
        service.desinscriptionActivite(activiteId, mockActiveUser),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException if inscription is not found', async () => {
      // Arrange
      const activiteId = 1;
      mockActiviteRepository.findOne.mockResolvedValue(mockActivites[0]);
      mockMembreActiviteRepository.findOne.mockResolvedValue(null);

      // Act & Assert
      await expect(
        service.desinscriptionActivite(activiteId, mockActiveUser),
      ).rejects.toThrow(BadRequestException);
    });
  });
});
