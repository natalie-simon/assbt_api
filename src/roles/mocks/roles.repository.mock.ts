import { CreateRoleDto } from '../dtos/create-role.dto';
import { rolesMock } from '../mocks/roles.mocks';

/**
 * Mock repository for roles
 */
export const mockRolesRepository = {
  find: jest.fn().mockResolvedValue(rolesMock),
  create: jest.fn((dto: CreateRoleDto) => ({
    id: 1,
    ...dto,
  })),
  save: jest.fn((entity) => Promise.resolve({ id: 1, ...entity })),
  findOne: jest.fn((criteres) => {
    const { where } = criteres;
    return Promise.resolve(rolesMock.find((c) => c.id === where.id));
  }),
}