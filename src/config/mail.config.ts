import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  mail_host: process.env.MAIL_HOST || 'sandbox.smtp.mailtrap.io',
  mail_port: parseInt(process.env.MAIL_PORT) || 2525,
  smtp_username: process.env.SMTP_USERNAME,
  smtp_password: process.env.SMTP_PASSWORD,
  mail_admin: process.env.MAIL_ADMIN || 'infosbulleurs.assbt@gmail.com',
}));
