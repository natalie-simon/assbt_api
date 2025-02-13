import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';

/**
 * Role Entity
 */
@Entity({
  schema: 'public',
})
export class Role {
  /**
   * Role Id
   *
   * @type {number}
   * @memberof Role
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Nom du role
   *
   * @type {string}
   * @memberof Role
   */
  @Column({
    type: 'varchar',
    length: 10,
    name: 'role',
    nullable: true,
    unique: true,
  })
  role: string;

  /**
   * Relation avec la table Membre
   *
   * @type {User[]}
   * @memberof Role
   */
  @OneToMany(() => User, (user) => user.role)
  users: User[];
}