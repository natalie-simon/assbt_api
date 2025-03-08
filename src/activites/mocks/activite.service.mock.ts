import {
  mockActivites,
  mockNewActivite,
  mockMembreActivite,
} from './activites.mock';
import { CreateActiviteDto } from '../dtos/create-activite.dto';
import { InscriptionActiviteDto } from '../dtos/inscription-activite.dto';
import { ActiveUserData } from '../../auth/interfaces/active-user-data.interface';
import { MembreActivite } from '../../database/core/membre_activite.entity';
import { Activite } from '../../database/core/activite.entity';

export class ActiviteServiceMock {
  findAllActivites(): Promise<Activite[]> {
    return Promise.resolve(mockActivites);
  }

  createActivite(createActiviteDto: CreateActiviteDto): Promise<Activite> {
    return Promise.resolve(mockNewActivite);
  }

  inscriptionActivite(
    id: number,
    inscriptionActiviteDto: InscriptionActiviteDto,
    user: ActiveUserData,
  ): Promise<MembreActivite> {
    return Promise.resolve(mockMembreActivite);
  }

  desinscriptionActivite(
    id: number,
    user: ActiveUserData,
  ): Promise<{ success: boolean; message: string }> {
    return Promise.resolve({
      success: true,
      message: 'Désinscription effectuée avec succès',
    });
  }
}
