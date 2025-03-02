import { createLogger, transports, format } from 'winston';
import Papertrail from 'winston-papertrail';

/**
 * Configuration de Winston
 */
const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console(),
    new Papertrail({
      host: 'logs.papertrailapp.com',
      port: 50878, // Remplacez par votre port Papertrail
      logFormat: function (level, message) {
        return `${level}: ${message}`;
      },
    }),
  ],
});

export default logger;
