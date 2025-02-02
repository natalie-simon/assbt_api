import {
  BadRequestException,
  Injectable,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { CreateUserDto } from '../../users/dtos/createuser.dto';
import { Repository } from 'typeorm';
import { User } from '../../users/user.entity';
import { HashingProvider } from './hashing.provider';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { ActiveUserData } from '../interfaces/active-user-data.interface';
import { MailService } from 'src/mail/services/mail.service';

/**
 * Service de création d'un utilisateur
 */
@Injectable()
export class CreateUserProvider {
  /**
   * Constructeur
   * @param usersRepository
   * @param hashingProvider
   * @param userService
   */
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
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
    const existingUser = await this.userService.findOneByEmail(
      createUserDto.email,
    );
    if (existingUser) {
      throw new BadRequestException('Cet email possède déjà un compte');
    }

    const newUser = this.usersRepository.create({
      ...createUserDto,
      mot_de_passe: await this.hashingProvider.hashPassword(
        createUserDto.mot_de_passe,
      ),
    });

    const user = (await this.usersRepository.save(newUser)) as User;

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
