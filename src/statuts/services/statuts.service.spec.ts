import { Test, TestingModule } from '@nestjs/testing';
import { StatutsService } from './statuts.service';
import { DataSource } from 'typeorm';
import { Statut } from '../statut.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { statutsMock } from '../mocks/statuts.mock';
import { mockStatutsRepository } from '../mocks/statuts.repository.mock';

describe('StatutsService', () => {
  let service: StatutsService;
  const dto = { lbl_statut: 'Brouillon' };

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

  describe('createStatut', () => {
    it('should create and save a new statut', async () => {
      const result = await service.createStatut(dto);
      expect(mockStatutsRepository.create).toHaveBeenCalled();
      expect(mockStatutsRepository.save).toHaveBeenCalledWith(
        {
          id: expect.any(Number),
          ...dto,
        }
      );
      expect(result).toEqual(statutsMock[0]);
    });
  });

  describe('findAllStatut', () => {
    it('should call findAllStatut', async () => {
      const result = await service.findAllStatut();
      expect(mockStatutsRepository.find).toHaveBeenCalled();
      expect(result).toEqual(statutsMock);
    });
  });

  describe('findStatutById', () => {
    it('should call findStatutById', async () => {
      const result = await service.findStatutById(1);
      expect(mockStatutsRepository.findOne).toHaveBeenCalled();
      expect(result).toEqual(statutsMock.filter((s) => s.id === 1)[0]);
    });
  });
});
