import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Entité représentant un role dans l'application.
 */
@Entity({
  schema: 'public',
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
