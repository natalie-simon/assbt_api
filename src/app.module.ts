import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembresModule } from './membres/membres.module';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import jwtConfig from './auth/config/jwt.config';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from './auth/guards/access-token.guard';
import { AuthenticationGuard } from './auth/guards/authentication.guard';
import { MailModule } from './mail/mail.module';
import { RolesGuard } from './auth/guards/roles.guard';
import { UploadsModule } from './uploads/uploads.module';
import { LoggerModule } from './logger/logger.module';
import { CategoriesActivitesModule } from './categories-activites/categories-activites.module';
import { ActivitesModule } from './activites/activites.module';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import environnementValidation from './config/environnement.validation';
import { MongooseModule } from '@nestjs/mongoose';
import mailConfig from './config/mail.config';
import loggerConfig from './config/logger.config';

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
        synchronize: true,
        entities: [__dirname + '/database/core/**/*.entity{.ts,.js}'],
        logging: process.env.NODE_ENV === 'development',
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      load: [appConfig, databaseConfig, mailConfig, loggerConfig],
      validationSchema: environnementValidation,
    }),
    MembresModule,
    ArticlesModule,
    AuthModule,
    MailModule,
    UploadsModule,
    LoggerModule,
    CategoriesActivitesModule,
    ActivitesModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthenticationGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    AccessTokenGuard,
  ],
})
export class AppModule {}
