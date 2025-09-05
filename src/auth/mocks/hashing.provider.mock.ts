import { HashingProvider } from '../services/hashing.provider';

/**
 * Mock class for HashingProvider
 */
export class HashingProviderMock implements HashingProvider {
  /**
   * Mock method for hashPassword
   * @param data
   * @returns
   */
  async hashPassword(data: string | Buffer): Promise<string> {
    return `hashed_${data}`;
  }

  /**
   * Mock method for comparePassword
   * @param data
   * @param encrypted
   * @returns
   */
  async comparePassword(
    data: string | Buffer,
    encrypted: string,
  ): Promise<boolean> {
    return `hashed_${data}` === encrypted;
  }
}
