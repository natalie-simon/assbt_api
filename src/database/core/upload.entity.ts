import { CreateCategorieArticleDto } from 'src/categories-articles/dtos/create-categorie-article.dto';
import { fileTypes } from '../../uploads/enums/file-types.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Entité définissant la table upload
 */
@Entity()
export class Upload {

  /**
   * Identifiant de l'upload
   * @type {number}
   * @memberof Upload
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  nom: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: false,
  })
  url: string;

  @Column({
    type: 'enum',
    enum: fileTypes,
    default: fileTypes.IMAGE,
    nullable: false,
  })
  type: string;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: false,
  })
  mime: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: false,
  })
  size: number;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
