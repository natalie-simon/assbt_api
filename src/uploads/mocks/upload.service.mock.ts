export class UploadServiceMock {
  /**
   * Upload d'un fichier
   * @param file
   * @returns
   */
  public async uploadFile(file: Express.Multer.File) {
    return {
      nom: 'mock-nom',
      url: 'https://mock-url.com/mock-nom',
      type: 'mock-type',
      mime: 'mock-mime',
      size: 123456,
    };
  }
}