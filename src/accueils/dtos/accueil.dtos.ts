import { IsNotEmpty, MinLength } from 'class-validator';

/**
 * DTO pour la création d'un accueil
 */
export class CreateAccueilDto {
  /**
   * Titre de l'accueil (minimum 10 caractères)
   *
   * @type {string}
   * @memberof CreateAccueilDto
   */
  @IsNotEmpty({ message: 'Le champ titre doit être renseigné.' })
  @MinLength(10, {
    message: 'Le champ titre doit contenir au moins 10 caractères.',
  })
  titre: string;

  /**
   * Description de l'accueil (minimum 20 caractères)
   *
   * @type {string}
   * @memberof CreateAccueilDto
   */
  @IsNotEmpty({ message: 'Le champ titre doit être renseigné.' })
  @MinLength(20, {
    message: 'Le champ titre doit contenir au moins 20 caractères.',
  })
  description: string;

  /**
   * Image de l'accueil (minimum 10 caractères)
   *
   * @type {string}
   * @memberof CreateAccueilDto
   */
  @IsNotEmpty({ message: 'Le champ image doit être renseigné.' })
  @MinLength(10, {
    message: 'Le champ image doit contenir au moins 10 caractères.',
  })
  image: string;
}
