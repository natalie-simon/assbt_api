// access-token.guard.mock.ts
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * Mock de la classe AccessTokenGuard
 */
@Injectable()
export class AccessTokenGuardMock implements CanActivate {
  /**
   * canActivate
   * @param context
   * @returns
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Simuler le comportement de la méthode canActivate
    const request = context.switchToHttp().getRequest();
    request['user'] = { userId: 'mock-user-id' }; // Simuler l'ajout de l'utilisateur dans la requête
    return true;
  }

  /**
   * Extraction des headers de la requete
   * @param request
   * @returns
   */
  private extractRequestFromHeaders(request: any): string | undefined {
    // Simuler l'extraction du token depuis les headers
    return 'mock-token';
  }
}
