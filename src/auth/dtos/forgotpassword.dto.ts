import { IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO pour la récupération du mot de passe
 */
export class ForgotPasswordDto {
  /**
   * L'adresse email de l'utilisateur
   *
   * @type {string}
   * @memberof forgotPasswordDto
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
}
