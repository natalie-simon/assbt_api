import {
  IsNotEmpty,
  MaxLength,
  IsString,
  IsDate,
  IsInt,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

/**
 * DTO pour la création d'une activité
 */
export class CreateActiviteDto {
  /**
   * Le titre de l'activité
   *
   * @type {string}
   * @memberof CreateActiviteDto
   */
  @ApiProperty({
    description: "Le titre de l'activité",
    example: 'Sortie en mer',
    required: true,
    type: String,
    maxLength: 50,
  })
  @IsString({ message: 'Le titre doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le titre doit être renseigné' })
  @MaxLength(50, { message: 'Le titre ne doit pas dépasser 50 caractères' })
  titre: string;

  /**
   * Le contenu de l'activité
   *
   *
   * @type {string}
   * @memberof CreateActiviteDto
   */
  @ApiProperty({
    description: "Le contenu de l'activité",
    example: 'Sortie en mer pour les jeunes bulleurs',
    required: true,
    type: String,
  })
  @IsString({ message: 'Le contenu doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le contenu doit être renseigné' })
  contenu: string;

  /**
   * La date et l'heure de début de l'activité
   *
   * @type {Date}
   * @memberof CreateActiviteDto
   */
  @ApiProperty({
    description: "La date et l'heure de début de l'activité",
    example: '2021-08-20 14:00:00',
    required: true,
    type: Date,
  })
  @IsDate({ message: "La date et l'heure de début doit être une date" })
  @IsNotEmpty({ message: "La date et l'heure de début doit être renseignée" })
  @Type(() => Date)
  date_heure_debut: Date;

  /**
   * La date et l'heure de fin de l'activité
   *
   * @type {Date}
   * @memberof CreateActiviteDto
   */
  @ApiProperty({
    description: "La date et l'heure de fin de l'activité",
    example: '2021-08-20 17:00:00',
    required: true,
    type: Date,
  })
  @IsDate({ message: "La date et l'heure de la fin doit être une date" })
  @IsNotEmpty({ message: "La date et l'heure de la fin doit être renseignée" })
  @Type(() => Date)
  date_heure_fin: Date;

  /**
   * L'identifiant de la catégorie de l'activité
   *
   * @type {number}
   * @memberof CreateActiviteDto
   */
  @ApiProperty({
    description: "L'identifiant de la catégorie de l'activité",
    example: 1,
    required: true,
    type: Number,
  })
  @IsInt({ message: "L'identifiant de la catégorie doit être un entier" })
  @IsNotEmpty({ message: "L'identifiant de la catégorie doit être renseigné" })
  @Type(() => Number)
  categorie: number;
}
