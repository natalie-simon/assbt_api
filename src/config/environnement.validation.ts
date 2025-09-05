import * as Joi from 'joi';

export default Joi.object({
  // Variables d'environnement générales
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  LISTEN_PORT: Joi.alternatives()
    .try(
      Joi.number().port(),
      Joi.string().valid('passenger'),
      Joi.string().pattern(/^\d+$/),
    )
    .default(3000),

  // Variables pour le logging
  LOG_LEVEL: Joi.string()
    .valid('error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly')
    .default('info'),

  // Variables de base de données PostgreSQL
  DB_HOST: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_PORT: Joi.number().port().default(5432),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),

  // Variables JWT et authentification
  JWT_SECRET: Joi.string().required(),
  ACCESS_TOKEN_VALIDITY_DURATION_IN_SEC: Joi.number().default(3600),
  JWT_ACCESS_TOKEN_TLL: Joi.number().default(3600),
  CLEF: Joi.string().required(),

  // Variables de configuration email
  MAIL_HOST: Joi.string().required().default('sandbox.smtp.mailtrap.io'),
  MAIL_PORT: Joi.number().port().required().default(2525),
  SMTP_USERNAME: Joi.string().required(),
  SMTP_PASSWORD: Joi.string().required(),
  MAIL_ADMIN: Joi.string()
    .email()
    .required()
    .default('infosbulleurs.assbt@gmail.com'),

  // Variables AWS
  AWS_BUCKET_NAME: Joi.string().required(),
  AWS_REGION: Joi.string().required(),
  AWS_ACCESS_KEY_ID: Joi.string().required(),
  AWS_SECRET_ACCESS_KEY: Joi.string().required(),
  CLOUDFRONT_URL: Joi.string().required(),

  // Variables FTP
  FTP_HOST_API_TEST: Joi.string().required(),
  FTP_USERNAME_API_TEST: Joi.string().required(),
  FTP_PASSWORD_API_TEST: Joi.string().required(),
});
