import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Activite } from './activite.entity';

/**
 * Entité MembreActivite
 */
@Entity('membre_activite', {
  schema: 'public',
})
export class MembreActivite {
  /**
   * Identifiant de l'inscription
   *
   * @type {number}
   * @memberof Membre
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Observations de l'inscription
   *
   * @type {string}
   * @memberof Membre
   */
  @Column({ nullable: true, type: 'text' })
  observations: string;

  /**
   * Membre inscrit
   *
   * @type {User}
   * @memberof Membre
   */
  @ManyToOne(() => User, (membre) => membre.inscriptions)
  membre: User;
  @Column()
  membre_id: number;

  /**
   * Activité inscrite
   *
   * @type {Activite}
   * @memberof MembreActivite
   */
  @ManyToOne(() => Activite, (activite) => activite.participants)
  @JoinColumn({ name: 'activite_id' })
  activite: Activite;
  @Column()
  activite_id: number;

  /**
   * Date d'inscription
   *
   * @type {Date}
   * @memberof MembreActivite
   */
  @Column({
    type: 'timestamp',
    name: 'date_inscription',
    default: () => 'CURRENT_TIMESTAMP',
  })
  dateInscription: Date;
}
