// fichier.interface.ts
export interface Fichier {
  nom: string;
  url: string;
  type: 'image' | 'document' | string;
  mime: string;
  taille: number;
  dateCreation: Date;
  dateMaj: Date;
}
