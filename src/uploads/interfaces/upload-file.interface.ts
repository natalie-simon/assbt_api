import { fileTypes } from "../enums/file-types.enum";

export interface UploadFile{
  nom: string;
  url: string;
  type: fileTypes;
  mime: string;
  size: number;
}