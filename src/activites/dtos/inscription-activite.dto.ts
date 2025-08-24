import { MaxLength, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO pour l'inscription d'un utilisateur à une activité
 */
export class InscriptionActiviteDto {
  /**
   * Observation de l'utilisateur pour cette activité
   *
   * @type {string}
   * @memberof InscriptionActiviteDto
   */
  @ApiProperty({
    description: "Observations de l'utilisateur",
    example: 'Besoin de matériel',
    required: false,
  })
  @IsString({
    message: 'Les observations doivent être une chaîne de caractères',
  })
  @IsOptional()
  @MaxLength(255, {
    message: 'Les observations ne doivent pas dépasser 255 caractères',
  })
  observations: string;
}
