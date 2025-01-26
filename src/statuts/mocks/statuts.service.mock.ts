import { statutsMock } from './statuts.mock';

/**
 * Mock of the StatutsService class.
 */
export class StatutsServiceMock {
  /**
   * Mock of the findAllStatuts method.
   *
   * @memberof StatutsServiceMock
   */
  findAllStatuts = jest.fn().mockResolvedValue(statutsMock);

  /**
   * Mock of the findStatutById method.
   *
   * @memberof StatutsServiceMock
   */
  createStatut = jest.fn().mockResolvedValue(statutsMock[0]);

  /**
   * Mock of the findStatutById method.
   *
   * @memberof StatutsServiceMock
   */
  findStatutById = jest.fn((id: number) =>
    Promise.resolve(statutsMock.find((statut) => statut.id === id)),
  );
}
