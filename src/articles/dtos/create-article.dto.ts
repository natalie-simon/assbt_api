import { IsNotEmpty, MaxLength, IsString, IsInt } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from 'class-transformer';

/**
 * DTO pour la création d'un article
 */
export class CreateArticleDto {
  /**
   * Le titre de l'article
   *
   * @type {string}
   * @memberof CreateArticleDto
   */
  @ApiProperty({
    description: "Le titre de l'article",
    example: 'Les bienfaits du sport',
    required: true,
    type: String,
    maxLength: 25,
  })
  @IsString({ message: 'Le titre doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le titre doit être renseigné' })
  @MaxLength(25, { message: 'Le titre ne doit pas dépasser 25 caractères' })
  titre: string;

  /**
   * Le contenu de l'article
   *
   * @type {string}
   * @memberof CreateArticleDto
   */
  @ApiProperty({
    description: "Le contenu de l'article",
    example: 'Le sport est bon pour la santé',
    required: true,
    type: String,
  })
  @IsString({ message: 'Le contenu doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le contenu doit être renseigné' })
  contenu: string;

  /**
   * Le statut de l'article (id)
   *
   * @type {number}
   * @memberof CreateArticleDto
   */
  @ApiProperty({
    description: "Le statut de l'article",
    example: 1,
    required: true,
    type: 'integer',
    maxLength: 2,
  })
  @IsInt({ message: 'Le statut doit être un nombre entier' })
  @Transform(({ value }) => parseInt(value))
  @IsNotEmpty({ message: "Le statut de l'article doit être renseigné" })
  statut: number;

  /**
   * La catégorie de l'article (id)
   *
   * @type {number}
   * @memberof CreateArticleDto
   */
  @ApiProperty({
    description: "La catégorie de l'article",
    example: 1,
    required: true,
    type: 'integer',
    maxLength: 2,
  })
  @IsInt({ message: 'La catégorie doit être un nombre entier' })
  @Transform(({ value }) => parseInt(value))
  @IsNotEmpty({ message: "La catégorie de l'article doit être renseignée" })
  categorie: number;
}