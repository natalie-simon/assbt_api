import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createMembre.dto';
import { CreateUserProvider } from '../../auth/services/create-user.provider';
import { FindOneByEmailProvider } from '../../auth/services/find-one-by-email.provider';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client'; // Importer les types Prisma
import { MailService } from '../../mail/services/mail.service';
import { ContactDto } from '../dtos/contact.dto';


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
    private readonly mailService: MailService,
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
      select: {
        mot_de_passe: false,
        id: true,
        email: true,
        est_supprime: true,
        role: true,
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
  public async findOneUserByEmailProvider(email: string): Promise<any> {
    return this.findOneByEmailProvider.findOneUserByEmailProvider(email);
  }

  /**
   * Récupération du profil de l'utilisateur connecté avec filtres possibles
   * @param id
   * @param activites
   * @returns
   */
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

  /**
   * Désactiver un utilisateur
   * @param id
   * @returns
   */
  public async desactiverUser(id: number) {
    return this.prisma.membre.update({
      where: { id },
      data: {
        est_supprime: true,
      },
    });
  }

  /**
   * Restaurer un utilisateur
   * @param id
   * @returns
   */
  public async restorerUser(id: number) {
    return this.prisma.membre.update({
      where: { id },
      data: {
        est_supprime: false,
      },
    });
  }

  /**
   * Gestion du formulaire de contact
   * @param contactDto 
   * @returns 
   */
  public async contact(contactDto: ContactDto) {
    return this.mailService.sendContact(contactDto);
  }

  public async compteurs(id:number){
    const now = new Date();
    const nowIsoString = now.toISOString();

    const prochainesInscription = await this.prisma.membre.findUnique({
      where: { id: id },
      include: {
        inscriptions: {
          where: {
            activite: {
              date_heure_debut: {
                gte: nowIsoString,
              },
              motif_annulation: null
            },
          },
        },
      }
    });

    const prochainesActivite = await this.prisma.activite.findMany({
      where: {
        date_heure_debut: {
          gte: nowIsoString
        },
        motif_annulation: null,
      },
      select: {
        id: true,
        titre: true,
        contenu: true,
        date_heure_debut: true,
        categorie: true,
        max_participant: true,
        nbr_attente: true,
        _count: {
          select:{
            participants: true,
          }
        }
      },
    });

    return {
      countProchainesInscription: prochainesInscription.inscriptions.length,
      prochainesInscription: prochainesInscription.inscriptions,
      countProchainesActivite: prochainesActivite.length,
      prochainesActivites : prochainesActivite,
    }
  }

  public async statistiques(id:number){
    const now = new Date();
    const firstJanuary = new Date(now.getFullYear(), 0, 1);
    const isoString = firstJanuary.toISOString();

    const activiteAnnee = await this.prisma.membre.findUnique({
      where: { id: id },
      include: {
        inscriptions: {
          where: {
            activite: {
              date_heure_debut: {
                gt: isoString,
              },
              motif_annulation: null
            },
          },
        },
      }
    });

    const activiteHisto = await this.prisma.membre.findUnique({
      where: { id: id },
      include: {
        inscriptions: {
          where: {
            activite: {
              motif_annulation: null
            },
          },
        },
      }
    });

    return {
      countActiviteHisto: activiteHisto.inscriptions.length,
      countActiviteAnnee: activiteAnnee.inscriptions.length,

    }
  }
}
