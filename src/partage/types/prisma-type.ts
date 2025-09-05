// src/shared/types/prisma-types.ts

// Définition manuelle des interfaces
export interface ProfilType {
  id: number;
  nom: string;
  prenom: string;
  telephone?: string;
  communication_mail: boolean;
  communication_sms: boolean;
  avatarId?: number;
  membreId: number;
}

export interface InscriptionType {
  id: number;
  observations?: string;
  dateInscription: Date;
  membreId: number;
  activiteId: number;
}

export interface MembreWithRelations {
  id: number;
  email: string;
  mot_de_passe: string;
  est_supprime: boolean;
  role: string;
  profil?: ProfilType | null;
  inscriptions?: InscriptionType[];
}
