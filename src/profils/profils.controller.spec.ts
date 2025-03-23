import { Test, TestingModule } from '@nestjs/testing';
import { ProfilsController } from './profils.controller';
import { ProfilsService } from './services/profils.service';
import { ProfilsServiceMock } from './mocks/profils.service.mock';
import { mockProfil, mockFichier, mockActiveUser } from './mocks/profils.mock';
import { mockUploadedFile } from '../fichiers/mocks/uploads.mock';

describe('ProfilsController', () => {
  let controller: ProfilsController;
  let profilsService: ProfilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfilsController],
      providers: [
        {
          provide: ProfilsService,
          useClass: ProfilsServiceMock,
        },
      ],
    }).compile();

    controller = module.get<ProfilsController>(ProfilsController);
    profilsService = module.get<ProfilsService>(ProfilsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it('should return a profile by id', async () => {
      const result = await controller.findOne('1');

      expect(result).toEqual(mockProfil);
    });

    it('should throw BadRequestException when profile is not found', async () => {
      await expect(controller.findOne('999')).rejects.toThrow('Profil non trouvé');
    });
  });

  describe('update', () => {
    it('should update a profile', async () => {
      const updatedProfil = { ...mockProfil, nom: 'Smith' };
      const result = await controller.update('1', updatedProfil, mockActiveUser);

      expect(result).toEqual(updatedProfil);
    });
  });

  describe('updateAvatar', () => {
    it('should update profile avatar', async () => {
      const result = await controller.updateAvatar('1', mockUploadedFile, mockActiveUser);

      expect(result).toEqual({
        ...mockProfil,
        avatar: mockFichier,
      });
    });

    it('should throw BadRequestException when user is not authorized', async () => {
      const unauthorizedUser = { ...mockActiveUser, sub: 999 };
      await expect(controller.updateAvatar('1', mockUploadedFile, unauthorizedUser))
        .rejects.toThrow('Vous ne pouvez pas modifier ce profil');
    });
  });
}); 