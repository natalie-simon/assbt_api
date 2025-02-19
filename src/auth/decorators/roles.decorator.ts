import { SetMetadata } from '@nestjs/common';
import { roleTypes } from '../enums/role-types.enum';

/**
 * Constante du décorateur Roles
 */
export const ROLES_KEY = 'roles';

/**
 * Gestion des roles types
 * @param roles
 */
export const Roles = (...roles: roleTypes[]) => SetMetadata(ROLES_KEY, roles);