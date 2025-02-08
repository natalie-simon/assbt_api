import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Article } from './article.entity';

/**
 * Entité représentant un article dans l'application.
 */
@Entity({
  schema: 'public',
})
export class CategorieArticle{
  @PrimaryGeneratedColumn({
    name: 'categorie_article_id',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 25,
    name: 'lbl_categorie',
    unique: true,
    nullable: false,
  })
  lbl_categorie: string;

  @OneToMany(()=> Article, (article)=> article.categorie)
  articles: Article[];
}