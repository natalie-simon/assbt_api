import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/** Définition de la tablle Accueil */
@Entity({
  schema: 'public',
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
