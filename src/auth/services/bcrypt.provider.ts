import { Injectable } from '@nestjs/common';
import { HashingProvider } from './hashing.provider';
import * as bcrypt from 'bcrypt';

/**
 * Bcrypt hashing provider
 */
@Injectable()
export class BcryptProvider implements HashingProvider {
  /**
   * Hash password
   * @param data
   * @returns
   */
  public async hashPassword(data: string | Buffer): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(data, salt);
  }

  /**
   * Compare password
   * @param data
   * @param encrypted
   * @returns
   */
  public async comparePassword(
    data: string | Buffer,
    encrypted: string,
  ): Promise<boolean> {
    return bcrypt.comparePassword(data, encrypted);
  }
}
