import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../../users/services/users.service';
import { User } from '../../database/core/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../users/dtos/createuser.dto';
import { CreateUserProvider } from '../../auth/services/create-user.provider';
import { FindOneByEmailProvider } from '../../auth/services/find-one-by-email.provider';
import { BadRequestException } from '@nestjs/common';
import { CreateUserProviderMock } from '../../auth/mocks/create-user.provider.mock';
import { FindOneByEmailProviderMock } from '../../auth/mocks/find-one-by-email.provider.mock';


describe('UsersService', () => {
  let service: UsersService;
  let usersRepository: Repository<User>;
  let createUserProvider: CreateUserProvider;
  let findOneByEmailProvider: FindOneByEmailProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
        {
          provide: CreateUserProvider,
          useClass: CreateUserProviderMock,
        },
        {
          provide: FindOneByEmailProvider,
          useClass: FindOneByEmailProviderMock,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    usersRepository = module.get<Repository<User>>(getRepositoryToken(User));
    createUserProvider = module.get<CreateUserProvider>(CreateUserProvider);
    findOneByEmailProvider = module.get<FindOneByEmailProvider>(
      FindOneByEmailProvider,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createUser', () => {
    /*it('should create a user with correct key', async () => {
      const dto: CreateUserDto = {
        email: 'test@example.com',
        mot_de_passe: 'password',
        clef: process.env.CLEF,
      };

      const createUserSpy = jest
        .spyOn(createUserProvider, 'createUser')
        .mockResolvedValue({accessToken: 'moijmoijmoij'});

      const result = await service.createUser(dto);

      expect(createUserSpy).toHaveBeenCalledWith(dto);
      expect(result).toBeInstanceOf(User);
    });*/

    it('should throw BadRequestException with incorrect key', async () => {
      const dto: CreateUserDto = {
        email: 'test@example.com',
        mot_de_passe: 'password',
        clef: 'tototo',
      };

      await expect(service.createUser(dto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('findOneByEmail', () => {
    it('should return a user by email', async () => {
      const email = 'test@example.com';
      const user = new User();
      jest.spyOn(usersRepository, 'findOne').mockResolvedValue(user);

      const result = await service.findOneByEmail(email);

      expect(result).toBe(user);
    });
  });

  describe('findAllUsers', () => {
    it('should return all users', async () => {
      const users = [new User(), new User()];
      jest.spyOn(usersRepository, 'find').mockResolvedValue(users);

      const result = await service.findAllUsers();

      expect(result).toBe(users);
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const user = new User();
      jest.spyOn(usersRepository, 'save').mockResolvedValue(user);

      const result = await service.update(user);

      expect(result).toBe(user);
    });
  });

  describe('findUserById', () => {
    it('should return a user by id', async () => {
      const id = 1;
      const user = new User();
      jest.spyOn(usersRepository, 'findOne').mockResolvedValue(user);

      const result = await service.findUserById(id);

      expect(result).toBe(user);
    });
  });

  /*describe('findOneUserByEmailProvider', () => {
    it('should return a user by email using provider', async () => {
      const email = 'test@example.com';
      const user = new User();
      jest
        .spyOn(findOneByEmailProvider, 'findOneUserByEmailProvider')
        .mockResolvedValue(user);

      const result = await service.findOneUserByEmailProvider(email);

      expect(result).toBe(user);
    });
  });*/
});
