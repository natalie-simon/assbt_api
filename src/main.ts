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
  const config = new DocumentBuilder()
    .setVersion('0.1')
    .setTitle('Api des bulleurs Toulonnais.')
    .setContact('Natalie Simon', '', 'admin@nataliesimon.fr')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('documentation', app, document);

  await app.listen(process.env.LISTEN_PORT || 3000);
}
bootstrap();
