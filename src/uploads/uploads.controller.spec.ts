import { Test, TestingModule } from '@nestjs/testing';
import { UploadsController } from './uploads.controller';
import { UploadService } from './services/upload.service';
import { UploadServiceMock } from './mocks/upload.service.mock';


describe('UploadsController', () => {
  let controller: UploadsController;
  let uploadService: UploadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadsController],
      providers: [
        {
          provide: UploadService,
          useClass: UploadServiceMock,
        },
      ],
    }).compile();

    controller = module.get<UploadsController>(UploadsController);
    uploadService = module.get<UploadService>(UploadService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('uploadFile', () => {
    it('should call uploadService.uploadFile with the file', async () => {
      const fileMock = {
        originalname: 'test.txt',
        buffer: Buffer.from('file content'),
      } as Express.Multer.File;

      // Espionner la méthode uploadFile du service
      const uploadFileSpy = jest
        .spyOn(uploadService, 'uploadFile')
        .mockResolvedValue(undefined);

      await controller.uploadFile(fileMock);

      // Vérifier que la méthode uploadFile a été appelée avec le fichier
      expect(uploadFileSpy).toHaveBeenCalledWith(fileMock);
    });
  });
});
