import { Fichier } from '../../database/core/fichier.entity';



/**
 *  Mock d'un fichier uploadé
 */
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

/**
 * Mock d'une entité Upload
 */
export const mockUpload: Fichier = {
  id: 1,
  nom: 'test-image.jpg',
  type: 'image/jpeg',
  taille: 1024,
  mime: 'image/jpeg',
  url: 'https://bucket.s3.amazonaws.com/uploads/abc123-test-image.jpg',
  dateCreation: new Date(),
  dateMaj: new Date(),
};

/**
 * Mock du service Upload
 */
export const mockUploadService = {
  uploadFile: jest.fn().mockResolvedValue(mockUpload),
  uploadAws: jest.fn().mockResolvedValue({
    path: 'https://bucket.s3.amazonaws.com/uploads/abc123-test-image.jpg',
  }),
};
