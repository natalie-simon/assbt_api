import { fileTypes } from "../enums/file-types.enum";

/**
 * Interface représentant un fichier uploadé
 */
export interface UploadFile{
  /**
   * Nom du fichier
   */
  nom: string;
  /**
   * URL du fichier
   */
  url: string;
  /**
   * Type de fichier
   */
  type: fileTypes;
  /**
   * MIME type du fichier
   */
  mime: string;
  /**
   * Taille du fichier
   */
  size: number;
}