import { Test, TestingModule } from '@nestjs/testing';
import { UploadsController } from './uploads.controller';
import { FichierService } from './services/fichier.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiHeaders, ApiOperation } from '@nestjs/swagger';
import { Express } from 'express';

describe('UploadsController', () => {
  let controller: UploadsController;
  let fichierService: FichierService;

  const mockUploadService = {
    uploadFile: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadsController],
      providers: [
        {
          provide: FichierService,
          useValue: mockUploadService,
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
    it('should call uploadService.uploadFile with the uploaded file', () => {
      const mockFile = {
        originalname: 'test-file.png',
        buffer: Buffer.from('test'),
        mimetype: 'image/png',
      } as Express.Multer.File;

      controller.uploadFile(mockFile);

      expect(fichierService.uploadFile).toHaveBeenCalledWith(mockFile);
    });
  });
});
