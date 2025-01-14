import { IsString, IsNotEmpty, MinLength, IsEmail } from 'class-validator';

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
  @IsNotEmpty({ message: 'Le champ email doit être renseigné.' })
  @IsEmail({}, { message: 'Le champ email doit être une adresse email.' })
  email: string;

  /**
   * Mot de passe de l'utilisateur (User)
   *
   * @type {string}
   * @memberof SignInDto
   */
  @IsString({
    message: 'Le champ mot de passe doit être une chaîne de caractères.',
  })
  @IsNotEmpty({ message: 'Le champ mot de passe doit être renseigné.' })
  @MinLength(6, {
    message: 'Le champ mot de passe doit contenir au moins 6 caractères.',
  })
  password: string;
}
