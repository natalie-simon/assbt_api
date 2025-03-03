import { Test, TestingModule } from '@nestjs/testing';
import { UploadService } from './upload.service';
import { UploadToAwsProvider } from './upload-to-aws.provider';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { Upload } from '../../database/core/upload.entity';
import { BadRequestException, ConflictException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { fileTypes } from '../enums/file-types.enum';

describe('UploadService', () => {
  let service: UploadService;
  let uploadToAwsProvider: UploadToAwsProvider;
  let configService: ConfigService;
  let uploadsRepository: Repository<Upload>;

  const mockUploadToAwsProvider = {
    uploadFile: jest.fn(),
  };

  const mockConfigService = {
    get: jest.fn(),
  };

  const mockUploadsRepository = {
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UploadService,
        {
          provide: UploadToAwsProvider,
          useValue: mockUploadToAwsProvider,
        },
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
        {
          provide: getRepositoryToken(Upload),
          useValue: mockUploadsRepository,
        },
      ],
    }).compile();

    service = module.get<UploadService>(UploadService);
    uploadToAwsProvider = module.get<UploadToAwsProvider>(UploadToAwsProvider);
    configService = module.get<ConfigService>(ConfigService);
    uploadsRepository = module.get<Repository<Upload>>(
      getRepositoryToken(Upload),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('uploadFile', () => {
    it('should throw BadRequestException for unsupported file type', async () => {
      const file = {
        mimetype: 'application/pdf',
      } as Express.Multer.File;

      await expect(service.uploadFile(file)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should upload file successfully', async () => {
      const file = {
        mimetype: 'image/png',
        size: 1024,
      } as Express.Multer.File;

      const mockFileName = 'test-file.png';
      const mockCloudfrontUrl = 'test-cloudfront.com';
      const mockUpload = {
        nom: mockFileName,
        url: `https://${mockCloudfrontUrl}/${mockFileName}`,
        type: fileTypes.IMAGE,
        mime: file.mimetype,
        size: file.size,
      } as Upload;

      mockUploadToAwsProvider.uploadFile.mockResolvedValue(mockFileName);
      mockConfigService.get.mockReturnValue(mockCloudfrontUrl);
      mockUploadsRepository.create.mockReturnValue(mockUpload);
      mockUploadsRepository.save.mockResolvedValue(mockUpload);

      const result = await service.uploadFile(file);

      expect(uploadToAwsProvider.uploadFile).toHaveBeenCalledWith(file);
      expect(configService.get).toHaveBeenCalledWith(
        'appConfig.cloudfront_url',
      );
      expect(uploadsRepository.create).toHaveBeenCalledWith({
        nom: mockFileName,
        url: `https://${mockCloudfrontUrl}/${mockFileName}`,
        type: fileTypes.IMAGE,
        mime: file.mimetype,
        size: file.size,
      });
      expect(uploadsRepository.save).toHaveBeenCalledWith(mockUpload);
      expect(result).toEqual(mockUpload);
    });
  });
});
