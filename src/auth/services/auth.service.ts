import {
  BadRequestException,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { SigninDto } from '../dtos/signin.dto';
import { SignInProvider } from './sign-in.provider';
import { ForgotPasswordDto } from '../dtos/forgotpassword.dto';
import { MailService } from 'src/mail/services/mail.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../config/jwt.config';

/**
 * Service de gestion des Statuts
 * Utilisation d'une seule table Statut pour toute l'application
 */
@Injectable()
export class AuthService {
  /**
   * Constructeur du service AuthService
   * @param usersService
   * @param signInProvider
   */
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly signInProvider: SignInProvider,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly mailService: MailService,
  ) {}

  /**
   * Connection d'authentification
   * @param signinDto
   * @returns
   */
  public async signin(signinDto: SigninDto) {
    return await this.signInProvider.signIn(signinDto);
  }

  public async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    let user = await this.usersService.findOneByEmail(forgotPasswordDto.email);
    if (!user) {
      throw new BadRequestException("Il n'y a aucun membre avec cet email.");
    }

    const accessToken = await this.jwtService.signAsync(
      {
        sub: user.id,
        email: user.email,
      },
      {
        secret: this.jwtConfiguration.secret,
        expiresIn: '1h',
      },
    );

    try {
      await this.mailService.sendMailReinitialisationMDP(user, accessToken);
      return true;
    } catch (err) {
      console.log(err);
      throw new BadRequestException("Erreur lors de l'envoi de l'email.");
    }
  }
  /**
   * Is Auth
   * @returns
   */
  public isAuht() {
    return true;
  }
}
