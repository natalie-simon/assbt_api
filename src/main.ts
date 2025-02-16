import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { S3Client, S3ClientConfig } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

dotenv.config();

/**
 * Point d'entrée pour l'application
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    forbidNonWhitelisted: true,
  }));
  app.enableCors({
    origin: process.env.ORIGIN, // Remplacez par l'origine de votre frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .setVersion('0.1')
    .setTitle('Api des bulleurs Toulonnais.')
    .setContact('Natalie Simon', '', 'admin@nataliesimon.fr')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('documentation', app, document);

// Configuration de l'accès à AWS
const configService = app.get(ConfigService);
const s3Config: S3ClientConfig = {
  region: configService.get('appConfig.awsRegion'),
  credentials: {
    accessKeyId: configService.get('appConfig.awsAccessKeyId'),
    secretAccessKey: configService.get('appConfig.awsSecretAccessKey'),
  },
};
const s3Client = new S3Client(s3Config);


  await app.listen(process.env.LISTEN_PORT || 3000);
}
bootstrap();
