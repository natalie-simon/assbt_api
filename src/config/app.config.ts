import { registerAs } from "@nestjs/config";

export default registerAs('appConfig', () => ({
  environment: process.env.NODE_ENV || 'production',
  awsBucketName: process.env.AWS_BUCKET_NAME,
  awsRegion: process.env.AWS_REGION,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  cloudfront_url: process.env.CLOUDFRONT_URL,
}));
