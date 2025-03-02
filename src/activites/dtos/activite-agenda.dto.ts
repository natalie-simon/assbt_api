import { Expose, Type } from 'class-transformer';
import { CategorieActiviteDto } from '../../categories-activites/dtos/categorie-activite.dto';

/**
 * DTO de l'activité pour l'agenda
 */
export class ActiviteAgendaDto {
  /**
   * Constructeur
   * @param partial
   */
  constructor(partial: Partial<ActiviteAgendaDto>) {
    Object.assign(this, partial);
  }

  /**
   * Identifiant de l'activité
   *
   * @type {number}
   * @memberof ActiviteAgendaDto
   */
  @Expose()
  id: number;

  /**
   * Titre de l'activité
   *
   * @type {string}
   * @memberof ActiviteAgendaDto
   */
  @Expose()
  titre: string;

  /**
   * Date et heure de début de l'activité
   *
   * @type {Date}
   * @memberof ActiviteAgendaDto
   */
  @Expose()
  date_heure_debut: Date;

  /**
   * Date et heure de fin de l'activité
   *
   * @type {Date}
   * @memberof ActiviteAgendaDto
   */
  @Expose()
  date_heure_fin: Date;

  /**
   * Catégorie de l'activité
   *
   * @type {CategorieActiviteDto}
   * @memberof ActiviteAgendaDto
   */
  @Expose()
  @Type(()=> CategorieActiviteDto)
  categorie: CategorieActiviteDto;
}

