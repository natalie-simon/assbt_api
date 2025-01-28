import { Test, TestingModule } from '@nestjs/testing';
import { StatutsService } from './statuts.service';
import { DataSource } from 'typeorm';
import { Statut } from '../statut.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { statutsMock } from '../mocks/statuts.mock';
import { mockStatutsRepository } from '../mocks/statuts.repository.mock';

describe('StatutsService', () => {
  let service: StatutsService;
  const dto = { lbl_statut: 'Accueil' };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StatutsService,
        {
          provide: DataSource,
          useValue: {
            find: jest.fn().mockReturnValue(statutsMock),
          },
        },
        {
          provide: getRepositoryToken(Statut),
          useValue: mockStatutsRepository,
        },
      ],
    }).compile();

    service = module.get<StatutsService>(StatutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllStatut', () => {
    it('should call findAllStatut', async () => {
      const result = await service.findAllStatut();
      expect(mockStatutsRepository.find).toHaveBeenCalled();
      expect(result).toEqual(statutsMock);
    });
  });
});
