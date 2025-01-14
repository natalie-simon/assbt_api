import { Accueil } from './accueil.entity';
import { User } from './user.entity';
import { Role } from './role.entity';

/**
 * Tableau regroupant toutes les entités de la base de données.
 *
 * Ce tableau peut être utilisé pour simplifier l'importation des entités
 * dans les modules TypeORM.
 */
const entities = [Accueil, User, Role];

export { Accueil };

export default entities;
