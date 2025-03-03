import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AccessTokenGuard } from './access-token.guard';
import { AuthTypes } from '../enums/auth-types.enum';
import { AUTH_TYPE_KEY } from '../constantes/auth.constants';
import { CONDITIONAL_AUTH_KEY } from '../decorators/conditional-auth.decorator';
/**
 * Guard pour l'authentification
 *
 * @export
 * @class AuthenticationGuard
 * @implements {CanActivate}
 */
@Injectable()
export class AuthenticationGuard implements CanActivate {
  /**
   * Le type d'authentification par défaut
   * @private
   * @static
   * @memberof AuthenticationGuard
   */
  private static readonly defaultAuthType = AuthTypes.Bearer;

  /**
   * Map des guards par type d'authentification
   *
   * @private
   * @type {(Record<
   *     AuthTypes,
   *     CanActivate | CanActivate[]
   *   >)}
   * @memberof AuthenticationGuard
   */
  private readonly authTypeGuardMap: Record<
    AuthTypes,
    CanActivate | CanActivate[]
  > = {
    [AuthTypes.Bearer]: this.accessTokenGuard,
    [AuthTypes.None]: { canActivate: () => true },
  };
  /**
   * Constructeur
   * @param reflector
   * @param accessTokenGuard
   */
  constructor(
    private readonly reflector: Reflector,
    private readonly accessTokenGuard: AccessTokenGuard,
  ) {}

  /**
   * La gestion du Guard d'autorisation
   * @param context
   * @returns
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const conditionalAuthFn = this.reflector.getAllAndOverride<
      ((req: Request) => AuthTypes) | undefined
    >(CONDITIONAL_AUTH_KEY, [context.getHandler(), context.getClass()]);

    let authTypes: AuthTypes[];

    if (conditionalAuthFn) {
      const dynamicAuthType = conditionalAuthFn(request);
      authTypes = [dynamicAuthType];
    } else {
      authTypes = this.reflector.getAllAndOverride(AUTH_TYPE_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) ?? [AuthenticationGuard.defaultAuthType];
    }

    /**
     * Récupération des différents guards
     */
    const guards = authTypes.map((type) => this.authTypeGuardMap[type]).flat();

    /**
     * Erreur si aucun guard n'est trouvé
     */
    const error = new UnauthorizedException();

    for (const instance of guards) {
      const canActivate = await Promise.resolve(instance.canActivate(context));
      if (canActivate) {
        return true;
      }
    }

    throw error;
  }
}
