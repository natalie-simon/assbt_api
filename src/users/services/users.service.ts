import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/createuser.dto';
import * as bcrypt from 'bcryptjs';

/** Service de gestion des appels concernant les utilisateurs */
@Injectable()
export class UsersService {
  /** Constructeur */
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /** Service de création d'un utilisateur */
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

  /** Service qui récupère un utilisateur par son email */
  findOneByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
      relations: ['role'],
    });
  }

  /** Service de récupération de tout les utilisateurs */
  findAllUsers() {
    return this.userRepository.find({ relations: ['role'] });
  }
}
