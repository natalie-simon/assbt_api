import {
  Injectable,
  Inject,
  LoggerService,
  BadRequestException,
} from '@nestjs/common';
import { CreateActiviteDto } from '../dtos/create-activite.dto';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { CategorieActiviteService } from '../../categories-activites/services/categorie-activite.service';
import { plainToInstance } from 'class-transformer';
import { ActiviteAgendaDto } from '../dtos/activite-agenda.dto';
import { InscriptionActiviteDto } from '../dtos/inscription-activite.dto';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';
import { MembresService } from '../../membres/services/membres.service';
import { PrismaService } from '../../prisma/prisma.service';
import { MailService } from 'src/mail/services/mail.service';

/**
 * Service de l'activité
 */
@Injectable()
export class ActiviteService {
  /**
   * Constructeur
   * @param prisma
   * @param categorieActiviteService
   * @param logger
   */
  constructor(
    private readonly prisma: PrismaService,
    private readonly categorieActiviteService: CategorieActiviteService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
    private readonly membresService: MembresService,
    private readonly mailService: MailService,
  ) {}

  /**
   * Récupération de toutes les activites
   * @returns
   */
  public async findAllActivites() {
    const activites = await this.prisma.activite.findMany({
      include: {
        categorie: true,
        participants: {
          select: {
            id: true,
          },
        },
      },
    });

    const activitesWithParticipantsCount = activites.map(activite => ({
      ...activite,
      nombreInscrits: activite.participants.length,
      participants: undefined, // On retire les participants du retour final
    }));

    return plainToInstance(ActiviteAgendaDto, activitesWithParticipantsCount, {
      excludeExtraneousValues: true,
    });
  }

  /**
   * Récupération d'une activité avec filtres possibles
   * @param id
   * @param participants
   * @returns
   */
  public async findOneActiviteWithFilters(
    id: number,
    participants?: boolean,
  ): Promise<any> {
    const include: any = {
      categorie: true,
    };

    if (participants) {
      include.participants = {
        include: {
          membre: {
            include: {
              profil: true,
            },
          },
        },
      };
    }

    const activite = await this.prisma.activite.findUnique({
      where: { id },
      include,
    });

    if (!activite) {
      throw new BadRequestException('Activité non trouvée');
    }

    return activite;
  }

  /**
   * Création d'une activité
   * @param createActiviteDto
   * @returns
   */
  public async createActivite(createActiviteDto: CreateActiviteDto) {
    const categorie =
      await this.categorieActiviteService.findCategorieActiviteById(
        createActiviteDto.categorie,
      );

    if (!categorie) {
      throw new Error('Catégorie non trouvée');
    }

    const savedActivite = await this.prisma.activite.create({
      data: {
        titre: createActiviteDto.titre,
        contenu: createActiviteDto.contenu,
        date_heure_debut: createActiviteDto.date_heure_debut,
        date_heure_fin: createActiviteDto.date_heure_fin,
        categorieId: categorie.id,
      },
      include: {
        categorie: true,
      },
    });

    this.logger.log(
      `L'activité suivante : ${savedActivite.titre} a été créée.`,
    );

    return savedActivite;
  }

  /**
   * Inscription à une activité
   * @param id
   * @param inscriptionActiviteDto
   * @param user
   * @returns
   */
  public async inscriptionActivite(
    id: number,
    inscriptionActiviteDto: InscriptionActiviteDto,
    activeUser: ActiveUserData,
  ): Promise<any> {
    const activite = await this.prisma.activite.findUnique({
      where: { id },
    });

    if (!activite) {
      throw new BadRequestException('Activité non trouvée');
    }

    const membre = await this.membresService.findUserById(activeUser['sub']);

    const isInscrit = await this.prisma.membreActivite.findFirst({
      where: {
        activiteId: activite.id,
        membreId: membre.id,
      },
    });

    if (isInscrit) {
      throw new BadRequestException('Membre déjà inscrit à cette activité');
    }

    const nouvelleInscription = await this.prisma.membreActivite.create({
      data: {
        membreId: membre.id,
        activiteId: activite.id,
        observations: inscriptionActiviteDto.observations,
      },
      include: {
        activite: true,
        membre: true,
      },
    });

    this.logger.log(
      `Le membre ${activeUser.email} s'est inscrit à l'activité ${activite.titre} - ${activite.date_heure_debut}`,
    );

    return nouvelleInscription;
  }

