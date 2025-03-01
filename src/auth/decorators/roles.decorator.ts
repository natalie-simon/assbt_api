import { SetMetadata } from '@nestjs/common';
import { RoleTypes } from '../enums/role-types.enum';

/**
 * Constante du décorateur Roles
 */
export const ROLES_KEY = 'roles';

/**
 * Gestion des roles types
 * @param roles
 */
export const Roles = (...roles: RoleTypes[]) => SetMetadata(ROLES_KEY, roles);