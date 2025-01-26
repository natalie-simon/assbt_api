import { Test, TestingModule } from '@nestjs/testing';
import { StatutsController } from './statuts.controller';
import { StatutsService } from './services/statuts.service';
import { StatutsServiceMock } from '../statuts/mocks/statuts.service.mock';
import { statutsMock } from './mocks/statuts.mock';
import { CreateStatutDto } from './dtos/create-statut.dto';

describe('StatutsController', () => {
  let controller: StatutsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatutsController],
      providers: [
        {
          provide: StatutsService,
          useClass: StatutsServiceMock,
        },
      ],
    }).compile();

    controller = module.get<StatutsController>(StatutsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  /*describe('getStatuts', () => {
    it('should return an array of Statuts', () => {
      expect(controller.getStatuts()).resolves.toEqual(statutsMock);
    });
  });*/

  describe('createStatut', () => {
    const dto = {
      lbl_statut: 'Statut 1',
    } as CreateStatutDto;

    it('should return a new Statut', () => {
      expect(controller.createStatut(dto)).resolves.toEqual(statutsMock[0]);
    });
  });

});
