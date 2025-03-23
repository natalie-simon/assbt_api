import { Test, TestingModule } from '@nestjs/testing';
import { ActiviteService } from './activite.service';
import { CategorieActiviteService } from '../../categories-activites/services/categorie-activite.service';
import { MembresService } from '../../membres/services/membres.service';
import { Repository } from 'typeorm';
import { Activite } from '../../database/core/activite.entity';
import { MembreActivite } from '../../database/core/membre_activite.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { BadRequestException } from '@nestjs/common';
import { mockActivites, mockCategorieActivite, mockMembreActivite } from '../mocks/activites.mock';
import { CreateActiviteDto } from '../dtos/create-activite.dto';
import { InscriptionActiviteDto } from '../dtos/inscription-activite.dto';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';
import { membresMock } from '../../membres/mocks/membres.mock';
import { plainToInstance } from 'class-transformer';
import { ActiviteAgendaDto } from '../dtos/activite-agenda.dto';

describe('ActiviteService', () => {
  let service: ActiviteService;
  let categorieActiviteService: CategorieActiviteService;
  let membresService: MembresService;
  let activiteRepository: Repository<Activite>;
  let membreActiviteRepository: Repository<MembreActivite>;
  let logger: any;

  const mockCategorieActiviteService = {
    findCategorieActiviteById: jest.fn(),
  };

  const mockMembresService = {
    findUserById: jest.fn(),
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

  const mockLogger = {
    log: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActiviteService,
        {
          provide: CategorieActiviteService,
          useValue: mockCategorieActiviteService,
        },
        {
          provide: MembresService,
          useValue: mockMembresService,
        },
        {
          provide: getRepositoryToken(Activite),
          useValue: mockActiviteRepository,
        },
        {
          provide: getRepositoryToken(MembreActivite),
          useValue: mockMembreActiviteRepository,
        },
        {
          provide: WINSTON_MODULE_NEST_PROVIDER,
          useValue: mockLogger,
        },
      ],
    }).compile();

    service = module.get<ActiviteService>(ActiviteService);
    categorieActiviteService = module.get<CategorieActiviteService>(CategorieActiviteService);
    membresService = module.get<MembresService>(MembresService);
    activiteRepository = module.get<Repository<Activite>>(getRepositoryToken(Activite));
    membreActiviteRepository = module.get<Repository<MembreActivite>>(getRepositoryToken(MembreActivite));
    logger = module.get(WINSTON_MODULE_NEST_PROVIDER);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllActivites', () => {
    it('should return all activities', async () => {
      mockActiviteRepository.find.mockResolvedValue(mockActivites);

      const result = await service.findAllActivites();
      const expectedResult = plainToInstance(ActiviteAgendaDto, mockActivites, {
        excludeExtraneousValues: true,
      });

      expect(mockActiviteRepository.find).toHaveBeenCalledWith({
        relations: ['categorie'],
      });
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOneActiviteWithFilters', () => {
    it('should return activity with participants when participants filter is true', async () => {
      const mockActivite = {
        ...mockActivites[0],
        participants: [mockMembreActivite],
      };

      mockActiviteRepository.findOne.mockResolvedValue(mockActivite);

      const result = await service.findOneActiviteWithFilters(1, true);

      expect(mockActiviteRepository.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
        relations: ['categorie', 'participants', 'participants.membre', 'participants.membre.profil'],
        select: expect.any(Object),
      });
      expect(result).toEqual(mockActivite);
    });

    it('should return activity without participants when participants filter is false', async () => {
      mockActiviteRepository.findOne.mockResolvedValue(mockActivites[0]);

      const result = await service.findOneActiviteWithFilters(1, false);

      expect(mockActiviteRepository.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
        relations: ['categorie'],
        select: expect.any(Object),
      });
      expect(result).toEqual(mockActivites[0]);
    });

    it('should throw BadRequestException when activity is not found', async () => {
      mockActiviteRepository.findOne.mockResolvedValue(null);

      await expect(service.findOneActiviteWithFilters(1, false)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('createActivite', () => {
    it('should create a new activity', async () => {
      const createActiviteDto: CreateActiviteDto = {
        titre: 'Nouvelle activité',
        contenu: 'Description de la nouvelle activité',
        date_heure_debut: new Date(),
        date_heure_fin: new Date(),
        categorie: 1,
      };

      mockCategorieActiviteService.findCategorieActiviteById.mockResolvedValue(mockCategorieActivite);
      mockActiviteRepository.create.mockReturnValue({
        ...createActiviteDto,
        categorie: mockCategorieActivite,
      });
      mockActiviteRepository.save.mockResolvedValue({
        id: 1,
        ...createActiviteDto,
        categorie: mockCategorieActivite,
      });

      const result = await service.createActivite(createActiviteDto);

      expect(mockCategorieActiviteService.findCategorieActiviteById).toHaveBeenCalledWith(1);
      expect(mockActiviteRepository.create).toHaveBeenCalledWith({
        ...createActiviteDto,
        categorie: mockCategorieActivite,
      });
      expect(mockActiviteRepository.save).toHaveBeenCalled();
      expect(mockLogger.log).toHaveBeenCalled();
      expect(result).toBeDefined();
    });

    it('should throw error when category is not found', async () => {
      const createActiviteDto: CreateActiviteDto = {
        titre: 'Nouvelle activité',
        contenu: 'Description de la nouvelle activité',
        date_heure_debut: new Date(),
        date_heure_fin: new Date(),
        categorie: 1,
      };

      mockCategorieActiviteService.findCategorieActiviteById.mockResolvedValue(null);

      await expect(service.createActivite(createActiviteDto)).rejects.toThrow(
        'Catégorie non trouvée',
      );
    });
  });

  describe('inscriptionActivite', () => {
    it('should create a new inscription', async () => {
      const inscriptionDto: InscriptionActiviteDto = {
        observations: 'Test inscription',
      };

      const activeUser: ActiveUserData = {
        sub: 1,
        email: 'test@test.com',
      };

      mockActiviteRepository.findOne.mockResolvedValue(mockActivites[0]);
      mockMembresService.findUserById.mockResolvedValue(membresMock[0]);
      mockMembreActiviteRepository.findOne.mockResolvedValue(null);
      mockMembreActiviteRepository.create.mockReturnValue(mockMembreActivite);
      mockMembreActiviteRepository.save.mockResolvedValue(mockMembreActivite);

      const result = await service.inscriptionActivite(1, inscriptionDto, activeUser);

      expect(mockActiviteRepository.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(mockMembresService.findUserById).toHaveBeenCalledWith(1);
      expect(mockMembreActiviteRepository.create).toHaveBeenCalledWith({
        membre: membresMock[0],
        activite: mockActivites[0],
        observations: inscriptionDto.observations,
      });
      expect(mockMembreActiviteRepository.save).toHaveBeenCalled();
      expect(mockLogger.log).toHaveBeenCalled();
      expect(result).toEqual(mockMembreActivite);
    });

    it('should throw BadRequestException when activity is not found', async () => {
      const inscriptionDto: InscriptionActiviteDto = {
        observations: 'Test inscription',
      };

      const activeUser: ActiveUserData = {
        sub: 1,
        email: 'test@test.com',
      };

      mockActiviteRepository.findOne.mockResolvedValue(null);

      await expect(service.inscriptionActivite(1, inscriptionDto, activeUser)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw BadRequestException when user is already registered', async () => {
      const inscriptionDto: InscriptionActiviteDto = {
        observations: 'Test inscription',
      };

      const activeUser: ActiveUserData = {
        sub: 1,
        email: 'test@test.com',
      };

      mockActiviteRepository.findOne.mockResolvedValue(mockActivites[0]);
      mockMembresService.findUserById.mockResolvedValue(membresMock[0]);
      mockMembreActiviteRepository.findOne.mockResolvedValue(mockMembreActivite);

      await expect(service.inscriptionActivite(1, inscriptionDto, activeUser)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('desinscriptionActivite', () => {
    it('should remove inscription successfully', async () => {
      const activeUser: ActiveUserData = {
        sub: 1,
        email: 'test@test.com',
      };

      mockActiviteRepository.findOne.mockResolvedValue(mockActivites[0]);
      mockMembresService.findUserById.mockResolvedValue(membresMock[0]);
      mockMembreActiviteRepository.findOne.mockResolvedValue(mockMembreActivite);
      mockMembreActiviteRepository.remove.mockResolvedValue(undefined);

      const result = await service.desinscriptionActivite(1, activeUser);

      expect(mockActiviteRepository.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(mockMembresService.findUserById).toHaveBeenCalledWith(1);
      expect(mockMembreActiviteRepository.remove).toHaveBeenCalledWith(mockMembreActivite);
      expect(mockLogger.log).toHaveBeenCalled();
      expect(result).toEqual({
        success: true,
        message: 'Désinscription effectuée avec succès',
      });
    });

    it('should throw BadRequestException when activity is not found', async () => {
      const activeUser: ActiveUserData = {
        sub: 1,
        email: 'test@test.com',
      };

      mockActiviteRepository.findOne.mockResolvedValue(null);

      await expect(service.desinscriptionActivite(1, activeUser)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw BadRequestException when user is not registered', async () => {
      const activeUser: ActiveUserData = {
        sub: 1,
        email: 'test@test.com',
      };

      mockActiviteRepository.findOne.mockResolvedValue(mockActivites[0]);
      mockMembresService.findUserById.mockResolvedValue(membresMock[0]);
      mockMembreActiviteRepository.findOne.mockResolvedValue(null);

      await expect(service.desinscriptionActivite(1, activeUser)).rejects.toThrow(
        BadRequestException,
      );
    });
  });
});
