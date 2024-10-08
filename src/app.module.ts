import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccueilsModule } from './accueils/accueils.module';
import entities from './models/typeorm';
import * as dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: entities,
      synchronize: true,
      logging: true,
    }),
    AccueilsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
