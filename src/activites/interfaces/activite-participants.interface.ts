/**
 * Interface pour les activités avec les participants
 */
interface ActiviteParticipants {
  /**
   * identifiant
   */
  id: number;
  /**
   * Titre
   */
  titre: string;
  /**
   * Contenu
   */
  contenu: string;
  /**.
   * Date et heure de début
   */
  date_heure_debut: string;
  /**
   * Date et heure de fin
   */
  date_heure_fin: string;
  /**
   * Catégorie de l'activité
   */
  categorie: {
    lbl_categorie: string;
    avec_equipement: boolean;
    couleur: string;
  };
  /**
   * Tableau des participants
   */
  participants: {
    observations: string;
    dateInscription: string;
    membre: {
      id: number;
      profil: {
        nom: string;
        prenom: string;
      };
    };
  }[];
}
