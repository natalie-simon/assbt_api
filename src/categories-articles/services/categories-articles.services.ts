import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategorieArticle } from '../categorie-article.entity';
import { Repository } from 'typeorm';
import { CreateCategorieArticleDto } from '../dtos/create-categorie-article.dto';

/**
 * Service de gestion des Catégories d'Articles
 */
@Injectable()
export class CatetogiesArticlesService {
  /**
   * Constructeur
   * @param categorieArticleRepository
   */
  constructor(
    @InjectRepository(CategorieArticle)
    private readonly categorieArticleRepository: Repository<CategorieArticle>,
  ) {}

  /**
   * Création d'une Catégorie d'Articles
   * @param createCategorieArticleDto
   * @returns
   */
  createCategorieArticle(createCategorieArticleDto: CreateCategorieArticleDto) {
    const newCategorieArticle = this.categorieArticleRepository.create(
      createCategorieArticleDto,
    );
    return this.categorieArticleRepository.save(newCategorieArticle);
  }

  /**
   * Récupération de toutes les Catégories d'Articles
   * @returns
   */
  async findAllCategorieArticle() {
    return this.categorieArticleRepository.find();
  }

  /**
   * Récupération d'une Catégorie d'Articles par son id
   * @param id
   * @returns
   */
  async findCategorieArticleById(id: number) {
    return this.categorieArticleRepository.findOne({
      where: { id: id },
    });
  }
}