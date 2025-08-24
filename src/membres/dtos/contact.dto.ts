import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ContactDto {
  @ApiProperty({
    description: "Le nom de l'utilisateur",
    example: 'Doe',
  })
  @IsString({ message: 'Le nom doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le nom doit être renseigné' })
  nom: string;

  @ApiProperty({
    description: "Le prénom de l'utilisateur",
    example: 'John',
  })
  @IsString({ message: 'Le prénom doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le prénom doit être renseigné' })
  prenom: string;

  @ApiProperty({
    description: "L'email de l'utilisateur",
    example: 'john.doe@example.com',
  })
  @IsEmail({}, { message: "L'email doit être un email valide" })
  @IsNotEmpty({ message: "L'email doit être renseigné" })
  email: string;

  @ApiProperty({
    description: "Le téléphone de l'utilisateur",
    example: '06 06 06 06 06',
  })
  @IsOptional()
  @IsString({ message: 'Le téléphone doit être une chaîne de caractères' })
  telephone?: string;

  @ApiProperty({
    description: "Le message de l'utilisateur",
    example: 'Bonjour, je souhaite contacter le club',
  })
  @IsString({ message: 'Le message doit être une chaîne de caractères' })
  @IsNotEmpty({ message: 'Le message doit être renseigné' })
  message: string;
}
