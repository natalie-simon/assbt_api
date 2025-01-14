import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import * as dotenv from 'dotenv';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from './decorators/public.decorators';

dotenv.config();

/**
 *  Garde d'authentication pour sécuriser les routes de l'application
 *
 *  Utilise des jetons JWT pour vérifier l'accès des utilisateurs
 */
@Injectable()
export class AuthGuard implements CanActivate {
  /**
   * Constructeur
   * @param jwtService Service permettant de manipuler et vérifier les jetons JWT
   * @param reflector  Service pour accéder aux métadonnées des handlers et classes
   */
  constructor(
    private readonly jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  /**
   * Vérifie si une route est accessible ou protégée
   * @param context Le contexte d'exécution de la requête
   * @returns Un booléen indiquant si l'accès est autorisé ou non
   * @throws UnauthorizedException si le jeton est manquant ou invalide
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      // La route est publique
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  /**
   * Extrait le jeton JWT du header 'Authorization' de la requête
   * @param request La requête HTTP
   * @returns Le jeton JWT si présent et valide, sinon undefined
   */
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
