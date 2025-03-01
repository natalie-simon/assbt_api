import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';
import * as Papertrail from 'winston-papertrail';

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new transports.Console({
          level: 'info',
          format: format.combine(
            format.timestamp(),
            format.prettyPrint(),
            format.printf(({ timestamp, level, message }) => {
              return `${timestamp} [${level}]: ${message}`;
            }),
          ),
        }),
        new Papertrail.Papertrail({
          host: 'logs5.papertrailapp.com',
          port: 50878,
          logFormat: function (level, message) {
            return `${level}: ${message}`;
          },
        }),
      ],
    }),
  ],
})
export class LoggerModule {}
