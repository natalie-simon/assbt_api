import {
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Membre } from '../../database/core/membre.entity';
import { InjectRepository } from '@nestjs/typeorm';

/**
 * Service de recherche d'un utilisateur par son email
 */
@Injectable()
export class FindOneByEmailProvider {
  /**
   * Constructeur
   * @param userRespository
   */
  constructor(
    @InjectRepository(Membre)
    private readonly userRespository: Repository<Membre>,
  ) {}

  /**
   * Méthode de recherche d'un utilisateur par son email
   * @param email
   * @returns
   */
  public async findOneUserByEmailProvider(email: string) {
    let user: Membre | undefined = undefined;

    try {
      user = await this.userRespository.findOneBy({ email });
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: "Erreur : concactez l'administrateur",
      });
    }

    if (!user) {
      throw new UnauthorizedException('Utilisateur non trouvé');
    }

    return user;
  }
}
