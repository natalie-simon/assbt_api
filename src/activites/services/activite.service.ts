import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activite } from '../../database/core/activite.entity';
import { Repository } from 'typeorm';
import { CreateActiviteDto } from '../dtos/create-activite.dto';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { CategorieActiviteService } from '../../categories-activites/services/categorie-activite.service';

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
    private readonly categorieActiviteService: CategorieActiviteService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

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
}
