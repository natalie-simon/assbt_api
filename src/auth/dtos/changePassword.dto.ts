import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO pour la récupération du mot de passe
 */
export class ChangePasswordDto {
  /**
   * Le nouveau mot de passe
   *
   * @type {string}
   * @memberof ChangePasswordDto
   */
  @ApiProperty({
    description: 'Mot de passe',
    example: 'ihaoueihfa6928!!',
    required: true,
    type: String,
  })
  @IsNotEmpty({ message: 'Le mot de passe doit être renseigné' })
  @IsString({ message: 'Le mot de passe doit être une chaîne de caractères' })
  nouveau_mdp: string;
}
