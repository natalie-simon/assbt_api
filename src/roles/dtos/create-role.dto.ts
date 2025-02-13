import { IsNotEmpty, MaxLength, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

/**
 * DTO pour la création d'un rôle
 */
export class CreateRoleDto {
  /**
   * Le libellé du rôle
   *
   * @type {string}
   * @memberof CreateRoleDto
   */
  @ApiProperty({
    description: 'Le libellé du rôle',
    example: 'Administrateur',
    required: true,
    type: String,
    maxLength: 10,
  })
  @IsString({ message: 'Le libellé doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le libellé doit être renseigné' })
  @MaxLength(10, { message: 'Le libellé ne doit pas dépasser 10 caractères' })
  role: string;
}