import { SetMetadata } from "@nestjs/common";
import { AuthTypes } from "../enums/auth-types.enum";
import { Request } from 'express';

/**
 * Conditional Auth decorator
 */
export const CONDITIONAL_AUTH_KEY = 'conditionalAuth';

/**
 * Gestion des routes multi-auth
 * @param condition 
 * @returns 
 */
export const ConditionalAuth = (condition: (req: Request) => AuthTypes) =>
  SetMetadata(CONDITIONAL_AUTH_KEY, condition);