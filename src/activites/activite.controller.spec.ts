import { Test, TestingModule } from '@nestjs/testing';
import { ActiviteController } from './activite.controller';
import { ActiviteService } from './services/activite.service';
import { CreateActiviteDto } from './dtos/create-activite.dto';
import { ActiviteServiceMock } from './mocks/activite.service.mock';
import {
  mockActivites,
  mockCreateActiviteDto,
  mockNewActivite,
  mockActiveUser,
  mockInscriptionActiviteDto,
  mockMembreActivite,
} from './mocks/activites.mock';

// Mock des décorateurs
jest.mock(
  '../auth/decorators/active-user.decorator',
  () => ({
    ActiveUser:
      () => (target: any, key: string, descriptor: PropertyDescriptor) =>
        descriptor,
  }),
  { virtual: true },
);

jest.mock(
  '../auth/decorators/auth.decorator',
  () => ({
    Auth: () => (target: any, key: string, descriptor: PropertyDescriptor) =>
      descriptor,
  }),
  { virtual: true },
);

jest.mock(
  '../auth/decorators/roles.decorator',
  () => ({
    Roles: () => (target: any, key: string, descriptor: PropertyDescriptor) =>
      descriptor,
  }),
  { virtual: true },
);

describe('ActiviteController', () => {
  let controller: ActiviteController;
  let activiteService: ActiviteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActiviteController],
      providers: [
        {
          provide: ActiviteService,
          useClass: ActiviteServiceMock,
        },
      ],
    }).compile();

    controller = module.get<ActiviteController>(ActiviteController);
    activiteService = module.get<ActiviteService>(ActiviteService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAllActivites', () => {
    it('should return an array of activites', async () => {
      // Arrange
      jest
        .spyOn(activiteService, 'findAllActivites')
        .mockResolvedValue(mockActivites);

      // Act
      const result = await controller.findAllActivites();

      // Assert
      expect(result).toEqual(mockActivites);
      expect(activiteService.findAllActivites).toHaveBeenCalled();
    });
  });

  describe('createActivite', () => {
    it('should call activiteService.createActivite with the provided DTO', async () => {
      // Arrange
      const createActiviteDto: CreateActiviteDto = mockCreateActiviteDto;
      jest
        .spyOn(activiteService, 'createActivite')
        .mockResolvedValue(mockNewActivite);

      // Act
      const result = await controller.createActivite(createActiviteDto);

      // Assert
      expect(activiteService.createActivite).toHaveBeenCalledWith(
        createActiviteDto,
      );
      expect(result).toEqual(mockNewActivite);
    });
  });

  describe('inscriptionActivite', () => {
    it('should call activiteService.inscriptionActivite with the provided id, DTO and user', async () => {
      // Arrange
      const activiteId = 1;
      const inscriptionDto = mockInscriptionActiviteDto;
      const user = mockActiveUser;
      jest
        .spyOn(activiteService, 'inscriptionActivite')
        .mockResolvedValue(mockMembreActivite);

      // Act
      const result = await controller.inscriptionActivite(
        activiteId,
        inscriptionDto,
        user,
      );

      // Assert
      expect(activiteService.inscriptionActivite).toHaveBeenCalledWith(
        activiteId,
        inscriptionDto,
        user,
      );
      expect(result).toEqual(mockMembreActivite);
    });
  });

  describe('desinscriptionActivite', () => {
    it('should call activiteService.desinscriptionActivite with the provided id and user', async () => {
      // Arrange
      const activiteId = 1;
      const user = mockActiveUser;
      jest.spyOn(activiteService, 'desinscriptionActivite').mockResolvedValue({
        success: true,
        message: 'Désinscription effectuée avec succès',
      });

      // Act
      const result = await controller.desinscriptionActivite(activiteId, user);

      // Assert
      expect(activiteService.desinscriptionActivite).toHaveBeenCalledWith(
        activiteId,
        user,
      );
      expect(result).toEqual({
        success: true,
        message: 'Désinscription effectuée avec succès',
      });
    });
  });
});
