import { Test, TestingModule } from '@nestjs/testing';
import { ActiviteController } from './activite.controller';
import { ActiviteService } from './services/activite.service';
import { CreateActiviteDto } from './dtos/create-activite.dto';


describe('ActiviteController', () => {
  let controller: ActiviteController;
  let activiteService: ActiviteService;

  const mockActiviteService = {
    findAllActivites: jest.fn(),
    createActivite: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActiviteController],
      providers: [
        {
          provide: ActiviteService,
          useValue: mockActiviteService,
        },
      ],
    }).compile();

    controller = module.get<ActiviteController>(ActiviteController);
    activiteService = module.get<ActiviteService>(ActiviteService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  /*describe('findAllActivites', () => {
    it('should call activiteService.findAllActivites', async () => {
      await controller.findAllActivites();
      expect(activiteService.findAllActivites).toHaveBeenCalled();
    });

    it('should have the correct decorators', () => {
      const getDecorator = Reflect.getMetadata(
        '__path__',
        controller.findAllActivites,
      );
      expect(getDecorator).toBe('/');

      const authDecorator = Reflect.getMetadata(
        '__auth__',
        controller.findAllActivites,
      );
      expect(authDecorator).toBe(AuthTypes.Bearer);

      const rolesDecorator = Reflect.getMetadata(
        '__roles__',
        controller.findAllActivites,
      );
      expect(rolesDecorator).toEqual([RoleTypes.ADMIN]);

      const apiOperationDecorator = Reflect.getMetadata(
        '__apiOperation__',
        controller.findAllActivites,
      );
      expect(apiOperationDecorator).toEqual({
        summary: 'Récupération de toutes les activités',
      });

      const apiResponseDecorator = Reflect.getMetadata(
        '__apiResponse__',
        controller.findAllActivites,
      );
      expect(apiResponseDecorator).toEqual([
        { status: 200, description: 'Liste de toutes les activités' },
      ]);
    });
  });*/

  describe('createActivite', () => {
    it('should call activiteService.createActivite with the provided DTO', async () => {
      const createActiviteDto: CreateActiviteDto = {
        titre: 'Titre activité',
        contenu: "Le contenu de l'activité",
        date_heure_debut: new Date(),
        date_heure_fin: new Date(),
        categorie: 1
      };
      await controller.createActivite(createActiviteDto);
      expect(activiteService.createActivite).toHaveBeenCalledWith(
        createActiviteDto,
      );
    });

    /*it('should have the correct decorators', () => {
      const postDecorator = Reflect.getMetadata(
        '__path__',
        controller.createActivite,
      );
      expect(postDecorator).toBe('create');

      const authDecorator = Reflect.getMetadata(
        '__auth__',
        controller.createActivite,
      );
      expect(authDecorator).toBe(AuthTypes.Bearer);

      const rolesDecorator = Reflect.getMetadata(
        '__roles__',
        controller.createActivite,
      );
      expect(rolesDecorator).toEqual([RoleTypes.ADMIN]);

      const apiOperationDecorator = Reflect.getMetadata(
        '__apiOperation__',
        controller.createActivite,
      );
      expect(apiOperationDecorator).toEqual({
        summary: "Création d'une activité",
      });

      const apiResponseDecorator = Reflect.getMetadata(
        '__apiResponse__',
        controller.createActivite,
      );
      expect(apiResponseDecorator).toEqual([
        { status: 201, description: "L'activité a été créée avec succès" },
      ]);

      const bodyDecorator = Reflect.getMetadata(
        '__routeArguments__',
        controller.createActivite,
      );
      const bodyParam = bodyDecorator.find(
        (param: any) => param.type === 'body',
      );
      expect(bodyParam).toBeDefined();
    });*/
  });
});
