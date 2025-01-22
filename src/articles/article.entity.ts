import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Statut } from 'src/statuts/statut.entity';
import { CategorieArticle } from 'src/categories-articles/categorie-article.entity';
//import { User } from 'src/users/user.entity';

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

  /*@OneToOne(() => User)
  @JoinColumn({
    name: 'fk_redacteur_id',
  })
  redacteur: User;*/
}
