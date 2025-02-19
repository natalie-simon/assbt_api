import { Exclude } from 'class-transformer';
import { roleTypes } from '../../auth/enums/role-types.enum';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * Entité représentant un utilisateur dans l'application.
 */
@Entity('membre',{
  schema: 'public',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'varchar',
    length: 96,
    name: 'email',
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    type: 'text',
    name: 'mot_de_passe',
    nullable: false,
  })
  @Exclude()
  mot_de_passe: string;

  @Column({
    default: false,
  })
  est_supprime: boolean;

  @Column({
    type: 'enum',
    enum: roleTypes,
    default: roleTypes.USER,
    nullable: false,
  })
  role: string;
}
