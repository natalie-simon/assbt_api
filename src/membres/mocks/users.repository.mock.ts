import { CreateUserDto } from '../dtos/createMembre.dto';
import { membresMock } from './membres.mock';

/**
 * Mock du repository des utilisateurs
 */
export const membresMockRepository = {
  find: jest.fn().mockResolvedValue(membresMock),
  create: jest.fn((dto: CreateUserDto) => ({
    id: 1,
    ...dto,
  })),
  save: jest.fn((entity) => Promise.resolve({ id: 1, ...entity })),
};
