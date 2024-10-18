import {
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.entity';
@Entity({
  schema: 'users',
})
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    type: 'text',
    name: 'email',
    nullable: false,
  })
  email: string;

  @Column({
    type: 'text',
    name: 'password',
    nullable: false,
  })
  password: string;

  @OneToOne(() => Role, { nullable: true })
  @JoinColumn({ name: 'role_id' })
  role: Role;
}
