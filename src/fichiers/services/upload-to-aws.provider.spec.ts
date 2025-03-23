import { Test, TestingModule } from '@nestjs/testing';
import { UploadToAwsProvider } from './upload-to-aws.provider';
import { ConfigService } from '@nestjs/config';
import { RequestTimeoutException } from '@nestjs/common';
import { S3Client, PutObjectCommand, PutObjectCommandOutput } from '@aws-sdk/client-s3';

jest.mock('@aws-sdk/client-s3');

describe('UploadToAwsProvider', () => {
  let provider: UploadToAwsProvider;
  let configService: ConfigService;
  let s3Client: jest.Mocked<S3Client>;

  const mockConfigService = {
    get: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UploadToAwsProvider,
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    }).compile();

    provider = module.get<UploadToAwsProvider>(UploadToAwsProvider);
    configService = module.get<ConfigService>(ConfigService);
    s3Client = new S3Client({}) as jest.Mocked<S3Client>;
    (provider as any).s3Client = s3Client;
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  describe('uploadFile', () => {
    const mockFile = {
      originalname: 'test image.jpg',
      mimetype: 'image/jpeg',
      buffer: Buffer.from('test content'),
    } as Express.Multer.File;

    it('should upload file successfully', async () => {
      mockConfigService.get.mockReturnValue('test-bucket');
      const mockResponse = {
        $metadata: {
          httpStatusCode: 200,
          requestId: 'test-request-id',
          attempts: 1,
          totalRetryDelay: 0,
        },
      } as PutObjectCommandOutput;
      (s3Client.send as jest.Mock).mockResolvedValue(mockResponse);

      const result = await provider.uploadFile(mockFile);

      expect(s3Client.send).toHaveBeenCalledWith(
        expect.any(PutObjectCommand),
      );
      expect(result).toMatch(/^testimage-\d+-[a-f0-9-]+\.jpg$/);
    });

    it('should throw RequestTimeoutException when upload fails', async () => {
      mockConfigService.get.mockReturnValue('test-bucket');
      (s3Client.send as jest.Mock).mockRejectedValue(new Error('Upload failed'));

      await expect(provider.uploadFile(mockFile)).rejects.toThrow(
        RequestTimeoutException,
      );
    });
  });

  describe('generateFileName', () => {
    it('should generate a unique filename with timestamp and uuid', () => {
      const mockFile = {
        originalname: 'test image.jpg',
      } as Express.Multer.File;

      const fileName = (provider as any).generateFileName(mockFile);

      expect(fileName).toMatch(/^testimage-\d+-[a-f0-9-]+\.jpg$/);
    });

    it('should handle filenames with multiple dots', () => {
      const mockFile = {
        originalname: 'test.image.with.dots.jpg',
      } as Express.Multer.File;

      const fileName = (provider as any).generateFileName(mockFile);

      expect(fileName).toMatch(/^test-\d+-[a-f0-9-]+\.jpg$/);
    });

    it('should handle filenames with spaces', () => {
      const mockFile = {
        originalname: 'test image with spaces.jpg',
      } as Express.Multer.File;

      const fileName = (provider as any).generateFileName(mockFile);

      expect(fileName).toMatch(/^testimagewithspaces-\d+-[a-f0-9-]+\.jpg$/);
    });
  });
});
