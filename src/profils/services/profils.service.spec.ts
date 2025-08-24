import { Test, TestingModule } from '@nestjs/testing';
import { ProfilsService } from './profils.service';
import { Repository } from 'typeorm';
import { Profil } from '../../database/core/profil.entity';
import { FichierService } from '../../fichiers/services/fichier.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BadRequestException } from '@nestjs/common';
import { Fichier } from '../../database/core/fichier.entity';

describe('ProfilsService', () => {
  let service: ProfilsService;
  let profilRepository: Repository<Profil>;
  let fichierService: FichierService;

  const mockProfilRepository = {
    findOne: jest.fn(),
    save: jest.fn(),
    create: jest.fn(),
  };

  const mockFichierService = {
    uploadFile: jest.fn(),
  };

  const mockProfil: Profil = {
    id: 1,
    nom: 'Doe',
    prenom: 'John',
    telephone: '0123456789',
    communication_mail: false,
    communication_sms: false,
    avatar: null,
    membre: null,
  };

  const mockFichier: Fichier = {
    id: 1,
    nom: 'avatar.jpg',
    url: 'https://example.com/avatar.jpg',
    type: 'image',
    mime: 'image/jpeg',
    taille: 1024,
    dateCreation: new Date(),
    dateMaj: new Date(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfilsService,
        {
          provide: getRepositoryToken(Profil),
          useValue: mockProfilRepository,
        },
        {
          provide: FichierService,
          useValue: mockFichierService,
        },
      ],
    }).compile();

    service = module.get<ProfilsService>(ProfilsService);
    profilRepository = module.get<Repository<Profil>>(
      getRepositoryToken(Profil),
    );
    fichierService = module.get<FichierService>(FichierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('should return a profile by id', async () => {
      mockProfilRepository.findOne.mockResolvedValue(mockProfil);

      const result = await service.findOne(1);

      expect(mockProfilRepository.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(result).toEqual(mockProfil);
    });

    it('should return null when profile is not found', async () => {
      mockProfilRepository.findOne.mockResolvedValue(null);

      const result = await service.findOne(999);

      expect(mockProfilRepository.findOne).toHaveBeenCalledWith({
        where: { id: 999 },
      });
      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a profile', async () => {
      const updatedProfil = { ...mockProfil, nom: 'Smith' };
      mockProfilRepository.save.mockResolvedValue(updatedProfil);

      const result = await service.update(updatedProfil);

      expect(mockProfilRepository.save).toHaveBeenCalledWith(updatedProfil);
      expect(result).toEqual(updatedProfil);
    });
  });

  describe('create', () => {
    it('should create a new profile', async () => {
      const newProfil = { ...mockProfil, id: undefined };
      mockProfilRepository.create.mockReturnValue(newProfil);
      mockProfilRepository.save.mockResolvedValue(mockProfil);

      const result = await service.create(newProfil);

      expect(mockProfilRepository.create).toHaveBeenCalledWith(newProfil);
      expect(mockProfilRepository.save).toHaveBeenCalledWith(newProfil);
      expect(result).toEqual(mockProfil);
    });
  });

  describe('updateAvatar', () => {
    const mockFile = {
      fieldname: 'fichier',
      originalname: 'avatar.jpg',
      encoding: '7bit',
      mimetype: 'image/jpeg',
      buffer: Buffer.from('test image content'),
      size: 1024,
    } as Express.Multer.File;

    it('should update profile avatar', async () => {
      mockProfilRepository.findOne.mockResolvedValue(mockProfil);
      mockFichierService.uploadFile.mockResolvedValue(mockFichier);
      mockProfilRepository.save.mockResolvedValue({
        ...mockProfil,
        avatar: mockFichier,
      });

      const result = await service.updateAvatar(1, mockFile);

      expect(mockProfilRepository.findOne).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(mockFichierService.uploadFile).toHaveBeenCalledWith(mockFile);
      expect(mockProfilRepository.save).toHaveBeenCalledWith({
        ...mockProfil,
        avatar: mockFichier,
      });
      expect(result).toEqual({
        ...mockProfil,
        avatar: mockFichier,
      });
    });

    it('should throw BadRequestException when profile is not found', async () => {
      mockProfilRepository.findOne.mockResolvedValue(null);

      await expect(service.updateAvatar(999, mockFile)).rejects.toThrow(
        BadRequestException,
      );
      expect(mockProfilRepository.findOne).toHaveBeenCalledWith({
        where: { id: 999 },
      });
      expect(mockFichierService.uploadFile).not.toHaveBeenCalled();
      expect(mockProfilRepository.save).not.toHaveBeenCalled();
    });
  });
});
