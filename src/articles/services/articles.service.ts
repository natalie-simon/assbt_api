import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from '../article.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto } from '../dtos/create-article.dto';
import { UsersService } from '../../users/services/users.service';
import { StatutsService } from '../../statuts/services/statuts.service';
import { CategoriesArticlesService } from '../../categories-articles/services/categories-articles.services';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';

/**
 * Service des articles
 */
@Injectable()
export class ArticlesService {
  /**
   * Constructeur
   * @param usersService
   * @param statutsService
   * @param catetogieArticlesService
   * @param articleRepository
   */
  constructor(
    private readonly statutsService: StatutsService,
    private readonly catetogieArticlesService: CategoriesArticlesService,
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
  ) {
    let statut = await this.statutsService.findStatutById(
      createArticleDto.statut,
    );
    let categorie =
      await this.catetogieArticlesService.findCategorieArticleById(
        createArticleDto.categorie,
      );

    let user = await this.usersService.findUserById(activeUser['sub']);
    const newArticle = this.articleRepository.create({
      ...createArticleDto,
      statut: statut,
      categorie: categorie,
      redacteur: user,
    });
    return this.articleRepository.save(newArticle);
  }

  /**
   * Récupération de tous les articles
   * @returns
   */
  public async findAllArticles() {
    return await this.articleRepository.find({
      relations: ['statut', 'categorie' /*, 'redacteur'*/],
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
   * @param categorieId
   * @returns
   */
  public async findArticleByCategorie(categorieId: number) {
    return await this.articleRepository.find({
      relations: ['statut', 'categorie' /*, 'redacteur'*/],
      where: { categorie: { id: categorieId } },
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
