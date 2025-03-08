import { articlesMock, articlesStandardMock } from './articles.mock';
import { CreateArticleDto } from '../dtos/create-article.dto';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';
import { Upload } from '../../database/core/upload.entity';
import { ArticleStandardDto } from '../dtos/article-standard.dto';
import { categorieArticleTypes } from '../enums/categorie-article-types.enum';
import { statutArticleTypes } from '../enums/statut-article-types.enum';

/**
 * Mock du service Articles pour les tests
 */
export class ArticlesServiceMock {
  /**
   * Récupère tous les articles
   * @returns Tableau d'articles
   */
  async findAllArticles() {
    return articlesMock;
  }

  /**
   * Récupère un article par son ID
   * @param id ID de l'article
   * @returns Article trouvé ou null
   */
  async findArticleById(id: number) {
    return articlesMock.find((article) => article.id === id) || null;
  }

  /**
   * Crée un nouvel article
   * @param createArticleDto DTO pour la création d'article
   * @param activeUser Utilisateur actif
   * @param image Image optionnelle
   * @returns Nouvel article standardisé
   */
  async createArticle(
    createArticleDto: CreateArticleDto,
    activeUser: ActiveUserData,
    image: Upload | null,
  ) {
    const newArticle = new ArticleStandardDto({
      id: 999,
      ...createArticleDto,
      image: image ? { url: image.url } : { url: null },
      redacteur: { email: activeUser.email },
    });

    return newArticle;
  }

  /**
   * Récupère les articles publiés d'une catégorie
   * @param categorie Type de catégorie
   * @returns Tableau d'articles
   */
  async findArticlePublieByCategorie(categorie: categorieArticleTypes) {
    return articlesMock
      .filter(
        (article) =>
          article.categorie === categorie &&
          article.statut === statutArticleTypes.PUBLIE,
      )
      .map((article) => ({
        id: article.id,
        titre: article.titre,
        contenu: article.contenu,
        statut: article.statut,
        categorie: article.categorie,
        image: {
          url: article.image.url,
        },
        redacteur: {
          email: article.redacteur.email,
        },
      }));
  }
}
