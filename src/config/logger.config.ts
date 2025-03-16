import { registerAs } from '@nestjs/config';

export default registerAs('logger', () => ({
  papertrail_host: process.env.PAPERTRAIL_HOST || 'logs5.papertrailapp.com',
  papertrail_port: parseInt(process.env.PAPERTRAIL_PORT) || 50878,
  log_level: process.env.LOG_LEVEL || 'info',
}));
