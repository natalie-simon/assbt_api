import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Express } from 'express';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import * as ftp from 'basic-ftp';
import { Readable } from 'stream';

@Injectable()
export class UploadToO2SwitchProvider {
  constructor(private configService: ConfigService) {}

  private generateFileName(originalName: string): string {
    const timestamp = Date.now();
    const uniqueId = uuidv4();
    const extension = path.extname(originalName);
    const baseName = path.basename(originalName, extension);
    
    // Nettoyer le nom de base
    const cleanBaseName = baseName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    return `${cleanBaseName}-${timestamp}-${uniqueId}${extension}`;
  }

  async uploadFile(file: Express.Multer.File): Promise<any> {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
      // Connexion FTP
      const host = this.configService.get<string>('FTP_HOST_API_TEST');
      const username = this.configService.get<string>('FTP_USERNAME_API_TEST');
      const password = this.configService.get<string>('FTP_PASSWORD_API_TEST');

      console.log('Tentative de connexion FTP avec:', { host, username });

      await client.access({
        host,
        user: username,
        password,
        secure: false
      });

      // Aller dans le répertoire web
      await client.cd('/');

      // Créer le répertoire uploads s'il n'existe pas
      const uploadDir = 'uploads';
      try {
        await client.cd(uploadDir);
      } catch {
        await client.uploadFrom(Readable.from(''), uploadDir);
      }

      // Générer le nom de fichier unique
      const fileName = this.generateFileName(file.originalname);
      
      // Convertir le buffer en stream
      const stream = Readable.from(file.buffer);
      
      // Upload du fichier
      await client.uploadFrom(stream, fileName);

      // Créer l'entité Fichier
      const fichier = null;
      fichier.nom = fileName;
      // URL complète vers le fichier
      fichier.url = `https://apitest.nataliesimon.fr/uploads/${fileName}`;
      fichier.type = file.mimetype.startsWith('image/') ? 'image' : 'document';
      fichier.mime = file.mimetype;
      fichier.taille = file.size;
      fichier.dateCreation = new Date();
      fichier.dateMaj = new Date();

      return fichier;
    } catch (error) {
      console.error('Erreur lors de l\'upload FTP:', error);
      throw error;
    } finally {
      client.close();
    }
  }
} 