import { usersMock } from './users.mock';

/**
 * Mocked UsersService class.
 */
export class UsersServiceMock {

  /**
   * Mocked findUserById method.
   *
   * @memberof UsersServiceMock
   */
  
  findUserById = jest.fn().mockResolvedValue(usersMock[0]);
  /**
   * Mocked findAllUsers method.
   *
   * @memberof UsersServiceMock
   */
  findAllUsers = jest.fn().mockResolvedValue(usersMock);

  /**
   * Mocked findUserById method.
   *
   * @memberof UsersServiceMock
   */
  createUser = jest.fn().mockResolvedValue(usersMock[0]);
}