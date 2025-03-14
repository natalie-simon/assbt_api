import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Upload } from './upload.entity';
import { Membre } from './membre.entity';

@Entity('profil', {
  schema: 'public',
})
export class Profil {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  nom: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  prenom: string;

  @Column({ type: 'varchar', length: 12, nullable: true })
  telephone: string;

  @Column({ type: 'boolean', default: false })
  communication_mail: boolean;

  @Column({ type: 'boolean', default: false })
  communication_sms: boolean;

  @ManyToOne(() => Upload, { nullable: true })
  avatar: Upload;

  @OneToOne(() => Membre, (membre) => membre.profil)
  membre: Membre;
}
