import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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
        enableImplicitConversion: false, // Conversion implicite
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

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
