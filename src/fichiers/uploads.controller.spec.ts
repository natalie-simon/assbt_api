import { Test, TestingModule } from '@nestjs/testing';
import { UploadsController } from './uploads.controller';
import { FichierService } from './services/fichier.service';
import { Fichier } from '../database/core/fichier.entity';
import { mockUploadedFile } from './mocks/uploads.mock';
import { UploadToO2SwitchProvider } from './providers/upload-to-o2switch.provider';
import { ConfigService } from '@nestjs/config'; // Add this import

describe('UploadsController', () => {
  let controller: UploadsController;
  let fichierService: FichierService;

  const mockFichierService = {
    uploadFile: jest.fn(),
  };

  // Create a mock ConfigService
  const mockConfigService = {
    get: jest.fn((key: string) => {
      // Return mock values based on the key
      const config = {
        'o2switch.url': 'http://mock-o2switch-url.com',
        'o2switch.username': 'mockUsername',
        'o2switch.password': 'mockPassword',
        // Add any other config values that might be needed by UploadToO2SwitchProvider
      };
      return config[key];
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadsController],
      providers: [
        {
          provide: FichierService,
          useValue: mockFichierService,
        },
        UploadToO2SwitchProvider,
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    }).compile();

    controller = module.get<UploadsController>(UploadsController);
    fichierService = module.get<FichierService>(FichierService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('uploadFile', () => {
    it('should call fichierService with the uploaded file even if it might fail', () => {
      mockFichierService.uploadFile.mockImplementation(() => {
        throw new Error('Upload failed');
      });

      expect(() => controller.uploadFile(mockUploadedFile)).toThrow(
        'Upload failed',
      );

      expect(fichierService.uploadFile).toHaveBeenCalledWith(mockUploadedFile);
    });
  });
});
