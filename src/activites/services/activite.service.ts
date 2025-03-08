import {
  Injectable,
  Inject,
  LoggerService,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activite } from '../../database/core/activite.entity';
import { Repository } from 'typeorm';
import { CreateActiviteDto } from '../dtos/create-activite.dto';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { CategorieActiviteService } from '../../categories-activites/services/categorie-activite.service';
import { plainToInstance } from 'class-transformer';
import { ActiviteAgendaDto } from '../dtos/activite-agenda.dto';
import { InscriptionActiviteDto } from '../dtos/inscription-activite.dto';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';
import { MembreActivite } from '../../database/core/membre_activite.entity';

/**
 * Service de l'activité
 */
@Injectable()
export class ActiviteService {
  /**
   * Constructeur
   * @param activiteRepository
   * @param categorieActiviteService
   * @param logger
   */
  constructor(
    @InjectRepository(Activite)
    private readonly activiteRepository: Repository<Activite>,
    @InjectRepository(MembreActivite)
    private readonly membreActiviteRepository: Repository<MembreActivite>,
    private readonly categorieActiviteService: CategorieActiviteService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  /**
   * Récupération de toutes les activites
   * @returns
   */
  public async findAllActivites() {
    const activites = await this.activiteRepository.find({
      relations: ['categorie'],
    });

    return plainToInstance(ActiviteAgendaDto, activites, {
      excludeExtraneousValues: true,
    });
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
    const newActivite = this.activiteRepository.create({
      ...createActiviteDto,
      categorie,
    });

    const savedActivite = await this.activiteRepository.save(newActivite);
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
    user: ActiveUserData,
  ): Promise<MembreActivite> {
    const activite = await this.activiteRepository.findOne({
      where: { id: id },
    });

    if (!activite) {
      throw new BadRequestException('Activité non trouvée');
    }
    const isInscrit = await this.membreActiviteRepository.findOne({
      where: { activite, membre_id: user.sub },
    });

    if (isInscrit) {
      throw new BadRequestException('Membre déjà inscrit à cette activité');
    }

    const nouvelleInscription = this.membreActiviteRepository.create({
      membre_id: user.sub,
      activite: activite,
      observations: inscriptionActiviteDto.observations,
    });
    this.logger.log(
      `Le membre ${user.email} s'est inscrit à l'activité ${activite.titre} - ${activite.date_heure_debut}`,
    );

    return this.membreActiviteRepository.save(nouvelleInscription);
  }

  /**
   * Désinscription à une activité
   * @param id
   * @param user
   */
  public async desinscriptionActivite(
    id: number,
    user: ActiveUserData,
  ): Promise<{ success: boolean; message: string }> {
    const activite = await this.activiteRepository.findOne({
      where: { id: id },
    });

    if (!activite) {
      throw new BadRequestException('Activité non trouvée');
    }

    const inscription = await this.membreActiviteRepository.findOne({
      where: { activite: activite, membre_id: user.sub },
    });

    if (!inscription) {
      throw new BadRequestException("Vous n'êtes pas inscrit à cette activité");
    }

    await this.membreActiviteRepository.remove(inscription);
    this.logger.log(`Le membre ${user.email} s'est désinscrit de l'activité ${activite.titre} - ${activite.date_heure_debut}`);
    return {
      success: true,
      message: 'Désinscription effectuée avec succès',
    };
  }
}
