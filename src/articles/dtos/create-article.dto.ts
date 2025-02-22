import { IsNotEmpty, MaxLength, IsString, IsInt, IsUrl, IsOptional, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from 'class-transformer';
import { categorieArticleTypes } from "../enums/categorie-article-types.enum";
import { statutArticleTypes } from "../enums/statut-article-types.enum";

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
  @IsEnum(statutArticleTypes, { message: 'Le statut doit être une des valeurs autorisées ' })
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
  @IsEnum(categorieArticleTypes, { message: 'La categorie doit être une des valeurs autorisées.' })
  @IsNotEmpty({ message: "La catégorie de l'article doit être renseignée" })
  categorie: string;
}