import { Module } from '@nestjs/common';
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
import { FichiersModule } from './fichiers/fichiers.module';
import { CategoriesActivitesModule } from './categories-activites/categories-activites.module';
import { ActivitesModule } from './activites/activites.module';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import environnementValidation from './config/environnement.validation';
import { MongooseModule } from '@nestjs/mongoose';
import mailConfig from './config/mail.config';
import { ProfilsModule } from './profils/profils.module';
import { PrismaModule } from './prisma/prisma.module';


/**
 * Chargement des variables d'environnement
 */
const ENV = process.env.NODE_ENV;

/**
 * Gestion du module principal de l'application
 */
@Module({
  imports: [
    PrismaModule,
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
      load: [appConfig, databaseConfig, mailConfig],
      validationSchema: environnementValidation,
    }),
    MembresModule,
    ArticlesModule,
    AuthModule,
    MailModule,
    FichiersModule,
    CategoriesActivitesModule,
    ActivitesModule,
    ProfilsModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthenticationGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    AccessTokenGuard,
  ],
})
export class AppModule {}
