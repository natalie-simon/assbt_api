import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class UpdateMembreDto {
  @ApiProperty({
    description: "Le role de l'utilisateur",
    example: 'ADMIN',
    required: true,
    type: 'string',
    maxLength: 10,
  })
  @IsString({ message: 'Le role est une chaine de caractère' })
  @IsNotEmpty({ message: 'Le role est obligatoire' })
  role: string;

  @ApiProperty({
    description: "L'email de l'utilisateur",
    example: 'test@test.com',
    required: true,
    type: 'string',
  })
  @IsEmail()
  @IsNotEmpty({ message: "L'email est obligatoire" })
  email: string;

  @ApiProperty({
    description: "L'utilisateur est supprimé (faux par défaut) ?",
    example: false,
    required: false,
    type: Boolean,
  })
  @Transform(({ value }) => {
    if (typeof value === 'boolean') return value;
    return value === 'true';
  })
  @IsBoolean({ message: 'Le champ  avec_equipement doit être un booléen' })
  est_supprime: boolean;
}
