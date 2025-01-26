import { statutsMock } from "../mocks/statuts.mock";

/**
 * StatutsServiceMock
 */
export class StatutsServiceMock {
  /**
   * findAllStatuts
   *
   * @memberof StatutsServiceMock
   */
  findAllStatut = jest.fn().mockResolvedValue(statutsMock);
  
  /**
   * createStatut
   *
   * @memberof StatutsServiceMock
   */
  createStatut = jest.fn().mockResolvedValue(statutsMock);
}
