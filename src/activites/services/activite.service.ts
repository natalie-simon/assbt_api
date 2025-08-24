import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateActiviteDto } from '../dtos/create-activite.dto';
import { CategorieActiviteService } from '../../categories-activites/services/categorie-activite.service';
import { plainToInstance } from 'class-transformer';
import { ActiviteAgendaDto } from '../dtos/activite-agenda.dto';
import { InscriptionActiviteDto } from '../dtos/inscription-activite.dto';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';
import { MembresService } from '../../membres/services/membres.service';
import { PrismaService } from '../../prisma/prisma.service';
import { MailService } from '../../mail/services/mail.service';
import { InscriptionActiviteGroupeDto } from '../dtos/inscription-activite-groupe.dto';
import { DesinscriptionActiviteAdminDto } from '../dtos/desinscription-activite-admin.dto';
import { AnnulationActiviteDto } from '../dtos/annulation-activite.dto';

/**
 * Service de l'activité
 */
@Injectable()
export class ActiviteService {
  /**
   * Constructeur
   * @param prisma
   * @param categorieActiviteService
   */
  constructor(
    private readonly prisma: PrismaService,
    private readonly categorieActiviteService: CategorieActiviteService,
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

    const activitesWithParticipantsCount = activites.map((activite) => ({
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
    } catch (error) {
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
  public async annulerActivite(
    id: number,
    annulationActiviteDto: AnnulationActiviteDto,
  ) {
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

    await this.prisma.activite.update({
      where: { id },
      data: {
        motif_annulation: annulationActiviteDto.motif,
      },
    });

    activite.motif_annulation = annulationActiviteDto.motif;

    const emailsParticipants = activite.participants
      .filter(
        (participant) =>
          participant.membre.profil &&
          participant.membre.profil.communication_mail === true,
      )
      .map((participant) => participant.membre.email);

    if (emailsParticipants.length > 0) {
      try {
        await this.mailService.sendAnnulationActivite(
          activite,
          emailsParticipants,
        );
      } catch (error) {
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

  /**
   * Inscription global en mode Admin
   * @param id
   * @param inscriptionActiviteGroupeDto
   * @returns
   */
  public async inscriptionGroupe(
    id: number,
    inscriptionActiviteGroupeDto: InscriptionActiviteGroupeDto,
  ): Promise<any> {
    const activite = await this.prisma.activite.findUnique({
      where: { id },
    });

    if (!activite) {
      throw new BadRequestException('Activité non trouvée');
    }
    let compteur = 0;
    inscriptionActiviteGroupeDto.inscriptions.forEach(async (inscription) => {
      const membre = await this.membresService.findUserById(
        inscription.membreId,
      );
      const isInscrit = await this.prisma.membreActivite.findFirst({
        where: {
          activiteId: activite.id,
          membreId: membre.id,
        },
      });

      if (!isInscrit) {
        const nouvelleInscription = await this.prisma.membreActivite.create({
          data: {
            membreId: membre.id,
            activiteId: activite.id,
            observations: inscription.observations,
          },
          include: {
            activite: true,
            membre: true,
          },
        });

        if (nouvelleInscription) {
          compteur++;
        }
      }
    });
    return { message: `${compteur} nouveaux inscrits.` };
  }

  public async desinscriptionAdmin(
    id: number,
    desinscriptionActiviteAdminDto: DesinscriptionActiviteAdminDto,
  ): Promise<any> {
    // récupération de l'activité
    const activite = await this.prisma.activite.findUnique({
      where: { id },
    });

    if (!activite) {
      throw new NotFoundException('Activité non trouvée');
    }

    const inscription = await this.prisma.membreActivite.findFirst({
      where: {
        activiteId: activite.id,
        membreId: desinscriptionActiviteAdminDto.membreId,
      },
    });

    if (!inscription) {
      throw new BadRequestException(
        "Ce membre n'est pas inscrit à cette activité",
      );
    }

    await this.prisma.membreActivite.delete({
      where: { id: inscription.id },
    });
  }
}
