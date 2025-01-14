import { IsString, IsNotEmpty, MinLength, IsEmail } from 'class-validator';

/**
 * DTO pour la création d'un utilisateur
 */
export class CreateUserDto {
  /**
   * Email de l'utilisateur (User)
   *
   * @type {string}
   * @memberof CreateUserDto
   */
  @IsString({ message: "L'email doit être une chaine de caractères" })
  @IsNotEmpty({ message: "L'email doit être renseigné" })
  @IsEmail({}, { message: "L'email doit être un email valide" })
  email: string;

  /**
   * Mot de passe de l'utilisateur (User)
   *
   * @type {string}
   * @memberof CreateUserDto
   */
  @IsString({ message: 'Le mot de passe doit être une chaine de caractères' })
  @IsNotEmpty({ message: 'Le mot de passe doit être renseigné' })
  @MinLength(8, {
    message: 'Le mot de passe doit contenir au moins 8 caractères',
  })
  password: string;

  /**
   * La clef d'inscription (fournie par le club)
   * permet de limiter les inscriptions au membre du club
   * @type {string}
   * @memberof CreateUserDto
   */
  @IsString({
    message: 'Le clef de validation doit être une chaine de caractères',
  })
  @IsNotEmpty({ message: 'La clef de validation doit être renseignée' })
  clef: string;
}
