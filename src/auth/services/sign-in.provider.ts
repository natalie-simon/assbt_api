import {
  forwardRef,
  Inject,
  Injectable,
  LoggerService,
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
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ServerInfoService } from '../../logger/services/serveur-info';
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
    @Inject(forwardRef(() => MembresService))
    private readonly membreService: MembresService,
    private readonly jwtSercice: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly hashingProvider: HashingProvider,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
    private readonly serverInfoService: ServerInfoService,
  ) {}

  /**
   * Méthode de connexion
   * @param signinDto
   * @returns
   */
  public async signIn(signinDto: SigninDto) {
    let user = await this.membreService.findOneByEmail(signinDto.email);
    let isEqual: boolean = false;

    try {
      isEqual = await this.hashingProvider.comparePassword(
        signinDto.mot_de_passe,
        user.mot_de_passe,
      );
    } catch (error) {
      this.logger.log(`Erreur signin `, {
        serverUrl: this.serverInfoService.getServerUrl(),
        email: user.email,
      });
      throw new RequestTimeoutException(error, {
        description: 'Erreur de connexion',
      });
    }

    if (!isEqual) {
      this.logger.log(`Erreur de connexion : ${user.email}`, {
        serverUrl: this.serverInfoService.getServerUrl(),
        email: user.email,
      });
      throw new UnauthorizedException();
    }

    const accessToken = await this.jwtSercice.signAsync(
      {
        sub: user.id,
        email: user.email,
        role: user.role,
      } as ActiveUserData,
      {
        secret: this.jwtConfiguration.secret,
        expiresIn: this.jwtConfiguration.accessTokenTtl,
      },
    );

    this.logger.log(`Le membre : ${user.email} s'est connecté.`, {
      serverUrl: this.serverInfoService.getServerUrl(),
      email: user.email,
    });

    return { accessToken };
  }
}
