import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config(); // Charger les variables d'environnement

/**
 * Config datasource pour les migrations bdd
 */
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'],
  migrationsRun: false,
  logging: true,
});

export default AppDataSource;
