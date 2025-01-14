import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Entité représentant un Accueil dans l'application.
 */
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
