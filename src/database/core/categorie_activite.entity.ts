import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Upload } from './upload.entity';

@Entity({
  schema: 'public',
})
export class CategorieActivite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 20,
    name: 'lbl_categorie',
    nullable: false,
  })
  lbl_categorie: string;

  @Column({
    type: 'boolean',
    default: false,
    name: 'avec_equipement',
  })
  avec_equipement: boolean;

  @Column({
    type: 'varchar',
    length: 6,
    name: 'couleur',
    nullable: false,
  })
  couleur: string;

  @Column({
    type: 'boolean',
    name: 'avec_notification',
    default: true,
  })
  avec_notification: boolean;

  @ManyToOne(() => Upload, { nullable: true })
  @JoinColumn()
  image: Upload;
}
