import { Test, TestingModule } from '@nestjs/testing';
import { FichierService } from './fichier.service';
import { UploadToO2SwitchProvider } from '../providers/upload-to-o2switch.provider';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { Fichier } from '../../database/core/fichier.entity';
import { BadRequestException, ConflictException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { fileTypes } from '../enums/file-types.enum';

describe('UploadService', () => {
  let service: FichierService;
  let uploadProvider: UploadToO2SwitchProvider;
  let configService: ConfigService;
  let uploadsRepository: Repository<Fichier>;

  const mockUploadProvider = {
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
        FichierService,
        {
          provide: UploadToO2SwitchProvider,
          useValue: mockUploadProvider,
        },
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
        {
          provide: getRepositoryToken(Fichier),
          useValue: mockUploadsRepository,
        },
      ],
    }).compile();

    service = module.get<FichierService>(FichierService);
    uploadProvider = module.get<UploadToO2SwitchProvider>(UploadToO2SwitchProvider);
    configService = module.get<ConfigService>(ConfigService);
    uploadsRepository = module.get<Repository<Fichier>>(
      getRepositoryToken(Fichier),
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
        taille: file.size,
      } as Fichier;

      mockUploadProvider.uploadFile.mockResolvedValue(mockFileName);
      mockConfigService.get.mockReturnValue(mockCloudfrontUrl);
      mockUploadsRepository.create.mockReturnValue(mockUpload);
      mockUploadsRepository.save.mockResolvedValue(mockUpload);

      const result = await service.uploadFile(file);

      expect(uploadProvider.uploadFile).toHaveBeenCalledWith(file);
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

  it('should throw ConflictException when upload fails', async () => {
    // Arrange
    const file = {
      mimetype: 'image/png',
      size: 1024,
    } as Express.Multer.File;

    const errorMessage = 'Upload failed';
    mockUploadProvider.uploadFile.mockRejectedValue(
      new Error(errorMessage),
    );

    // Spy on console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    // Act & Assert
    await expect(service.uploadFile(file)).rejects.toThrow(ConflictException);

    expect(uploadProvider.uploadFile).toHaveBeenCalledWith(file);
    expect(consoleLogSpy).toHaveBeenCalled();

    // Restore console.log
    consoleLogSpy.mockRestore();
  });

  it('should throw ConflictException when upload fails', async () => {
    // Arrange
    const file = {
      mimetype: 'image/png',
      size: 1024,
    } as Express.Multer.File;

    const errorMessage = 'Upload failed';
    mockUploadProvider.uploadFile.mockRejectedValue(
      new Error(errorMessage),
    );

    // Spy on console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    // Act & Assert
    await expect(service.uploadFile(file)).rejects.toThrow(ConflictException);

    expect(uploadProvider.uploadFile).toHaveBeenCalledWith(file);
    expect(consoleLogSpy).toHaveBeenCalled();

    // Restore console.log
    consoleLogSpy.mockRestore();
  });

  it('should throw ConflictException when upload fails', async () => {
    // Arrange
    const file = {
      mimetype: 'image/png',
      size: 1024,
    } as Express.Multer.File;

    const errorMessage = 'Upload failed';
    mockUploadProvider.uploadFile.mockRejectedValue(
      new Error(errorMessage),
    );

    // Spy on console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    // Act & Assert
    await expect(service.uploadFile(file)).rejects.toThrow(ConflictException);

    expect(uploadProvider.uploadFile).toHaveBeenCalledWith(file);
    expect(consoleLogSpy).toHaveBeenCalled();

    // Restore console.log
    consoleLogSpy.mockRestore();
  });
});
