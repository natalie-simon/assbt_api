import { RoleTypes } from '../../auth/enums/role-types.enum';

/**
 * Mock de données utilisateurs pour les tests
 */
export const membresMock = [
  {
    id: 1,
    email: 'admin@example.com',
    mot_de_passe: 'hashedPassword1',
    est_supprime: false,
    role: RoleTypes.ADMIN,
    inscriptions: [],
    profil: null,
  },
  {
    id: 2,
    email: 'user@example.com',
    mot_de_passe: 'hashedPassword2',
    est_supprime: false,
    role: RoleTypes.USER,
    inscriptions: [],
    profil: null,
  },
  {
    id: 3,
    email: 'deleted@example.com',
    mot_de_passe: 'hashedPassword3',
    est_supprime: true,
    role: RoleTypes.USER,
    inscriptions: [],
    profil: null,
  },
];
