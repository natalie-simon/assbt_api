import { IsString, IsNotEmpty, MinLength, IsEmail, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
  @ApiProperty({
    description: "L'email de l'utilisateur",
    example: 'toto@assbt.com',
  })
  @IsString({ message: "L'email doit être une chaine de caractères" })
  @IsNotEmpty({ message: "L'email doit être renseigné" })
  @IsEmail({}, { message: "L'email doit être un email valide" })
  @MaxLength(96, { message: "L'email doit contenir au maximum 96 caractères" })
  email: string;

  /**
   * Mot de passe de l'utilisateur (User)
   *
   * @type {string}
   * @memberof CreateUserDto
   */
  @ApiProperty({
    description: "Le mot de passe de l'utilisateur",
    example: 'motdepasse',
  })
  @IsString({ message: 'Le mot de passe doit être une chaine de caractères' })
  @IsNotEmpty({ message: 'Le mot de passe doit être renseigné' })
  @MinLength(8, {
    message: 'Le mot de passe doit contenir au moins 8 caractères',
  })
  mot_de_passe: string;

  /**
   * La clef d'inscription (fournie par le club)
   * permet de limiter les inscriptions au membre du club
   * @type {string}
   * @memberof CreateUserDto
   */
  @ApiProperty({
    description: "La clef d'inscription, celle-ci est fournie par le club",
    example: 'clef',
  })
  @IsString({
    message: 'Le clef de validation doit être une chaine de caractères',
  })
  @IsNotEmpty({ message: 'La clef de validation doit être renseignée' })
  clef: string;
}
