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

    return this.usersRepository.save(newUser);
  }
}
