import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';


export class CreateProfilDto {
  @ApiProperty({ description: 'Nom du profil' })
  @IsString()
  nom: string;

  @ApiProperty({ description: 'Prénom du profil' })
  @IsString()
  prenom: string;

  @ApiProperty({ description: 'Téléphone du profil' })
  @IsString()
  telephone: string;

  @ApiProperty({ description: 'communication par mail' })
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return value;
  })
  communication_mail: boolean;

  @ApiProperty({ description: 'communication par sms' })
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return value;
  })
  communication_sms: boolean;
  // Ajoutez d'autres propriétés selon vos besoins
}
