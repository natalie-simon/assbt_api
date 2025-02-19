/**
 * DTO pour la visualisation d'un article
 */
export class ArticleStandardDto {
  /**
   * Constructeur
   * @param partial
   */
  constructor(partial: Partial<ArticleStandardDto>) {
    Object.assign(this, partial);
  }
  /**
   * Identifiant de l'article
   *
   * @type {number}
   * @memberof ArticleStandardDto
   */
  id: number;

  /**
   * Titre de l'article
   *
   * @type {string}
   * @memberof ArticleStandardDto
   */
  titre: string;

  /**
   * Contenu de l'article
   *
   * @type {string}
   * @memberof ArticleStandardDto
   */
  contenu: string;

  /**
   * Le status de l'article
   *
   * @type {string}
   * @memberof ArticleStandardDto
   */
  statut: string;

  /**
   * La catégorie de l'article
   *
   * @type {string}
   * @memberof ArticleStandardDto
   */
  categorie: string;

  /**
   * L'url de l'image de l'article
   *
   * @type {{
   *     url: string;
   *   }}
   * @memberof ArticleStandardDto
   */
  image: {
    url: string;
  };

  /**
   * Le rédacteur de l'article
   *
   * @type {{
   *     email: string;
   *   }}
   * @memberof ArticleStandardDto
   */
  redacteur: {
    email: string;
  };
}
