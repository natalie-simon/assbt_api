import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { v4 as uuid4 } from 'uuid';
import * as path from 'path';

@Injectable()
export class UploadToAwsProvider {
  constructor(private readonly configService: ConfigService) {}
  public async uploadFile(file: Express.Multer.File) {
    const s3 = new S3();

    try {
      const uploadResult = await s3
        .upload({
          Bucket: this.configService.get('appConfig.awsBucketName'),
          Key: this.generateFileName(file),
          Body: file.buffer,
          ContentType: file.mimetype,
        })
        .promise();

      return uploadResult.Key;
    } catch (error) {
      console.error(error);
      throw new RequestTimeoutException("Erreur lors de l'upload du fichier");
    }

    // upload le fichier
    // nouvelle entrée dans la bdd
  }

  private generateFileName(file: Express.Multer.File): string {
    let name = file.originalname.split('.')[0].replace(/\s/g, '').trimEnd();
    let extension = path.extname(file.originalname);
    let timestamp = new Date().getTime().toString().trim();

    return `${name}-${timestamp}-${uuid4()}${extension}`;
  }
}
