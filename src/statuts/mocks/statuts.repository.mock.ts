import { CreateStatutDto } from '../dtos/create-statut.dto';
import { statutsMock } from '../mocks/statuts.mock';

/**
 * Mock repository for statuts
 */
export const mockStatutsRepository = {
  find: jest.fn().mockResolvedValue(statutsMock),
  create: jest.fn((dto: CreateStatutDto) => ({
    id: 1,
    ...dto,
  })),
  findOne: jest.fn((criteres) => {
    const { where } = criteres;
    return Promise.resolve(statutsMock.find((c) => c.id === where.id));
  }),
};
