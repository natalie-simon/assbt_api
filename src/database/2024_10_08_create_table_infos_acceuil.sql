CREATE SCHEMA IF NOT EXISTS infos;

CREATE TABLE IF NOT EXISTS infos.acceuil (
    acceuil_id SERIAL PRIMARY KEY,
    titre TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL
);
