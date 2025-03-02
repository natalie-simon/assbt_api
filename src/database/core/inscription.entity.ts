import { Entity, Column, ManyToMany, ManyToOne, JoinColumn, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Activite } from './activite.entity';

/**
 * Entité inscription
 */
@Entity()
export class Inscription {
  /**
   * Identifiant de l'inscription
   *
   * @type {number}
   * @memberof Inscription
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Membre inscrit à l'activité
   *
   * @type {User}
   * @memberof Inscription
   */
  @ManyToOne(() => User, { nullable: false })
  @JoinColumn()
  membre: User;

  /**
   * Activité à laquelle le membre est inscrit
   *
   * @type {Activite}
   * @memberof Inscription
   */
  @ManyToOne(() => Activite, { nullable: false })
  @JoinColumn()
  activite: Activite;

  /**
   * Observation de l'inscription
   *
   * @type {string}
   * @memberof Inscription
   */
  @Column({
    type: 'varchar',
    length: 50,
    name: 'observation',
    nullable: true,
  })
  observation: string;

  /**
   * Date de création de l'inscription
   *
   * @type {Date}
   * @memberof Inscription
   */
  @CreateDateColumn()
  createDate: Date;
}
