import { Injectable } from '@nestjs/common';

/**
 * Hashing provider interface
 */
@Injectable()
export abstract class HashingProvider {
  /**
   * Hash password
   * @param data
   */
  abstract hashPassword(data: string | Buffer): Promise<string>;

  /**
   * Compare password
   * @param data
   * @param encrypted
   */
  abstract comparePassword(
    data: string | Buffer,
    encrypted: string,
  ): Promise<boolean>;
}
