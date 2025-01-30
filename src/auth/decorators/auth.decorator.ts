import { SetMetadata } from '@nestjs/common';
import { AuthTypes } from '../enums/auth-types.enum';
import { AUTH_TYPE_KEY } from '../constantes/auth.constants';

/**
 * Decorator pour authentication
 * @param authTypes
 * @returns
 */
export const Auth = (...authTypes: AuthTypes[]) =>
  SetMetadata(AUTH_TYPE_KEY, authTypes);
