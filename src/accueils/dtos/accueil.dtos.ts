import { IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
  @ApiProperty({
    description: 'Le titre de l\'accueil',
    example: 'Bienvenue sur le site',
  })
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
  @ApiProperty({
    description: "La description de l'accueil",
    example: '<h1>Ceci est le site des Bulleurs Toulonnais</h1>'
  })
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
  @ApiProperty({
    description: "Le lien de l'image de l'accueil",
    example: 'https://www.google.com/image.png',
  })
  @IsNotEmpty({ message: 'Le champ image doit être renseigné.' })
  @MinLength(10, {
    message: 'Le champ image doit contenir au moins 10 caractères.',
  })
  image: string;
}
