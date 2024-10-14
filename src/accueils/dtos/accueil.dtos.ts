import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateAccueilDto {
  @IsNotEmpty({ message: 'Le champ titre doit être renseigné.' })
  @MinLength(10, {
    message: 'Le champ titre doit contenir au moins 10 caractères.',
  })
  titre: string;

  @IsNotEmpty({ message: 'Le champ titre doit être renseigné.' })
  @MinLength(20, {
    message: 'Le champ titre doit contenir au moins 20 caractères.',
  })
  description: string;

  @IsNotEmpty({ message: 'Le champ image doit être renseigné.' })
  @MinLength(10, {
    message: 'Le champ image doit contenir au moins 10 caractères.',
  })
  image: string;
}
