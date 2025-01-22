import { IsNotEmpty, MaxLength, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

/**
 * DTO pour la création d'un statut
 */
export class CreateStatutDto {
  /**
   * Le libellé du statut
   *
   * @type {string}
   * @memberof CreateStatutDto
   */
  @ApiProperty({
    description: 'Le libellé du statut',
    example: 'En cours',
    required: true,
    type: String,
    maxLength: 10,
  })
  @IsString({ message: 'Le libellé doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le libellé doit être renseigné' })
  @MaxLength(10, { message: 'Le libellé ne doit pas dépasser 10 caractères' })
  lbl_statut: string;
}