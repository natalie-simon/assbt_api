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

/**
 * Service mock pour les activités
 */
export class ActiviteServiceMock {
  /**
   * Mocks de récupération de toutes les activités
   * @returns
   */
  findAllActivites(): Promise<Activite[]> {
    return Promise.resolve(mockActivites);
  }

  /**
   * Mocks de la création d'une activité
   * @param createActiviteDto
   * @returns
   */
  createActivite(createActiviteDto: CreateActiviteDto): Promise<Activite> {
    return Promise.resolve(mockNewActivite);
  }

  /**
   * Mocks de l'inscription à une activité
   * @param id
   * @param inscriptionActiviteDto
   * @param user
   * @returns
   */
  inscriptionActivite(
    id: number,
    inscriptionActiviteDto: InscriptionActiviteDto,
    user: ActiveUserData,
  ): Promise<MembreActivite> {
    return Promise.resolve(mockMembreActivite);
  }

  /**
   * Mocks de la désinscription à une activité
   * @param id
   * @param user
   * @returns
   */
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
