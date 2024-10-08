import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateAccueilDto {
  @IsNotEmpty()
  @MinLength(10)
  article: string;

  @IsNotEmpty()
  @MinLength(10)
  image: string;
}
