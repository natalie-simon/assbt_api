import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  DB_HOST: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_PORT: Joi.number().port().default(5432),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  LISTEN_PORT: Joi.number().port().default(3000),
  JWT_SECRET: Joi.string().required(),
  ACCESS_TOKEN_VALIDITY_DURATION_IN_SEC: Joi.number().default(3600),
  JWT_ACCESS_TOKEN_TLL: Joi.number().default(3600),
  CLEF: Joi.string().required(),
});