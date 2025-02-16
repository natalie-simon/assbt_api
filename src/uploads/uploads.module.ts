import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { UploadService } from './services/upload.service';
import { Upload } from '../database/core/upload.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadToAwsProvider } from './services/upload-to-aws.provider';

@Module({
  controllers: [UploadsController],
  providers: [UploadService, UploadToAwsProvider],
  imports: [TypeOrmModule.forFeature([Upload])],
})
export class UploadsModule {}
