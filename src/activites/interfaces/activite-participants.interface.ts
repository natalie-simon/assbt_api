interface ActiviteParticipants {
  id: number;
  titre: string;
  contenu: string;
  date_heure_debut: string;
  date_heure_fin: string;
  categorie: {
    lbl_categorie: string;
    avec_equipement: boolean;
    couleur: string;
  };
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
