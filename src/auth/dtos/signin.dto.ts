import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO pour la connexion d'un utilisateur
 */
export class SigninDto {
  /**
   * L'adresse email de l'utilisateur
   *
   * @type {string}
   * @memberof SigninDto
   */
  @ApiProperty({
    description: "L'adresse email de l'utilisateur",
    example: 'user@example.com',
    required: true,
    type: String,
  })
  @IsEmail({}, { message: "L'adresse email doit être valide" })
  @IsNotEmpty({ message: "L'adresse email doit être renseignée" })
  email: string;

  /**
   * Le mot de passe de l'utilisateur
   *
   * @type {string}
   * @memberof SigninDto
   */
  @ApiProperty({
    description: "Le mot de passe de l'utilisateur",
    example: 'password',
    required: true,
    type: String,
  })
  @IsString({ message: 'Le mot de passe doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le mot de passe doit être renseigné' })
  mot_de_passe: string;
}
