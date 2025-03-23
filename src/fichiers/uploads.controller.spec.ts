import { Test, TestingModule } from '@nestjs/testing';
import { UploadsController } from './uploads.controller';
import { FichierService } from './services/fichier.service';
import { Fichier } from '../database/core/fichier.entity';
import { mockUploadedFile } from './mocks/uploads.mock';

describe('UploadsController', () => {
  let controller: UploadsController;
  let fichierService: FichierService;

  const mockFichierService = {
    uploadFile: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadsController],
      providers: [
        {
          provide: FichierService,
          useValue: mockFichierService,
        },
      ],
    }).compile();

    controller = module.get<UploadsController>(UploadsController);
    fichierService = module.get<FichierService>(FichierService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  /*describe('uploadFile', () => {
    it('should upload a file successfully', async () => {
      const mockFichier: Fichier = {
        id: 1,
        nom: 'test-image.jpg',
        url: 'https://example.com/test-image.jpg',
        type: 'image',
        mime: 'image/jpeg',
        taille: 1024,
        dateCreation: new Date(),
        dateMaj: new Date(),
      };

      mockFichierService.uploadFile.mockResolvedValue(mockFichier);

      const result = await controller.uploadFile(mockUploadedFile);

      expect(mockFichierService.uploadFile).toHaveBeenCalledWith(mockUploadedFile);
      expect(result).toEqual(mockFichier);
    });

    it('should handle upload errors', async () => {
      mockFichierService.uploadFile.mockRejectedValue(new Error('Upload failed'));

      await expect(controller.uploadFile(mockUploadedFile)).rejects.toThrow('Upload failed');
      expect(mockFichierService.uploadFile).toHaveBeenCalledWith(mockUploadedFile);
    });
  });*/
});
