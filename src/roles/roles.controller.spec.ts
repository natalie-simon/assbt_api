import { Test, TestingModule } from '@nestjs/testing';
import { RolesController } from './roles.controller';
import { RolesService } from './services/roles.service';
import { RolesServiceMock } from './mocks/roles.service.mock';
import { rolesMock } from './mocks/roles.mocks';
import { CreateRoleDto } from './dtos/create-role.dto';

describe('RolesController', () => {
  let controller: RolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesController],
      providers: [
        {
          provide: RolesService,
          useClass: RolesServiceMock,
        }
      ],
    }).compile();

    controller = module.get<RolesController>(RolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getRoles', () => {
    it('should return an array of Roles', () => {
      expect(controller.getRoles()).resolves.toEqual(rolesMock);
    });
  });

  describe('createRole', () => {
    const dto = {
      role: 'Admin',
    } as CreateRoleDto;

    it('should return a new Role', () => {
      expect(controller.createRole(dto)).resolves.toEqual(rolesMock[0]);
    });
  });
});
