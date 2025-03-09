import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { CategorieActivite } from './categorie_activite.entity';
import { MembreActivite } from './membre_activite.entity';

/**
 * Entité Activite
 */
@Entity({
  schema: 'public',
})
export class Activite {
  /**
   * Identifiant de l'activité
   *
   * @type {number}
   * @memberof Activite
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Titre de l'activité
   *
   * @type {string}
   * @memberof Activite
   */
  @Column({
    type: 'varchar',
    length: 50,
    name: 'titre',
    nullable: false,
  })
  titre: string;

  /**
   * Contenu de l'activité
   *
   * @type {string}
   * @memberof Activite
   */
  @Column({
    type: 'text',
    name: 'contenu',
    nullable: false,
  })
  contenu: string;

  /**
   * Date et heure de début de l'activité
   *
   * @type {Date}
   * @memberof Activite
   */
  @Column({
    type: 'timestamp',
    name: 'date_heure_debut',
    nullable: false,
  })
  date_heure_debut: Date;

  /**
   * Date et heure de fin de l'activité
   *
   * @type {Date}
   * @memberof Activite
   */
  @Column({
    type: 'timestamp',
    name: 'date_heure_fin',
    nullable: false,
  })
  date_heure_fin: Date;

  /**
   * Catégorie de l'activité
   *
   * @type {CategorieActivite}
   * @memberof Activite
   */
  @ManyToOne(() => CategorieActivite, { nullable: false })
  @JoinColumn()
  categorie: CategorieActivite;

  @OneToMany(() => MembreActivite, (membreActivite) => membreActivite.activite)
  participants: MembreActivite[];

}