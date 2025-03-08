import { Upload } from '../../database/core/upload.entity';

// Mock d'un fichier uploadé pour référence
export const mockUploadedFile: Express.Multer.File = {
  fieldname: 'fichier',
  originalname: 'test-image.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  buffer: Buffer.from('test image content'),
  size: 1024,
  destination: '',
  filename: '',
  path: '',
  stream: null,
};

// Mock d'une entité Upload pour référence
export const mockUpload: Upload = {
  id: 1,
  nom: 'test-image.jpg',
  type: 'image/jpeg',
  mime: 'image/jpeg',
  size: 1024,
  url: 'https://bucket.s3.amazonaws.com/uploads/abc123-test-image.jpg',
  createDate: new Date(),
  updateDate: new Date(),
};

export class UploadServiceMock {
  uploadFile(file: Express.Multer.File): Promise<Upload> {
    return Promise.resolve(mockUpload);
  }

  uploadAws(file: Express.Multer.File): Promise<{ path: string }> {
    return Promise.resolve({
      path: 'https://bucket.s3.amazonaws.com/uploads/abc123-test-image.jpg',
    });
  }
}
