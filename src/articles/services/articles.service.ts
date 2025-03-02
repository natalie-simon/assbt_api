import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from '../../database/core/article.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto } from '../dtos/create-article.dto';
import { UsersService } from '../../users/services/users.service';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';
import { Upload } from '../../database/core/upload.entity';
import { ArticleStandardDto } from '../dtos/article-standard.dto';
import { categorieArticleTypes } from '../enums/categorie-article-types.enum';
import { statutArticleTypes } from '../enums/statut-article-types.enum';

/**
 * Service des articles
 */
@Injectable()
export class ArticlesService {
  /**
   * Constructeur
   * @param usersService
   * @param catetogieArticlesService
   * @param articleRepository
   */
  constructor(
    private readonly usersService: UsersService,
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  /**
   * Creation d'un article
   * @param createArticleDto
   * @returns
   */
  public async createArticle(
    createArticleDto: CreateArticleDto,
    activeUser: ActiveUserData,
    image: Upload | null,
  ) {

    let user = await this.usersService.findUserById(activeUser['sub']);
    const newArticle = this.articleRepository.create({
      ...createArticleDto,
      redacteur: user,
      image: image,
    });

    const savedArticle = await this.articleRepository.save(newArticle);

    return new ArticleStandardDto({
      ...savedArticle,
      image: {
        url: image?.url,
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
    return await this.articleRepository.find({
      relations: ['image'],
      select: {
        id: true,
        titre: true,
        contenu: true,
        statut: true,
        categorie:true,
        image: {
          url: true,
        },
        redacteur: {
          id: true,
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
    return await this.articleRepository.findOne({
      where: { id: id },
    });
  }

  /**
   * Récupération de tous les articles d'une catégorie
   * @param categorie
   * @returns
   */
  public async findArticlePublieByCategorie(categorie: categorieArticleTypes) {
    return await this.articleRepository.find({
      relations: ['image', 'redacteur'],
      select: {
        id: true,
        titre: true,
        contenu: true,
        statut: true,
        categorie: true,
        image: {
          url: true,
        },
        redacteur: {
          email: true,
        },
      },
      where: { categorie: categorie, statut: statutArticleTypes.PUBLIE },
    });
  }

  /**
   * Mise à jour d'un article
   * @param id
   * @param createArticleDto
   * @returns
   */
  deleteArticleById(id: number) {
    return this.articleRepository.delete(id);
  }
}
