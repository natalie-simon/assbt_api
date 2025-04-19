import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createMembre.dto';
import { CreateUserProvider } from '../../auth/services/create-user.provider';
import { FindOneByEmailProvider } from '../../auth/services/find-one-by-email.provider';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client'; // Importer les types Prisma


/**
 * Service de gestion des utilisateurs
 */
@Injectable()
export class MembresService {
  /**
   * Constructeur du service UsersService
   * @param usersRepository le repository des Users
   */
  constructor(
    private readonly prisma: PrismaService,
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
  public async findOneByEmail(email: string): Promise<any> {
    return this.prisma.membre.findUnique({
      where: { email },
      include: {
        profil: {
          include: {
            avatar: true,
          },
        },
      },
    });
  }

  /**
   * Service qui récupère tous les utilisateurs
   * @returns
   */
  public async findAllUsers() {
    return this.prisma.membre.findMany({
      include: {
        profil: true,
      },
    });
  }

  /**
   * Mise à jour d'un utilisateur
   * @param user
   * @returns
   */
  public async update(user: any) {
    const { id, email, mot_de_passe, est_supprime, role } = user;

    return this.prisma.membre.update({
      where: { id },
      data: {
        email,
        mot_de_passe,
        est_supprime,
        role,
        // Ajoutez d'autres champs si nécessaire
      },
    });
  }

  /**
   * Récupération d'un utilisateur par son id
   * @param id
   * @returns
   */
  public async findUserById(id: number) {
    return this.prisma.membre.findUnique({
      where: { id: id },
      include: { profil: true },
    });
  }

  /**
   * Récupération d'un utilisateur
   * @param email
   * @returns
   */
  public async findOneUserByEmailProvider(
    email: string,
  ): Promise<any> {
    return this.findOneByEmailProvider.findOneUserByEmailProvider(email);
  }

  public async findProfileByUserIdWithFilters(id: number, activites: boolean) {
    const now = new Date().toISOString();

    const include: any = {
      profil: true,
    };

    if (activites) {
      include.inscriptions = {
        include: {
          activite: true,
        },
        where: {
          activite: {
            date_heure_debut: {
              gt: now,
            },
          },
        },
      };
    }

    return this.prisma.membre.findUnique({
      where: { id },
      include,
    });
  }
}
