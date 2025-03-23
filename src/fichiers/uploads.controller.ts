import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiHeaders, ApiOperation } from '@nestjs/swagger';
import { Express } from 'express';
import { FichierService } from './services/fichier.service';

/**
 * Gestion du controller des uploads
 */
@Controller('uploads')
export class UploadsController {
  /**
   * Constructeur
   * @param fichierService
   */
  constructor(private fichierService: FichierService) {}
  /**
   * Téléchargement du fichier et mise à jour de la Bdd
   * @param file
   */
  @UseInterceptors(FileInterceptor('fichier'))
  @Post('fichier')
  @ApiHeaders([
    { name: 'Content-Type', description: 'multipart/form-data' },
    { name: 'Authorization', description: 'Bearer Token' },
  ])
  @ApiOperation({ summary: 'Téléchargement de ficher sur le serveur S3 Aws' })
  public uploadFile(@UploadedFile() file:Express.Multer.File){
    this.fichierService.uploadFile(file);
  }
}
