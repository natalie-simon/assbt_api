import { Article } from '../../database/core/article.entity';
import { categorieArticleTypes } from '../enums/categorie-article-types.enum';
import { statutArticleTypes } from '../enums/statut-article-types.enum';

/**
 * Mock de données d'articles pour les tests
 */
export const articlesMocks = [
  {
    id: 1,
    titre: 'Article 1',
    contenu: "Contenu de l'article 1",
    statut: statutArticleTypes.PUBLIE,
    categorie: categorieArticleTypes.ACCUEIL,
    image: {
      id: 1,
      originalname: 'image1.jpg',
      filename: 'image1.jpg',
      mimetype: 'image/jpeg',
      size: 1000,
      url: '/uploads/image1.jpg',
      dateCreation: new Date('2023-01-01'),
    },
    redacteur: {
      id: 1,
      email: 'admin@example.com',
      mot_de_passe: 'password',
      est_supprime: false,
      role: 'admin',
      inscriptions: [],
    },
  },
  {
    id: 2,
    titre: 'Article 2',
    contenu: "Contenu de l'article 2",
    statut: statutArticleTypes.BROUILLON,
    categorie: categorieArticleTypes.ACCUEIL,
    image: {
      id: 2,
      originalname: 'image2.jpg',
      filename: 'image2.jpg',
      mimetype: 'image/jpeg',
      size: 2000,
      url: '/uploads/image2.jpg',
      dateCreation: new Date('2023-01-02'),
    },
    redacteur: {
      id: 1,
      email: 'admin@example.com',
      mot_de_passe: 'password',
      est_supprime: false,
      role: 'admin',
      inscriptions: [],
    },
  },
  {
    id: 3,
    titre: 'Article 3',
    contenu: "Contenu de l'article 3",
    statut: statutArticleTypes.PUBLIE,
    categorie: categorieArticleTypes.EVENEMENT,
    image: {
      id: 3,
      originalname: 'image3.jpg',
      filename: 'image3.jpg',
      mimetype: 'image/jpeg',
      size: 3000,
      url: '/uploads/image3.jpg',
      dateCreation: new Date('2023-01-03'),
    },
    redacteur: {
      id: 2,
      email: 'user@example.com',
      mot_de_passe: 'password',
      est_supprime: false,
      role: 'user',
      inscriptions: [],
    },
  },
];

/**
 * Mock de données d'articles standardisés pour les tests
 */
export const articlesStandardMocks = [
  {
    id: 1,
    titre: 'Article 1',
    contenu: "Contenu de l'article 1",
    statut: statutArticleTypes.PUBLIE,
    categorie: categorieArticleTypes.ACCUEIL,
    image: {
      url: '/uploads/image1.jpg',
    },
    redacteur: {
      email: 'admin@example.com',
    },
  },
  {
    id: 2,
    titre: 'Article 2',
    contenu: "Contenu de l'article 2",
    statut: statutArticleTypes.BROUILLON,
    categorie: categorieArticleTypes.ACCUEIL,
    image: {
      url: '/uploads/image2.jpg',
    },
    redacteur: {
      email: 'admin@example.com',
    },
  },
  {
    id: 3,
    titre: 'Article 3',
    contenu: "Contenu de l'article 3",
    statut: statutArticleTypes.PUBLIE,
    categorie: categorieArticleTypes.EVENEMENT,
    image: {
      url: '/uploads/image3.jpg',
    },
    redacteur: {
      email: 'user@example.com',
    },
  },
];
