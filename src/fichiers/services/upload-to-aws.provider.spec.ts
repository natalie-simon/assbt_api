import { Test, TestingModule } from '@nestjs/testing';
import { UploadToAwsProvider } from './upload-to-aws.provider';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { RequestTimeoutException } from '@nestjs/common';

describe('UploadToAwsProvider', () => {
  let service: UploadToAwsProvider;
  let configService: ConfigService;
  let s3Client: S3Client;

  const mockConfigService = {
    get: jest.fn(),
  };

  const mockS3Client = {
    send: jest.fn(),
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

    service = module.get<UploadToAwsProvider>(UploadToAwsProvider);
    configService = module.get<ConfigService>(ConfigService);
    // Remplacer le s3Client créé dans le constructeur par le mock
    service['s3Client'] = mockS3Client as any;
    s3Client = service['s3Client'];
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('uploadFile', () => {
    it('should upload file successfully', async () => {
      const file = {
        originalname: 'test-file.png',
        buffer: Buffer.from('test'),
        mimetype: 'image/png',
      } as Express.Multer.File;

      const mockBucketName = 'test-bucket';
      const mockFileName = expect.any(String); // On ne connait pas le nom exact, mais on vérifie que c'est une string
      const mockUploadResult = {};

      mockConfigService.get.mockReturnValueOnce(mockBucketName);
      mockS3Client.send.mockResolvedValueOnce(mockUploadResult);

      const result = await service.uploadFile(file);

      expect(configService.get).toHaveBeenCalledWith('appConfig.awsBucketName');
      expect(s3Client.send).toHaveBeenCalledWith(
        expect.objectContaining({
          input: {
            Bucket: mockBucketName,
            Key: mockFileName,
            Body: file.buffer,
            ContentType: file.mimetype,
          },
        }),
      );
      expect(result).toEqual(mockFileName);
    });

    it('should throw RequestTimeoutException on upload failure', async () => {
      const file = {
        originalname: 'test-file.png',
        buffer: Buffer.from('test'),
        mimetype: 'image/png',
      } as Express.Multer.File;

      const mockBucketName = 'test-bucket';
      const errorMessage = 'Upload failed';

      mockConfigService.get.mockReturnValueOnce(mockBucketName);
      mockS3Client.send.mockRejectedValueOnce(new Error(errorMessage));

      await expect(service.uploadFile(file)).rejects.toThrow(
        RequestTimeoutException,
      );
    });
  });

  describe('generateFileName', () => {
    it('should generate a unique file name', () => {
      const file = {
        originalname: 'test file.png',
      } as Express.Multer.File;

      const fileName = service['generateFileName'](file); // Accès à la méthode privée via ['generateFileName']

      expect(fileName).toMatch(/^testfile-\d+-[a-f0-9-]+.png$/);
    });
  });
});
