import { ConfigService } from '@nestjs/config';

/**
 * Configuration de la connexion à la base de données MongoDB
 */
export const mongodbConfig = {
  imports: [],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>('MONGODB_URI'),
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  }),
  inject: [ConfigService],
};
