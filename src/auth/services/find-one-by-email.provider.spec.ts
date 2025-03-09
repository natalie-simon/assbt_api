import { Test, TestingModule } from '@nestjs/testing';
import { FindOneByEmailProvider } from './find-one-by-email.provider';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../database/core/membre.entity';
import { RequestTimeoutException, UnauthorizedException } from '@nestjs/common';

describe('FindOneByEmailProvider', () => {
  let provider: FindOneByEmailProvider;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneByEmailProvider,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    provider = module.get<FindOneByEmailProvider>(FindOneByEmailProvider);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  describe('findOneUserByEmailProvider', () => {
    it('should return a user if found', async () => {
      const email = 'test@example.com';
      const user = new User();
      user.email = email;

      jest.spyOn(userRepository, 'findOneBy').mockResolvedValue(user);

      const result = await provider.findOneUserByEmailProvider(email);

      expect(result).toBe(user);
    });

    it('should throw UnauthorizedException if user not found', async () => {
      const email = 'nonexistent@example.com';

      jest.spyOn(userRepository, 'findOneBy').mockResolvedValue(undefined);

      await expect(provider.findOneUserByEmailProvider(email)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should throw RequestTimeoutException on error', async () => {
      const email = 'test@example.com';

      jest
        .spyOn(userRepository, 'findOneBy')
        .mockRejectedValue(new Error('Database error'));

      await expect(provider.findOneUserByEmailProvider(email)).rejects.toThrow(
        RequestTimeoutException,
      );
    });
  });
});
