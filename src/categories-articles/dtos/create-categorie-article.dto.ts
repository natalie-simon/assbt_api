import { IsNotEmpty, MaxLength, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

/**
 * DTO pour la création d'une catégorie d'article
 */
export class CreateCategorieArticleDto {
  /**
   * Le libellé de la catégorie d'article
   *
   * @type {string}
   * @memberof CreateCategorieArticleDto
   */
  @ApiProperty({
    description: 'Le libellé de la catégorie',
    example: 'Sport',
    required: true,
    type: String,
    maxLength: 25,
  })
  @IsString({ message: 'Le libellé doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le libellé doit être renseigné' })
  @MaxLength(25, { message: 'Le libellé ne doit pas dépasser 25 caractères' })
  lbl_categorie: string;
}