import { Test, TestingModule } from '@nestjs/testing';
import { HashingProvider } from './hashing.provider';
import { HashingProviderMock } from '../mocks/hashing.provider.mock';

// Mock implementation of HashingProvider for testing


describe('HashingProvider', () => {
  let provider: HashingProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: HashingProvider,
          useClass: HashingProviderMock,
        },
      ],
    }).compile();

    provider = module.get<HashingProvider>(HashingProvider);
  });

  describe('hashPassword', () => {
    it('should return a hashed password', async () => {
      const password = 'testPassword';
      const hashedPassword = await provider.hashPassword(password);

      expect(hashedPassword).toBe(`hashed_${password}`);
    });
  });

  describe('comparePassword', () => {
    it('should return true for a correct password', async () => {
      const password = 'testPassword';
      const hashedPassword = `hashed_${password}`;
      const isMatch = await provider.comparePassword(password, hashedPassword);

      expect(isMatch).toBe(true);
    });

    it('should return false for an incorrect password', async () => {
      const password = 'testPassword';
      const wrongPassword = 'wrongPassword';
      const hashedPassword = `hashed_${password}`;
      const isMatch = await provider.comparePassword(
        wrongPassword,
        hashedPassword,
      );

      expect(isMatch).toBe(false);
    });
  });
});
