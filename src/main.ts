import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'aws-sdk';
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
config.update({
  credentials: {
    accessKeyId: configService.get('appConfig.awsAccessKeyId'),
    secretAccessKey: configService.get('appConfig.awsSecretAccessKey'),
  },
  region: configService.get('appConfig.awsRegion'),
});

  await app.listen(process.env.LISTEN_PORT || 3000);
}
bootstrap();
