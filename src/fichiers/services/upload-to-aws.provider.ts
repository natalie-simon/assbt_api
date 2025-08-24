import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v4 as uuid4 } from 'uuid';
import * as path from 'path';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

/**
 * Service permettant d'uploader un fichier sur AWS S3
 */
@Injectable()
export class UploadToAwsProvider {
  /**
   * Client AWS S3
   *
   * @private
   * @type {S3Client}
   * @memberof UploadToAwsProvider
   */
  private s3Client: S3Client;
  /**
   * Constructeur
   * @param configService
   */
  constructor(private readonly configService: ConfigService) {
    this.s3Client = new S3Client({
      region: this.configService.get('appConfig.awsRegion'),
    });
  }

  /**
   * Méthode pour uploader un fichier sur AWS S3
   * @param file
   * @returns
   */
  public async uploadFile(file: Express.Multer.File) {
    const bucketName = this.configService.get('appConfig.awsBucketName');
    const fileName = this.generateFileName(file);

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    try {
      const uploadResult = await this.s3Client.send(command);
      return fileName;
    } catch (error) {
      throw new RequestTimeoutException("Erreur lors de l'upload du fichier");
    }
  }

  /**
   * Méthode pour générer un nom de fichier unique
   * @param file
   * @returns
   */
  private generateFileName(file: Express.Multer.File): string {
    const name = file.originalname.split('.')[0].replace(/\s/g, '').trimEnd();
    const extension = path.extname(file.originalname);
    const timestamp = new Date().getTime().toString().trim();

    return `${name}-${timestamp}-${uuid4()}${extension}`;
  }
}
