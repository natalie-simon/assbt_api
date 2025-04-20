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
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true, // Conversion implicite
      },
    }),
  );

  // Configuration CORS
app.enableCors({
  origin: '*', // Autorise toutes les origines
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: '*', // Autorise tous les en-têtes
  exposedHeaders: '*', // Expose tous les en-têtes
  credentials: true, // Autorise les credentials (cookies, auth)
  preflightContinue: false,
  optionsSuccessStatus: 204,
  maxAge: 86400, // Cache la réponse preflight pendant 24h
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

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
