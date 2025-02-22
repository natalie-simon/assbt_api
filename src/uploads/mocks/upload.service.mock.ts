export class UploadServiceMock {
  /**
   * Upload d'un fichier
   * @param file
   * @returns
   */
  public async uploadFile(file: Express.Multer.File) {
    return Promise.resolve();
  }
}
