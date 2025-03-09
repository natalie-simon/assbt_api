import { usersMock } from './users.mock';

/**
 * Mock du service Users pour les tests
 */
export class UsersServiceMock {
  /**
   * Récupère un utilisateur par son ID
   * @param id ID de l'utilisateur
   * @returns Utilisateur trouvé ou null
   */
  async findUserById(id: number) {
    return usersMock.find((user) => user.id === id) || null;
  }

  /**
   * Récupère un utilisateur par son email
   * @param email Email de l'utilisateur
   * @returns Utilisateur trouvé ou null
   */
  async findUserByEmail(email: string) {
    return usersMock.find((user) => user.email === email) || null;
  }

  /**
   * Récupère tous les utilisateurs actifs
   * @returns Tableau d'utilisateurs non supprimés
   */
  async findAllUsers() {
    return usersMock.filter((user) => !user.est_supprime);
  }
}
