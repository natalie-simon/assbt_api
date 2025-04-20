import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { CreateCategorieActiviteDto } from '../dtos/create-categorie-activite.dto';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { PrismaService } from '../../prisma/prisma.service';
import { CategorieActivite } from 'generated/prisma';

/**
 * Service de la catégorie d'activité
 */
@Injectable()
export class CategorieActiviteService {
  /**
   * Constructeur de la catégorie d'activité
   * @param prisma
   * @param logger
   */
  constructor(
    private readonly prisma: PrismaService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  /**
   * Création d'une catégorie d'activité
   * @param createCategorieActiviteDto
   * @param imageId
   * @returns
   */
  public async createCategorieActivite(
    createCategorieActiviteDto: CreateCategorieActiviteDto,
    imageId: number | null,
  ) {
    const savedCategorieActivite = await this.prisma.categorieActivite.create({
      data: {
        ...createCategorieActiviteDto,
        imageId: imageId,
      },
      include: {
        image: true,
      },
    });

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
    return this.prisma.categorieActivite.findUnique({
      where: { id },
      include: {
        image: true,
      },
    });
  }

  /**
   * Récupération de toutes les catégories d'activités
   * @returns
   */
  public async findAllCategoriesActivites() {
    return await this.prisma.categorieActivite.findMany({
      orderBy: {
        lbl_categorie: 'asc',
      },
    });
  }

  /**
   * Mise à jour d'une catégorie d'activité
   * @param id
   * @param updateData
   * @returns
   */
  public async updateCategorieActivite(
    id: number,
    updateData: Partial<CategorieActivite>,
  ) {

    const categorieActivite = await this.findCategorieActiviteById(id);
    if (!categorieActivite) {
      throw new Error('CategorieActivite not found');
    }
console.log('90 - categorieActivite : ', updateData);
    await this.prisma.categorieActivite.update({
      where: { id },
      data: {
        lbl_categorie: updateData.lbl_categorie,
        imageId: updateData.imageId,
        couleur: updateData.couleur,
        avec_equipement: updateData.avec_equipement,
        avec_notification: updateData.avec_notification,
      },
    });
    return this.findCategorieActiviteById(id);
  }

  /**
   * Suppression d'une catégorie d'activité
   * @param id
   * @returns
   */
  public async deleteCategorieActivite(id: number) {
    const categorieActivite = await this.findCategorieActiviteById(id);

    if (!categorieActivite) {
      throw new Error('CategorieActivite not found');
    }

    await this.prisma.categorieActivite.delete({
      where: { id },
    });

    return categorieActivite;
  }
}
