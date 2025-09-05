import {
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Membre } from 'generated/prisma';

/**
 * Service de recherche d'un utilisateur par son email
 */
@Injectable()
export class FindOneByEmailProvider {
  /**
   * Constructeur
   * @param prisma
   */
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Méthode de recherche d'un utilisateur par son email
   * @param email
   * @returns
   */
  public async findOneUserByEmailProvider(email: string) {
    let user: Membre | null = null;

    try {
      user = await this.prisma.membre.findUnique({
        where: { email },
      });
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
