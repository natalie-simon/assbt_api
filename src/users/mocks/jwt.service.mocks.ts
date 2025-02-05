// jwt.service.mock.ts
export class JwtServiceMock {
  verify() {
    return { userId: 'mock-user-id' };
  }

  // Ajoutez d'autres méthodes mocks si nécessaire
}
