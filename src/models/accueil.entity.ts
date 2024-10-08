import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  schema: 'infos',
})
export class Accueil {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'accueil_id',
  })
  id: number;

  @Column({
    type: 'text',
    name: 'titre',
    nullable: false,
  })
  titre: string;

  @Column({
    type: 'text',
    name: 'description',
    nullable: false,
  })
  description: string;

  @Column({
    type: 'text',
    name: 'image',
    nullable: false,
  })
  image: string;
}
