/**
 * Interface représentant les informations pour l'utilisateur actif (connecté)
 */
export interface ActiveUserData {
  /**
   * Identifiant de l'utilisateur
   */
  sub: number;
  /**
   * Email de l'utilisateur
   */
  email: string;
}
