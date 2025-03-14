import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';
import * as Papertrail from 'winston-papertrail';
import { Log, LogSchema } from './schemas/log.schema';
import { MongooseModule } from '@nestjs/mongoose';
import * as MongoDB from 'winston-mongodb';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Log.name,
        schema: LogSchema,
      },
    ]),
    WinstonModule.forRoot({
      transports: [
        new Papertrail.Papertrail({
          host: 'logs5.papertrailapp.com',
          port: 50878,
          logFormat: function (level, message) {
            return `${level}: ${message}`;
          },
        }),
        new MongoDB.MongoDB({
          level: 'info',
          db: process.env.MONGODB_URI,
          options: {
           // useUnifiedTopology: true,
          },
          format: format.combine(format.timestamp(), format.json()),
        }),
      ],
    }),
  ],
})
export class LoggerModule {}
