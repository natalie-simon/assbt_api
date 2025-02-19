import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
import { ConfigModule, ConfigService } from '@nestjs/config';
import jwtConfig from './auth/config/jwt.config';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from './auth/guards/access-token.guard';
import { AuthenticationGuard } from './auth/guards/authentication.guard';
import { MailModule } from './mail/mail.module';
import { RolesGuard } from './auth/guards/roles.guard';
import { UploadsModule } from './uploads/uploads.module';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import environnementValidation from './config/environnement.validation';

/**
 * Chargement des variables d'environnement
 */
const ENV = process.env.NODE_ENV;

/**
 * Gestion du module principal de l'application
 */
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        autoLoadEntities: true,
        synchronize: false,
        entities: [__dirname + '/database/core/**/*.entity{.ts,.js}'],
        logging: process.env.NODE_ENV === 'development',
      }),
    }),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      load: [appConfig, databaseConfig],
      validationSchema: environnementValidation,
    }),
    UsersModule,
    ArticlesModule,
    AuthModule,
    MailModule,
    UploadsModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthenticationGuard },
    { provide: APP_GUARD, useClass: RolesGuard},
    AccessTokenGuard,
  ],
})
export class AppModule {}
