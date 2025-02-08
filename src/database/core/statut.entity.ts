import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Article } from './article.entity';

/**
 * Entité représentant un statut dans l'application.
 */
@Entity({
  schema: 'public',
})
export class Statut {
  @PrimaryGeneratedColumn()
  id: number;


  @Column({
    type: 'varchar',
    length: 10,
    name: 'lbl_statut',
    nullable: false,
  })
  lbl_statut: string;

  @OneToMany(()=> Article, (article)=> article.statut)
  articles: Article[];
}