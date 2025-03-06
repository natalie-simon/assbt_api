import { SetMetadata } from "@nestjs/common";
import { AuthTypes } from "../enums/auth-types.enum";
import { Request } from 'express';

export const CONDITIONAL_AUTH_KEY = 'conditionalAuth';

export const ConditionalAuth = (condition: (req: Request) => AuthTypes) =>
  SetMetadata(CONDITIONAL_AUTH_KEY, condition);