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

  });
});
