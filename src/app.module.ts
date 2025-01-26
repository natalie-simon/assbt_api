import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { StatutsModule } from './statuts/statuts.module';
import { ArticlesModule } from './articles/articles.module';
import { CategoriesArticlesModule } from './categories-articles/categories-articles.modules';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();
/**
 * Gestion du module principal de l'application
 */
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        autoLoadEntities: true,
        synchronize: true,
        logging: process.env.NODE_ENV === 'development',
      }),
    }),
    //AccueilsModule,
    UsersModule,
    //AuthModule,
    StatutsModule,
    CategoriesArticlesModule,
    ArticlesModule,
    AuthModule,
  ],
})
export class AppModule {}
