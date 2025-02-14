import { Test, TestingModule } from '@nestjs/testing';
import { RolesService } from './roles.service';
import { DataSource } from 'typeorm';
import { Role } from '../../database/core/role.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { rolesMock } from '../mocks/roles.mocks';
import { mockRolesRepository } from '../mocks/roles.repository.mock';

describe('RolesService', () => {
  let service: RolesService;
  const dto = { role: 'Admin' };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RolesService,
        {
          provide: DataSource,
          useValue: {
            find: jest.fn().mockReturnValue(rolesMock),
          },
        },
        {
          provide: getRepositoryToken(Role),
          useValue: mockRolesRepository,
        },
      ]
    }).compile();

    service = module.get<RolesService>(RolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createRole', () => {
    it('should create and save a new role', async () => {
      const result = await service.createRole(dto);
      expect(mockRolesRepository.create).toHaveBeenCalled();
      expect(mockRolesRepository.save).toHaveBeenCalledWith(
        {
          id: expect.any(Number),
          ...dto,
        }
      );
      expect(result).toEqual(rolesMock[0]);
    });
  });

  describe('findAllRole', () => {
    it('should call findAllRole', async () => {
      const result = await service.findAllRole();
      expect(mockRolesRepository.find).toHaveBeenCalled();
      expect(result).toEqual(rolesMock);
    });
  });

  describe('findRoleById', () => {
    it('should call findRoleById', async () => {
      const result = await service.findRoleById(1);
      expect(mockRolesRepository.findOne).toHaveBeenCalled();
      expect(result).toEqual(rolesMock.filter((r) => r.id === 1)[0]);
    });
  });
});
