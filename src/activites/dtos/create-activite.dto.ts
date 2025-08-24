import {
  IsNotEmpty,
  MaxLength,
  IsString,
  IsDate,
  IsInt,
  IsOptional,
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

  @ApiProperty({
    description: 'Le nombre maximum de participants',
    example: 10,
    required: true,
    type: Number,
  })
  @IsOptional()
  @IsInt({ message: 'Le nombre maximum de participants doit être un entier' })
  @IsNotEmpty({
    message: 'Le nombre maximum de participants doit être renseigné',
  })
  @Type(() => Number)
  max_participant: number = 20;

  @ApiProperty({
    description: 'Le nombre de participants en attente',
    example: 0,
    type: Number,
  })
  @IsOptional()
  @IsInt({
    message:
      "Le nombre de participants sur liste d'attente doit être un entier",
  })
  nbr_attente: number = 0;
}
