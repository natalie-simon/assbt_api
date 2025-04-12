import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategorieActivite } from '../../database/core/categorie_activite.entity';
import { Repository } from 'typeorm';
import { CreateCategorieActiviteDto } from '../dtos/create-categorie-activite.dto';
import { Fichier } from '../../database/core/fichier.entity';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

/**
 * Service de la catégorie d'activité
 */
@Injectable()
export class CategorieActiviteService {
  /**
   * Constructeur de la catégorie d'activité
   * @param categorieActiviteRepository
   * @param logger
   */
  constructor(
    @InjectRepository(CategorieActivite)
    private readonly categorieActiviteRepository: Repository<CategorieActivite>,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  /**
   * Récupération de toutes les catégories d'activités
   * @returns
   */
  public async createCategorieActivite(
    createCategorieActiviteDto: CreateCategorieActiviteDto,
    image: Fichier | null,
  ) {
    const newCategorieActivite = this.categorieActiviteRepository.create({
      ...createCategorieActiviteDto,
      image: image,
    });

    const savedCategorieActivite =
      await this.categorieActiviteRepository.save(newCategorieActivite);
    this.logger.log(
      `La catégorie d'activité suivante : ${savedCategorieActivite.lbl_categorie} created`,
    );
    return savedCategorieActivite;
  }

  /**
   * Récupération d'une catégorie d'activité par son id
   * @param id
   * @returns
   */
  public async findCategorieActiviteById(id: number) {
    return this.categorieActiviteRepository.findOne({
      relations: ['image'],
      where:  {id: id}
    });
  }

  /**
   * Récupération de toutes les catégories d'activités
   * @returns
   */
  public async findAllCategoriesActivites() {
    return await this.categorieActiviteRepository.find({
      order: {
        lbl_categorie: 'ASC',
      },
    });
  }

  /**
   * Mise à jour d'une catégorie d'activité
   * @param id
   * @param updateData
   * @returns
   */
  public async updateCategorieActivite(id: number, updateData: Partial<CategorieActivite>) {
    await this.categorieActiviteRepository.update(id, updateData);
    return this.findCategorieActiviteById(id);
  }

  /**
   * Suppression d'une catégorie d'activité
   * @param id
   * @returns
   */
  public async deleteCategorieActivite(id: number) {
    const categorieActivite = await this.findCategorieActiviteById(id);
    // voir pour la suppression du fichier associé
    if (!categorieActivite) {
      throw new Error('CategorieActivite not found');
    }
    await this.categorieActiviteRepository.delete(id);
    return categorieActivite;
  }
}
