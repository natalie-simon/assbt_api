import {
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { SigninDto } from '../dtos/signin.dto';
import { UsersService } from '../../users/services/users.service';
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
   * @param userService
   * @param jwtSercice
   * @param jwtConfiguration
   * @param hashingProvider
   */
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
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
    let user = await this.userService.findOneByEmail(signinDto.email);
    let isEqual: boolean = false;

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

    const accessToken = await this.jwtSercice.signAsync(
      {
        sub: user.id,
        email: user.email,
      } as ActiveUserData,
      {
        secret: this.jwtConfiguration.secret,
        expiresIn: this.jwtConfiguration.accessTokenTtl,
      },
    );

    return { accessToken };
  }
}
