import { Injectable } from '@nestjs/common';
import { CreateCategorieActiviteDto } from '../dtos/create-categorie-activite.dto';
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
   */
  constructor(private readonly prisma: PrismaService) {}

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
