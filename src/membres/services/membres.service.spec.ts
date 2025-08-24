import { Test, TestingModule } from '@nestjs/testing';
import { MembresService } from './membres.service';
import { Repository } from 'typeorm';
import { Membre } from '../../database/core/membre.entity';
import { Profil } from '../../database/core/profil.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserProvider } from '../../auth/services/create-user.provider';
import { FindOneByEmailProvider } from '../../auth/services/find-one-by-email.provider';
import { CreateUserDto } from '../dtos/createMembre.dto';
import { BadRequestException } from '@nestjs/common';
import { membresMock } from '../mocks/membres.mock';

describe('MembresService', () => {
  let service: MembresService;
  let usersRepository: Repository<Membre>;
  let profilRepository: Repository<Profil>;
  let createUserProvider: CreateUserProvider;
  let findOneByEmailProvider: FindOneByEmailProvider;

  const mockUsersRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    createQueryBuilder: jest.fn(),
  };

  const mockProfilRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
  };

  const mockCreateUserProvider = {
    createUser: jest.fn(),
  };

  const mockFindOneByEmailProvider = {
    findOneUserByEmailProvider: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MembresService,
        {
          provide: getRepositoryToken(Membre),
          useValue: mockUsersRepository,
        },
        {
          provide: getRepositoryToken(Profil),
          useValue: mockProfilRepository,
        },
        {
          provide: CreateUserProvider,
          useValue: mockCreateUserProvider,
        },
        {
          provide: FindOneByEmailProvider,
          useValue: mockFindOneByEmailProvider,
        },
      ],
    }).compile();

    service = module.get<MembresService>(MembresService);
    usersRepository = module.get<Repository<Membre>>(
      getRepositoryToken(Membre),
    );
    profilRepository = module.get<Repository<Profil>>(
      getRepositoryToken(Profil),
    );
    createUserProvider = module.get<CreateUserProvider>(CreateUserProvider);
    findOneByEmailProvider = module.get<FindOneByEmailProvider>(
      FindOneByEmailProvider,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a new user with correct key', async () => {
      const createUserDto: CreateUserDto = {
        email: 'test@test.com',
        mot_de_passe: 'password123',
        clef: process.env.CLEF,
      };

      mockCreateUserProvider.createUser.mockResolvedValue(membresMock[0]);

      const result = await service.createUser(createUserDto);

      expect(mockCreateUserProvider.createUser).toHaveBeenCalledWith(
        createUserDto,
      );
      expect(result).toEqual(membresMock[0]);
    });

    it('should throw BadRequestException with incorrect key', async () => {
      const createUserDto: CreateUserDto = {
        email: 'test@test.com',
        mot_de_passe: 'password123',
        clef: 'wrong_key',
      };

      await expect(service.createUser(createUserDto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('findOneByEmail', () => {
    it('should return user by email', async () => {
      mockUsersRepository.findOne.mockResolvedValue(membresMock[0]);

      const result = await service.findOneByEmail('admin@example.com');

      expect(mockUsersRepository.findOne).toHaveBeenCalledWith({
        where: { email: 'admin@example.com' },
      });
      expect(result).toEqual(membresMock[0]);
    });

    it('should return null when user is not found', async () => {
      mockUsersRepository.findOne.mockResolvedValue(null);

      const result = await service.findOneByEmail('nonexistent@example.com');

      expect(mockUsersRepository.findOne).toHaveBeenCalledWith({
        where: { email: 'nonexistent@example.com' },
      });
      expect(result).toBeNull();
    });
  });

  describe('findAllUsers', () => {
    it('should return all users with their roles', async () => {
      mockUsersRepository.find.mockResolvedValue(membresMock);

      const result = await service.findAllUsers();

      expect(mockUsersRepository.find).toHaveBeenCalledWith({
        relations: ['role'],
      });
      expect(result).toEqual(membresMock);
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const updatedUser = {
        ...membresMock[0],
        email: 'updated@example.com',
      };

      mockUsersRepository.save.mockResolvedValue(updatedUser);

      const result = await service.update(updatedUser);

      expect(mockUsersRepository.save).toHaveBeenCalledWith(updatedUser);
      expect(result).toEqual(updatedUser);
    });
  });

  describe('findUserById', () => {
    it('should return user by id', async () => {
      mockUsersRepository.findOne.mockResolvedValue(membresMock[0]);

      const result = await service.findUserById(1);

      expect(mockUsersRepository.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(result).toEqual(membresMock[0]);
    });

    it('should return null when user is not found', async () => {
      mockUsersRepository.findOne.mockResolvedValue(null);

      const result = await service.findUserById(999);

      expect(mockUsersRepository.findOne).toHaveBeenCalledWith({
        where: { id: 999 },
      });
      expect(result).toBeNull();
    });
  });

  describe('findOneUserByEmailProvider', () => {
    it('should return user by email using provider', async () => {
      mockFindOneByEmailProvider.findOneUserByEmailProvider.mockResolvedValue(
        membresMock[0],
      );

      const result =
        await service.findOneUserByEmailProvider('admin@example.com');

      expect(
        mockFindOneByEmailProvider.findOneUserByEmailProvider,
      ).toHaveBeenCalledWith('admin@example.com');
      expect(result).toEqual(membresMock[0]);
    });
  });

  describe('findProfileByUserIdWithFilters', () => {
    it('should return user profile with activities', async () => {
      const mockUser = {
        ...membresMock[0],
        inscriptions: [],
      };

      mockUsersRepository.createQueryBuilder.mockReturnValue({
        select: jest.fn().mockReturnThis(),
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        getOne: jest.fn().mockResolvedValue(mockUser),
      });

      const result = await service.findProfileByUserIdWithFilters(1, true);

      expect(result).toEqual(mockUser);
    });

    it('should return user profile without activities', async () => {
      const mockUser = {
        ...membresMock[0],
        inscriptions: [],
      };

      mockUsersRepository.createQueryBuilder.mockReturnValue({
        select: jest.fn().mockReturnThis(),
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        getOne: jest.fn().mockResolvedValue(mockUser),
      });

      const result = await service.findProfileByUserIdWithFilters(1, false);

      expect(result).toEqual(mockUser);
    });
  });
});
