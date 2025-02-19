/**
 * Mocks for articles
 */
export const articlesMock = [
  {
    id: 1,
    titre: 'Voir un titre',
    contenu: 'toto123456',
    image: {
      url: 'https://d3vv71s67qf4h4.cloudfront.net/connexion_bulleurs-1739980811134-572aefb0-c2c1-46a7-bf22-bbf1065673f4.png',
    },
    categorie: 'accueil',
    statut: 'publie',
    redacteur: {
      email: 'test@example.com',
    },
  },
  {
    id: 2,
    titre: 'Deuxième article',
    contenu: '<h1>Un peu de html</h1>',
    image: {
      url: 'https://d3vv71s67qf4h4.cloudfront.net/connexion_bulleurs-1739980811134-572aefb0-c2c1-46a7-bf22-bbf1065673f4.png',
    },
    statut: 'brouillon',
    categorie: 'accueil',
    redacteur: {
      email: 'test@example.com',
    },
  },
  {
    id: 3,
    titre: 'Article suivant (3)',
    contenu: '<h1>Un peu de html</h1><p>Lorem ipsum dolor sit amet</p>',
    image: {
      url: 'https://d3vv71s67qf4h4.cloudfront.net/connexion_bulleurs-1739980811134-572aefb0-c2c1-46a7-bf22-bbf1065673f4.png',
    },
    statut: 'brouillon',
    categorie: 'accueil',
    redacteur: {
      email: 'test@example.com',
    },
  },
];