import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import jwtConfig from '../config/jwt.config';
import { Request } from 'express';

/**
 * Guard Access Token
 */
@Injectable()
export class AccessTokenGuard implements CanActivate {
  /**
   * Constructeur
   * @param jwtService 
   * @param jwtConfiguration 
   */
  constructor(
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}

  /**
   * Can Activate
   * @param context 
   * @returns 
   */
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractRequestFromHeaders(request);
    if(!token) {
      throw new UnauthorizedException(`Access token is missing`);
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, this.jwtConfiguration);
      request['user'] = payload;
      console.log(payload);
    } catch (error) {
      throw new UnauthorizedException(`Access token is invalid`);
    }

    return true;
  }

  /**
   * Récupère le token depuis les headers
   * @param request 
   * @returns 
   */
  private extractRequestFromHeaders(request: Request): string | undefined {
    const [_, token] = request.headers['authorization']?.split(' ') ?? [];
    return token;
  }
}
