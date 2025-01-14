import { IsString, IsNotEmpty, MinLength, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO pour la connexion d'un utilisateur
 */
export class SignInDto {
  /**
   * Email de l'utilisateur (User)
   *
   * @type {string}
   * @memberof SignInDto
   */
  @ApiProperty({
    description: "L'email de l'utilisateur",
    example: 'coucou@assbt.com',
    })
  @IsNotEmpty({ message: 'Le champ email doit être renseigné.' })
  @IsEmail({}, { message: 'Le champ email doit être une adresse email.' })
  email: string;

  /**
   * Mot de passe de l'utilisateur (User)
   *
   * @type {string}
   * @memberof SignInDto
   */
  @ApiProperty({
    description: "Le mot de passe de l'utilisateur",
    example: 'motdepasse',
  })
  @IsString({
    message: 'Le champ mot de passe doit être une chaîne de caractères.',
  })
  @IsNotEmpty({ message: 'Le champ mot de passe doit être renseigné.' })
  @MinLength(8, {
    message: 'Le champ mot de passe doit contenir au moins 8 caractères.',
  })
  password: string;
}
