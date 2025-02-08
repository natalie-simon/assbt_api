import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Statut } from './statut.entity';
import { CategorieArticle } from './categorie-article.entity';
import { User } from './user.entity';

/**
 * Entité Article
 */
@Entity({
  schema: 'public',
})
export class Article {
  @PrimaryGeneratedColumn()
  id: number;
  /**
   * Titre de l'article
   *
   * @type {string}
   * @memberof Article
   */
  @Column({
    type: 'varchar',
    length: 25,
    name: 'titre',
    nullable: false,
  })
  titre: string;

  /**
   * Contenu de l'article
   *
   * @type {string}
   * @memberof Article
   */
  @Column({
    type: 'text',
    name: 'contenu',
    nullable: false,
  })
  contenu: string;

  /**
   * Statut de l'article
   *
   * @type {Statut}
   * @memberof Article
   */
  @ManyToOne(() => Statut, (statut) => statut.articles, { nullable: false })
  @JoinColumn()
  statut: Statut;

  /**
   * Catégorie de l'article
   *
   * @type {CategorieArticle}
   * @memberof Article
   */
  @ManyToOne(() => CategorieArticle, (categorie) => categorie.articles, {
    nullable: false,
  })
  @JoinColumn()
  categorie: CategorieArticle;

  /**
   * Url de l'image liée à l'article
   *
   * @type {string}
   * @memberof Article
   */
  @Column({
    type: 'text',
    name: 'image',
    nullable: true,
  })
  image: string;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn()
  redacteur: User;
}
