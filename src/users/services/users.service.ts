import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/createuser.dto';
import * as bcrypt from 'bcryptjs';

/**
 * Service de gestion des utilisateurs
 */
@Injectable()
export class UsersService {
  /**
   * Constructeur du service UsersService
   * @param userRepository le repository des Users
   */
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Le service de création d'un utilisateur
   * @param createUserDto La DTO pour la création d'un utilisateur
   * @returns
   * @throws BadRequestException
   */
  async createUser(createUserDto: CreateUserDto) {
    if (createUserDto.clef !== process.env.CLEF) {
      throw new BadRequestException('La clé est incorrecte, contactez le club');
    }
    createUserDto.password = bcrypt.hashSync(createUserDto.password, 10);
    const newUser = this.userRepository.create(createUserDto);
    const existingUser = await this.findOneByEmail(createUserDto.email);
    if (existingUser) {
      throw new BadRequestException('Cet email possède déjà un compte');
    }

    return this.userRepository.save(newUser);
  }

  /**
   * Le service de récupération d'un utilisateur par son email
   * @param email L'email de l'utilisateur
   * @returns
   * @throws BadRequestException
   */
  findOneByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
      relations: ['role'],
    });
  }

  /**
   * Service qui récupère tous les utilisateurs
   * @returns
   */
  findAllUsers() {
    return this.userRepository.find({ relations: ['role'] });
  }
}
