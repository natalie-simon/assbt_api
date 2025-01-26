import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';

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
  ) {}

  /**
   * Authentification
   * @param email
   * @param mot_de_passe
   */
  /*public login(email: string, mot_de_passe: string) {
    const users = this.usersService.findOneByEmail(email);
  }*/
}
