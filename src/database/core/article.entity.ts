import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Upload } from './upload.entity';
import { categorieArticleTypes } from '../../articles/enums/categorie-article-types.enum';
import { statutArticleTypes } from '../../articles/enums/statut-article-types.enum';

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
  @Column({
    type: 'enum',
    enum: statutArticleTypes,
    nullable: false,
  })
  statut: string;

  /**
   * Catégorie de l'article
   *
   * @type {CategorieArticle}
   * @memberof Article
   */
  @Column({
    type: 'enum',
    enum: categorieArticleTypes,
    nullable: false,
  })
  categorie: string;

  /**
   * L'image de l'article
   *
   * @type {Date}
   * @memberof Article
   */
  @ManyToOne(() => Upload, { nullable: true })
  @JoinColumn()
  image: Upload;

  /**
   * L'auteur de l'article
   *
   * @type {User}
   * @memberof Article
   */
  @ManyToOne(() => User, { nullable: false })
  @JoinColumn()
  redacteur: User;
}