  /**
   * Désinscription à une activité
   * @param id
   * @param user
   */
  public async desinscriptionActivite(
    id: number,
    activeUser: ActiveUserData,
  ): Promise<{ success: boolean; message: string }> {
    const activite = await this.prisma.activite.findUnique({
      where: { id },
    });

    if (!activite) {
      throw new BadRequestException('Activité non trouvée');
    }

    const membre = await this.membresService.findUserById(activeUser['sub']);

    const inscription = await this.prisma.membreActivite.findFirst({
      where: {
        activiteId: activite.id,
        membreId: membre.id,
      },
    });

    if (!inscription) {
      throw new BadRequestException("Vous n'êtes pas inscrit à cette activité");
    }

    await this.prisma.membreActivite.delete({
      where: { id: inscription.id },
    });

    this.logger.log(
      `Le membre ${activeUser.email} s'est désinscrit de l'activité ${activite.titre} - ${activite.date_heure_debut}`,
    );

    return {
      success: true,
      message: 'Désinscription effectuée avec succès',
    };
  }

  /**
   * Mise à jour d'une activité
   * @param id
   * @param updateActiviteDto
   * @returns
   */
  public async updateActivite(
    id: number,
    updateActiviteDto: Partial<CreateActiviteDto>,
  ) {
    const activite = await this.prisma.activite.findUnique({
      where: { id },
    });

    if (!activite) {
      throw new BadRequestException('Activité non trouvée');
    }

    const categorie =
      await this.categorieActiviteService.findCategorieActiviteById(
        updateActiviteDto.categorie,
      );

    if (!categorie) {
      throw new Error('Catégorie non trouvée');
    }

    return this.prisma.activite.update({
      where: { id },
      data: {
        titre: updateActiviteDto.titre,
        contenu: updateActiviteDto.contenu,
        date_heure_debut: updateActiviteDto.date_heure_debut,
        date_heure_fin: updateActiviteDto.date_heure_fin,
        categorieId: categorie.id,
      },
    });
  }

  /**
   * Suppression d'une activité
   * @param id
   * @returns
   */
  public async deleteActivite(id: number) {
    const activite = await this.prisma.activite.findUnique({
      where: { id },
    });

    if (!activite) {
      throw new BadRequestException('Activité non trouvée');
    }

    try {
      // Vérifier s'il y a des inscriptions
      const inscriptions = await this.prisma.membreActivite.findMany({
        where: { activiteId: id },
      });

      if (inscriptions.length > 0) {
        throw new BadRequestException(
          `Il y a des membres inscrits à cette activité, vous ne pouvez pas la supprimer`,
        );
      }

      await this.prisma.activite.delete({
        where: { id },
      });

      this.logger.log(
        `L'activité suivante : ${activite.titre} a été supprimée.`,
      );
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException(
        `Erreur lors de la suppression de l'activité: ${error.message}`,
      );
    }

    return activite;
  }

  /**
   * Annulation d'une activité
   * @param id
   * @returns
   */
  public async annulerActivite(id: number) {
    const activite = await this.prisma.activite.findUnique({
      include: {
        participants: {
          include: {
            membre: {
              include: {
                profil: true,
              },
            },
          },
        },
      },
      where: { id },
    });

    if (!activite) {
      throw new BadRequestException('Activité non trouvée');
    }

    const emailsParticipants = activite.participants
      .filter(participant => 
        participant.membre.profil && 
        participant.membre.profil.communication_mail === true
      )
      .map(participant => participant.membre.email);

    if(emailsParticipants.length > 0){
      try{
        await this.mailService.sendAnnulationActivite(activite, emailsParticipants);
      } catch (error) {
        this.logger.error(error);
        throw new BadRequestException(
          `Erreur lors de l'annulation de l'activité: ${error.message}`,
        );
      }
    }

    return {
      success: true,
      message: 'Activité annulée avec succès',
    };
  }
}
