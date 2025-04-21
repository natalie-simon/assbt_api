import {
  IsNotEmpty,
  MaxLength,
  IsString,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from 'class-transformer';

/**
 * DTO de création d'une catégorie d'activité
 */
export class CreateCategorieActiviteDto {
  /**
   * Le nom de la catégorie
   *
   * @type {string}
   * @memberof CreateCategorieActiviteDto
   */
  @ApiProperty({
    description: 'Le lbl_categorie de la catégorie',
    example: 'Nage libre',
    required: true,
    type: 'string',
    maxLength: 20,
  })
  @IsString({ message: 'Le lbl_categorie doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le lbl_categorie doit être renseigné' })
  @MaxLength(20, {
    message: 'Le lbl_categorie ne doit pas dépasser 25 caractères',
  })
  lbl_categorie: string;

  /**
   * La catégorie nécessite-t-elle du matériel ?
   *
   * @type {boolean}
   * @memberof CreateCategorieActiviteDto
   */
  @ApiProperty({
    description:
      'La catégorie nécessite-t-elle du matériel (faux par défaut) ?',
    example: false,
    required: false,
    type: Boolean,
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'boolean') return value;
    return value === 'true';
  })
  @IsBoolean({ message: 'Le champ  avec_equipement doit être un booléen' })
  avec_equipement: boolean;

  /**
   * La couleur de la catégorie (héxadécimal)
   *
   * @type {string}
   * @memberof CreateCategorieActiviteDto
   */
  @ApiProperty({
    description: 'La couleur de la catégorie (héxadécimal)',
    example: '#000000',
    required: true,
    type: String,
  })
  @IsString({ message: 'La couleur doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'La couleur doit être renseignée' })
  @MaxLength(6, { message: 'La couleur ne doit pas dépasser 6 caractères' })
  couleur: string;

  /**
   * Faut-il activer les notifications pour cette catégorie ?
   *
   * @type {boolean}
   * @memberof CreateCategorieActiviteDto
   */
  @ApiProperty({
    description:
      'Faut-il activer les notifications pour cette catégorie (vrai par défaut) ?',
    example: true,
    required: false,
    type: Boolean,
  })
  @Transform(({ value }) => {
    if (typeof value === 'boolean') return value;
    return value === 'true';
  })
  @IsOptional()
  @IsBoolean({ message: 'Le champ avec_notification doit être un booléen' })
  avec_notification: boolean;

  /**
   * L'identifiant du fichier associé à la catégorie
   *
   * @type {(number | null)}
   * @memberof CreateCategorieActiviteDto
   */
  @ApiProperty({
    description: "L'identifiant du fichier associé à la catégorie",
    example: 1,
    required: false,
    type: Number,
  })
  @IsOptional()
  image_id: number | null;
}