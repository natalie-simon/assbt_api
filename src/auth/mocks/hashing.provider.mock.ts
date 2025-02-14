import { HashingProvider } from '../services/hashing.provider';

export class HashingProviderMock implements HashingProvider {
  async hashPassword(data: string | Buffer): Promise<string> {
    return `hashed_${data}`;
  }

  async comparePassword(
    data: string | Buffer,
    encrypted: string,
  ): Promise<boolean> {
    return `hashed_${data}` === encrypted;
  }
}
