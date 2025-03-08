import { Upload } from '../../database/core/upload.entity';

/**
 * Mock de données d'uploads pour les tests
 */
export const uploadsMocks = [
  {
    id: 1,
    originalname: 'image1.jpg',
    filename: 'image1.jpg',
    mimetype: 'image/jpeg',
    size: 1000,
    url: '/uploads/image1.jpg',
    dateCreation: new Date('2023-01-01'),
  },
  {
    id: 2,
    originalname: 'image2.jpg',
    filename: 'image2.jpg',
    mimetype: 'image/jpeg',
    size: 2000,
    url: '/uploads/image2.jpg',
    dateCreation: new Date('2023-01-02'),
  },
  {
    id: 3,
    originalname: 'document.pdf',
    filename: 'document.pdf',
    mimetype: 'application/pdf',
    size: 3000,
    url: '/uploads/document.pdf',
    dateCreation: new Date('2023-01-03'),
  },
];
