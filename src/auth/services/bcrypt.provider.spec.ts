import { Test, TestingModule } from '@nestjs/testing';
import { BcryptProvider } from './bcrypt.provider';
import * as bcrypt from 'bcrypt';

describe('BcryptProvider', () => {
  let provider: BcryptProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcryptProvider],
    }).compile();

    provider = module.get<BcryptProvider>(BcryptProvider);
  });

  describe('hashPassword', () => {
    it('should return a hashed password', async () => {
      const password = 'testPassword';
      const hashedPassword = await provider.hashPassword(password);

      // Check if the hashed password is a string and not the same as the original password
      expect(hashedPassword).toBeDefined();
      expect(typeof hashedPassword).toBe('string');
      expect(hashedPassword).not.toBe(password);
    });
  });

  describe('comparePassword', () => {
    it('should return true for a correct password', async () => {
      const password = 'testPassword';
      const hashedPassword = await bcrypt.hash(
        password,
        await bcrypt.genSalt(),
      );
      const isMatch = await provider.comparePassword(password, hashedPassword);

      expect(isMatch).toBe(true);
    });

    it('should return false for an incorrect password', async () => {
      const password = 'testPassword';
      const wrongPassword = 'wrongPassword';
      const hashedPassword = await bcrypt.hash(
        password,
        await bcrypt.genSalt(),
      );
      const isMatch = await provider.comparePassword(
        wrongPassword,
        hashedPassword,
      );

      expect(isMatch).toBe(false);
    });
  });
});
