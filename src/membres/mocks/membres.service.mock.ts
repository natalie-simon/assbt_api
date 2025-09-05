import { membresMock } from './membres.mock';

/**
 * Mock du service Users pour les tests
 */
export class MembresServiceMock {
  /**
   * Récupère un utilisateur par son ID
   * @param id ID de l'utilisateur
   * @returns Utilisateur trouvé ou null
   */
  async findUserById(id: number) {
    return membresMock.find((user) => user.id === id) || null;
  }

  /**
   * Récupère un utilisateur par son email
   * @param email Email de l'utilisateur
   * @returns Utilisateur trouvé ou null
   */
  async findUserByEmail(email: string) {
    return membresMock.find((user) => user.email === email) || null;
  }

  /**
   * Récupère tous les utilisateurs actifs
   * @returns Tableau d'utilisateurs non supprimés
   */
  async findAllUsers() {
    return membresMock.filter((user) => !user.est_supprime);
  }
}
