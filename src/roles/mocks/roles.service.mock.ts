import { rolesMock } from './roles.mocks';

/**
 * Mock de la classe RolesService
 */
export class RolesServiceMock {
  /**
   * Mock de la méthode createRole.
   *
   * @memberof RolesServiceMock
   */
  createRole = jest.fn().mockResolvedValue(rolesMock[0]);

  /**
   * Mock de la méthode findAllRole.
   *
   * @memberof RolesServiceMock
   */
  findAllRole = jest.fn().mockResolvedValue(rolesMock);

  /**
   * Mock de la méthode findRoleById.
   *
   * @memberof RolesServiceMock
   */
  findRoleById = jest.fn((id: number) =>
    Promise.resolve(rolesMock.find((role) => role.id === id)),
  );

}

