import { IsNotEmpty, MinLength } from 'class-validator';

export class SignInDto {
  @IsNotEmpty({ message: 'Le champ email doit être renseigné.' })
  email: string;

  @IsNotEmpty({ message: 'Le champ mot de passe doit être renseigné.' })
  @MinLength(6, {
    message: 'Le champ mot de passe doit contenir au moins 6 caractères.',
  })
  password: string;
}
