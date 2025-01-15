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
@Entity({
  schema: 'public',
})
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
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
    name: 'password',
    nullable: false,
  })
  password: string;

  @Column({
    default: true,
  })
  isActive: boolean;

  /*@ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;*/
}
