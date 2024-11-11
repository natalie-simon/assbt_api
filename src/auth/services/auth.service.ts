import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    console.log(`Tentative de connexion avec l'email: ${email} ${pass}`); // Ajout du console.log à la ligne 14 //
    const user = await this.usersService.findOneByEmail(email);
    if (!user || !bcrypt.compareSync(pass, user.password)) {
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }

    const role = user?.role?.roleName ?? 'aucun';

    const payload = {
      sub: user.id,
      email: user.email,
      role: role,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
