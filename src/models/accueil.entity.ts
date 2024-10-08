import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  schema: 'accueil',
})
export class Accueil {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'accueil_id',
  })
  id: number;

  @Column({
    type: 'text',
    name: 'article',
    nullable: false,
  })
  article: string;

  @Column({
    type: 'text',
    name: 'image',
    nullable: false,
  })
  image: string;

  /*@Column({
    type: 'tinyint',
    name: 'numero_page',
  })
  numero_page: number;*/
}
