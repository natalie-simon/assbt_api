import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class InscriptionDto {
  @ApiProperty({ example: 1, description: 'Identifiant du membre' })
  @IsInt({ message: 'membreId doit être un entier' })
  membreId: number;

  @ApiProperty({
    example: 'Gilet stabilisateur: Aucun / Bloc: oui / Détendeur: non',
    required: false,
  })
  @IsString({ message: 'observations doit être une chaîne de caractères' })
  @IsOptional()
  observations?: string;
}

export class InscriptionActiviteGroupeDto {
  @ApiProperty({
    description: 'Un tableau des inscriptions',
    example: [
      {
        membreId: 1,
        observations: 'Gilet stabilisateur: Aucun / Bloc: oui / Détendeur: non',
      },
    ],
  })
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => InscriptionDto)
  inscriptions: InscriptionDto[];
}
