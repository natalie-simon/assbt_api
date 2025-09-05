import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean } from 'class-validator';
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

  @ApiProperty({ description: 'Communication par mail' })
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === 'boolean') return value;
    return value === 'true';
  })
  communication_mail: boolean;

  @ApiProperty({ description: 'Communication par sms' })
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === 'boolean') return value;
    return value === 'true';
  })
  communication_sms: boolean;
  // Ajoutez d'autres propriétés selon vos besoins
}
