import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';
import * as Papertrail from 'winston-papertrail';
import { Log, LogSchema } from './schemas/log.schema';
import { MongooseModule } from '@nestjs/mongoose';
import * as MongoDB from 'winston-mongodb';
import { LogsService } from './services/logs.service';
import { LogsController } from './logs.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServerInfoService } from './services/serveur-info';

/**
 * Logger module
 */
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Log.name,
        schema: LogSchema,
        collection: 'log',
      },
    ]),
    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        transports: [
          new Papertrail.Papertrail({
            host: configService.get('logger.papertrail_host'), // mettre ca en variable d'environnement
            port: configService.get('logger.papertrail_port'), // mettre ca en variable d'environnement
            logFormat: function (level, message) {
              return `${level}: ${message}`;
            },
          }),
          new MongoDB.MongoDB({
            level: configService.get('logger.log_level'),
            db: configService.get('MONGODB_URI'),
            options: {
              // useUnifiedTopology: true,
            },
            format: format.combine(format.timestamp(), format.json()),
          }),
        ],
      }),
    }),
  ],
  providers: [LogsService, ServerInfoService],
  controllers: [LogsController],
  exports: [LogsService, ServerInfoService],
})
export class LoggerModule {}
