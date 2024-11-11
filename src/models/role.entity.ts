import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  schema: 'users',
})
export class Role {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'role_id',
  })
  id: number;

  @Column({
    type: 'text',
    name: 'role_name',
    nullable: false,
  })
  roleName: string;
}
