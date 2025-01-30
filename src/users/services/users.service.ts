import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/createuser.dto';
import { CreateUserProvider } from '../../auth/services/create-user.provider';
import { FindOneByEmailProvider } from '../../auth/services/find-one-by-email.provider';

/**
 * Service de gestion des utilisateurs
 */
@Injectable()
export class UsersService {
  /**
   * Constructeur du service UsersService
   * @param usersRepository le repository des Users
   */
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    private readonly createUserProvider: CreateUserProvider,

    private readonly findOneByEmailProvider: FindOneByEmailProvider,
  ) {}

  /**
   * Le service de création d'un utilisateur
   * @param createUserDto La DTO pour la création d'un utilisateur
   * @returns
   * @throws BadRequestException
   */
  public async createUser(createUserDto: CreateUserDto) {
    if (createUserDto.clef !== process.env.CLEF) {
      throw new BadRequestException('La clé est incorrecte, contactez le club');
    }
    return this.createUserProvider.createUser(createUserDto);
  }

  /**
   * Le service de récupération d'un utilisateur par son email
   * @param email L'email de l'utilisateur
   * @returns
   * @throws BadRequestException
   */
  public async findOneByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { email },
      //relations: ['role'],
    });
  }

  /**
   * Service qui récupère tous les utilisateurs
   * @returns
   */
  public async findAllUsers() {
    return this.usersRepository.find(/*{ relations: ['role'] }*/);
  }

  /**
   * Récupération d'un utilisateur par son id
   * @param id
   * @returns
   */
  public async findUserById(id: number) {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  /**
   * Récupération d'un utilisateur
   * @param email
   * @returns
   */
  public async findOneUserByEmailProvider(email: string) {
    return this.findOneByEmailProvider.findOneUserByEmailProvider(email);
  }
}
