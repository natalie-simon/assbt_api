import { Exclude } from 'class-transformer';
import { RoleTypes } from '../../auth/enums/role-types.enum';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MembreActivite } from './membre_activite.entity';
import { Profil } from './profil.entity';

/**
 * Entité représentant un utilisateur dans l'application.
 */
@Entity('membre', {
  schema: 'public',
})
export class Membre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 96,
    name: 'email',
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    type: 'text',
    name: 'mot_de_passe',
    nullable: false,
  })
  @Exclude()
  mot_de_passe: string;

  @Column({
    default: false,
  })
  est_supprime: boolean;

  @Column({
    type: 'enum',
    enum: RoleTypes,
    default: RoleTypes.ADMIN,
    nullable: false,
  })
  role: string;

  @OneToMany(() => MembreActivite, (membreActivite) => membreActivite.membre)
  inscriptions: MembreActivite[];

  @OneToOne(() => Profil, (profil) => profil.membre)
  @JoinColumn()
  profil: Profil;
}
