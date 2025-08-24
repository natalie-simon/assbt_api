import {
  BadRequestException,
  Injectable,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { CreateUserDto } from '../../membres/dtos/createMembre.dto';
import { HashingProvider } from './hashing.provider';
import { MembresService } from '../../membres/services/membres.service';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { ActiveUserData } from '../interfaces/active-user-data.interface';
import { MailService } from '../../mail/services/mail.service';
import { PrismaService } from '../../prisma/prisma.service';

/**
 * Service de création d'un utilisateur
 */
@Injectable()
export class CreateUserProvider {
  /**
   * Constructeur
   * @param prisma
   * @param hashingProvider
   * @param userService
   */
  constructor(
    private readonly prisma: PrismaService,
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
    @Inject(forwardRef(() => MembresService))
    private readonly membresService: MembresService,
    private readonly jwtSercice: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly mailService: MailService,
  ) {}

  /**
   * Création d'un utilisateur
   * @param createUserDto
   * @returns
   */
  public async createUser(createUserDto: CreateUserDto) {
    const existingUser = await this.membresService.findOneByEmail(
      createUserDto.email,
    );
    if (existingUser) {
      throw new BadRequestException('Cet email possède déjà un compte');
    }

    const hashedPassword = await this.hashingProvider.hashPassword(
      createUserDto.mot_de_passe,
    );

    const user = await this.prisma.membre.create({
      data: {
        email: createUserDto.email,
        mot_de_passe: hashedPassword,
      },
      include: {
        inscriptions: true,
        profil: true,
      },
    });

    try {
      await this.mailService.sendInscriptionNouveauMembre(user);
    } catch (error) {
      console.error(error);
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
