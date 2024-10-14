import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
