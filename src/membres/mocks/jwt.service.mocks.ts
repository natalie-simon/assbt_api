/**
 * Mock de la classe JwtService
 */
export class JwtServiceMock {
  /**
   * Verify method mock
   * @returns
   */
  verify() {
    return { userId: 'mock-user-id' };
  }
}
