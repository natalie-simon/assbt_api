import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Statut } from '../statuts/statut.entity';
import { CategorieArticle } from '../categories-articles/categorie-article.entity';
import { User } from '../users/user.entity';

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
  @ManyToOne(() => Statut, (statut) => statut.articles)
  @JoinColumn()
  statut: Statut;

  /**
   * Catégorie de l'article
   *
   * @type {CategorieArticle}
   * @memberof Article
   */
  @ManyToOne(() => CategorieArticle, (categorie) => categorie.articles)
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

  /*@OneToOne(() => User)
  @JoinColumn({
    name: 'fk_redacteur_id',
  })
  redacteur: User;*/
}
