import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from '../article.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto } from 'src/articles/dtos/create-article.dto';
import { UsersService } from 'src/users/services/users.service';
import { StatutsService } from 'src/statuts/services/statuts.service';
import { CatetogiesArticlesService } from 'src/categories-articles/services/categories-articles.services';

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
    private readonly usersService: UsersService,
    private readonly statutsService: StatutsService,
    private readonly catetogieArticlesService: CatetogiesArticlesService,
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  /**
   * Creation d'un article
   * @param createArticleDto
   * @returns
   */
  public async createArticle(createArticleDto: CreateArticleDto) {
    let statut = await this.statutsService.findStatutById(createArticleDto.statut);
    let categorie = await this.catetogieArticlesService.findCategorieArticleById(createArticleDto.categorie);
    const newArticle = this.articleRepository.create({
      ...createArticleDto,
      statut: statut,
      categorie: categorie,
    });
    return this.articleRepository.save(newArticle);
  }

  /**
   * Récupération de tous les articles
   * @returns
   */
  public async findAllArticles() {
    return await this.articleRepository.find({
      relations: ['statut'/*, 'categorie', 'redacteur'*/],
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
   * Mise à jour d'un article
   * @param id
   * @param createArticleDto
   * @returns
   */
  deleteArticleById(id: number) {
    return this.articleRepository.delete(id);
  }
}