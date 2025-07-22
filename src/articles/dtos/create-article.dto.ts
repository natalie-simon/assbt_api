import { IsNotEmpty, MaxLength, IsString, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

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
   * @type {string}
   * @memberof CreateArticleDto
   */
  @ApiProperty({
    description: "Le statut de l'article",
    example: 'brouillon',
    required: true,
    type: 'string',
    maxLength: 10,
  })
  @IsString({ message: 'Le statut doit être une chaîne de caractères' })
  @IsNotEmpty({ message: "Le statut de l'article doit être renseigné." })
  statut: string;

  /**
   * La catégorie de l'article (id)
   *
   * @type {string}
   * @memberof CreateArticleDto
   */
  @ApiProperty({
    description: "La catégorie de l'article",
    example: 'accueil',
    required: true,
    type: 'string',
    maxLength: 10,
  })
  @IsString({ message: 'La catégorie doit être une chaîne de caractères.' })
  @IsNotEmpty({ message: "La catégorie de l'article doit être renseignée" })
  categorie: string;
}