import { Expose } from 'class-transformer';

/**
 * CategorieActiviteDto
 */
export class CategorieActiviteDto {
  /**
   * Constructeur
   * @param partial
   */
  constructor(partial: Partial<CategorieActiviteDto>) {
    Object.assign(this, partial);
  }

  /**
   * Identifiant de la catégorie
   *
   * @type {number}
   * @memberof CategorieActiviteDto
   */
  @Expose()
  id: number;

  /**
   * Libellé de la catégorie
   *
   * @type {string}
   * @memberof CategorieActiviteDto
   */
  @Expose()
  lbl_categorie: string;

  /**
   * Défini si la catégorie est avec équipement
   *
   * @type {boolean}
   * @memberof CategorieActiviteDto
   */
  @Expose()
  avec_equipement: boolean;

  /**
   * Couleur de la catégorie
   *
   * @type {string}
   * @memberof CategorieActiviteDto
   */
  @Expose()
  couleur: string;
}
