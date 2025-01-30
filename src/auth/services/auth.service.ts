import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { SigninDto } from '../dtos/signin.dto';
import { SignInProvider } from './sign-in.provider';
/**
 * Service de gestion des Statuts
 * Utilisation d'une seule table Statut pour toute l'application
 */
@Injectable()
export class AuthService {
  /**
   * service d'authentification
   * @param usersService
   */
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly signInProvider: SignInProvider,
  ) {}

  /**
   * Connection d'authentification
   * @param signinDto
   * @returns
   */
  public async signin(signinDto: SigninDto) {
    return await this.signInProvider.signIn(signinDto);
  }

  /**
   * Is Auth
   * @returns 
   */
  public isAuht(){
    return true;
  }
}
