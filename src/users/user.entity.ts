import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
//import { Role } from '../models/role.entity';

/**
 * Entité représentant un utilisateur dans l'application.
 */
@Entity('membre',{
  schema: 'public',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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
  mot_de_passe: string;

  @Column({
    default: false,
  })
  est_supprime: boolean;

  /*@ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;*/
}
