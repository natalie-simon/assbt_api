import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Upload } from './upload.entity';

/**
 * Entité CategorieActivite
 */
@Entity({
  schema: 'public',
})
export class CategorieActivite {
  /**
   * Identifiant de la catégorie d'activité
   *
   * @type {number}
   * @memberof CategorieActivite
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Libellé de la catégorie d'activité
   *
   * @type {string}
   * @memberof CategorieActivite
   */
  @Column({
    type: 'varchar',
    length: 20,
    name: 'lbl_categorie',
    nullable: false,
  })
  lbl_categorie: string;

  /**
   * True si la catégorie est concernée par un équipement
   *
   * @type {boolean}
   * @memberof CategorieActivite
   */
  @Column({
    type: 'boolean',
    default: false,
    name: 'avec_equipement',
  })
  avec_equipement: boolean;

  /**
   * Couleur de la catégorie d'activité en hexadécimal sans le #
   *
   * @type {string}
   * @memberof CategorieActivite
   */
  @Column({
    type: 'varchar',
    length: 6,
    name: 'couleur',
    nullable: false,
  })
  couleur: string;

  /**
   * True si la catégorie est concernée par les notifications
   *
   * @type {boolean}
   * @memberof CategorieActivite
   */
  @Column({
    type: 'boolean',
    name: 'avec_notification',
    default: true,
  })
  avec_notification: boolean;

  /**
   * L'image représentant la catégorie
   *
   * @type {boolean}
   * @memberof CategorieActivite
   */
  @ManyToOne(() => Upload, { nullable: true })
  @JoinColumn()
  image: Upload;
}
