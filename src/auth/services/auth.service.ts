import {
  BadRequestException,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { MembresService } from '../../membres/services/membres.service';
import { SigninDto } from '../dtos/signin.dto';
import { SignInProvider } from './sign-in.provider';
import { ForgotPasswordDto } from '../dtos/forgotpassword.dto';
import { MailService } from '../../mail/services/mail.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../config/jwt.config';
import { ChangePasswordDto } from '../dtos/changePassword.dto';
import { ActiveUserData } from '../interfaces/active-user-data.interface';
import { HashingProvider } from './hashing.provider';
import { PrismaService } from '../../prisma/prisma.service';

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
    @Inject(forwardRef(() => MembresService))
    private readonly usersService: MembresService,
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
    private readonly signInProvider: SignInProvider,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly mailService: MailService,
    private readonly prisma: PrismaService, // Ajout du PrismaService si nécessaire
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
   * Envoie du mail de réinitialisation du mot de passe
   * @param forgotPasswordDto
   * @returns
   */
  public async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    const user = await this.usersService.findOneByEmail(
      forgotPasswordDto.email,
    );
    if (!user) {
      throw new BadRequestException("Il n'y a aucun membre avec cet email.");
    }

    const accessToken = await this.jwtService.signAsync(
      {
        sub: user.id,
        email: user.email,
        role: user.role,
      },
      {
        secret: this.jwtConfiguration.secret,
        expiresIn: '1h',
      },
    );

    try {
      await this.mailService.sendMailReinitialisationMDP(user, accessToken);
      return {
        message:
          'Un email pour réinitialiser votre mot de passe vient de vous être envoyé.',
      };
    } catch (err) {
      console.log(err);
      throw new BadRequestException("Erreur lors de l'envoi de l'email.");
    }
  }

  /**
   * Mise à jour du mot de passe
   * @param changePasswordDto
   * @param userData
   * @returns
   */
  public async updatePassword(
    changePasswordDto: ChangePasswordDto,
    userData: ActiveUserData,
  ) {
    const user = await this.usersService.findOneByEmail(userData.email);
    const mot_de_passe = await this.hashingProvider.hashPassword(
      changePasswordDto.nouveau_mdp,
    );

    // Mettre à jour directement avec Prisma si nécessaire
    await this.prisma.membre.update({
      where: { id: user.id },
      data: { mot_de_passe: mot_de_passe },
    });

    try {
      await this.mailService.sendMailMotDePasseModifie(user);
      return {
        message: 'Votre mot de passe a bien été modifié.',
      };
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
