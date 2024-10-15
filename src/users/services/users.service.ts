import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/createuser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

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

  findOneByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email });
  }

  findAllUsers() {
    return this.userRepository.find();
  }
}
