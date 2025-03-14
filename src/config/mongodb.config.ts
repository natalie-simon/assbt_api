import { ConfigService } from '@nestjs/config';

export const mongodbConfig = {
  imports: [],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>('MONGODB_URI'),
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  }),
  inject: [ConfigService],
};
