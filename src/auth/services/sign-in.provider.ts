import {
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { SigninDto } from '../dtos/signin.dto';
import { MembresService } from '../../membres/services/membres.service';
import { HashingProvider } from './hashing.provider';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../config/jwt.config';
import { ActiveUserData } from '../interfaces/active-user-data.interface';
/**
 * Service de gestion de la connexion
 */
@Injectable()
export class SignInProvider {
  /**
   * Constructeur
   * @param membreService
   * @param jwtSercice
   * @param jwtConfiguration
   * @param hashingProvider
   */
  constructor(
    @Inject(forwardRef(() => MembresService))
    private readonly membreService: MembresService,
    private readonly jwtSercice: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly hashingProvider: HashingProvider,
  ) {}

  /**
   * Méthode de connexion
   * @param signinDto
   * @returns
   */
  public async signIn(signinDto: SigninDto) {
    let user = await this.membreService.findOneByEmail(signinDto.email);
    let isEqual: boolean = false;

    if (!user) {
      throw new RequestTimeoutException( null, {
        description: 'Erreur de connexion',
      });
    }

    try {
      isEqual = await this.hashingProvider.comparePassword(
        signinDto.mot_de_passe,
        user.mot_de_passe,
      );
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: 'Erreur de connexion',
      });
    }

    if (!isEqual) {
      throw new UnauthorizedException();
    }

    if (user.est_supprime) {
      throw new RequestTimeoutException(null, {
        description:
          "Votre compte a été désactivé, veuillez contacter le président de l'association.",
      });
    }

    const accessToken = await this.jwtSercice.signAsync(
      {
        sub: user.id,
        email: user.email,
        role: user.role,
        profil: user.profil,
      } as ActiveUserData,
      {
        secret: this.jwtConfiguration.secret,
        expiresIn: this.jwtConfiguration.accessTokenTtl,
      },
    );

    return { accessToken };
  }
}
