/**
 * Interface représentant les inforations pour l'utilisateur actif (connexté)
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