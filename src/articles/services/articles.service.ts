import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from '../dtos/create-article.dto';
import { MembresService } from '../../membres/services/membres.service';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';
import { ArticleStandardDto } from '../dtos/article-standard.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { StatutArticleTypes } from 'generated/prisma';

/**
 * Service des articles
 */
@Injectable()
export class ArticlesService {
  /**
   * Constructeur
   * @param membresService
   * @param prisma
   */
  constructor(
    private readonly membresService: MembresService,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Creation d'un article
   * @param createArticleDto
   * @returns
   */
  public async createArticle(
    createArticleDto: CreateArticleDto,
    activeUser: ActiveUserData,
    imageId: number | null,
  ) {
    const user = await this.membresService.findUserById(activeUser['sub']);

    const savedArticle = await this.prisma.article.create({
      data: {
        titre: createArticleDto.titre,
        contenu: createArticleDto.contenu,
        statut: createArticleDto.statut as any,
        categorie: createArticleDto.categorie as any,
        redacteurId: user.id,
        imageId: imageId,
      },
      include: {
        image: true,
        redacteur: true,
      },
    });

    const image = imageId
      ? await this.prisma.fichier.findUnique({ where: { id: imageId } })
      : null;

    return new ArticleStandardDto({
      ...savedArticle,
      image: {
        url: image?.url || null,
      },
      redacteur: {
        email: user.email,
      },
    });
  }

  /**
   * Récupération de tous les articles
   * @returns
   */
  public async findAllArticles() {
    return await this.prisma.article.findMany({
      select: {
        id: true,
        titre: true,
        contenu: true,
        statut: true,
        categorie: true,
        image: {
          select: {
            url: true,
          },
        },
        redacteur: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  /**
   * Récupération d'un article par son id
   * @param id
   * @returns
   */
  public async findArticleById(id: number) {
    return await this.prisma.article.findUnique({
      where: { id },
    });
  }

  /**
   * Récupération de tous les articles d'une catégorie
   * @param categorie
   * @returns
   */
  public async findArticlePublieByCategorie(categorie) {
    try {
      // Importer les types d'énumération depuis @prisma/client
      const {
        CategorieArticleTypes,
        StatutArticleTypes,
      } = require('@prisma/client');

      // Convertir les chaînes en valeurs d'énumération
      const categorieEnum =
        categorie === 'accueil'
          ? CategorieArticleTypes.INFORMATION
          : CategorieArticleTypes[categorie.toUpperCase()];

      const test = await this.prisma.article.findMany({
        where: {
          categorie: categorieEnum,
          statut: StatutArticleTypes.VALIDE, // Ou la valeur qui correspond à "PUBLIE" dans votre schéma
        },
        select: {
          id: true,
          titre: true,
          contenu: true,
          statut: true,
          categorie: true,
          image: {
            select: {
              url: true,
            },
          },
          redacteur: {
            select: {
              email: true,
            },
          },
        },
      });

      return test;
    } catch (error) {
      console.error('Error finding articles by category:', error);
      throw error;
    }
  }

  /**
   * Suppression d'un article par son id
   * @param id
   * @returns
   */
  /*public async deleteArticleById(id: number) {
    return await this.prisma.article.delete({
      where: { id },
    });
  }*/
}
