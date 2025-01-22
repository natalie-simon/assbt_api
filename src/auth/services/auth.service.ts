import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

/**
 * Service de gestion de l'authentification
 */
@Injectable()
export class AuthService {
  /**
   * Constructeur du service AuthService
   * @param usersService le service des Users
   * @param jwtService  le service de gestion du JWT
   */
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Le service de connection & d'authentification
   * @param email l'email du User
   * @param pass  le mot de passe
   * @returns
   * @throws UnauthorizedException
   */
  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    console.log(`Tentative de connexion avec l'email: ${email} ${pass}`); // Ajout du console.log à la ligne 14 //
    const user = await this.usersService.findOneByEmail(email);
    if (!user || !bcrypt.compareSync(pass, user.mot_de_passe)) {
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }

    //const role = user?.role?.roleName ?? 'aucun';

    const payload = {
      sub: user.id,
      email: user.email,
      //role: role,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
