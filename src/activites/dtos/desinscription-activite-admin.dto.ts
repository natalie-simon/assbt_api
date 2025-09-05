import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Dto pour une désinscription d'une activité par un utilisateur Admin
 */
export class DesinscriptionActiviteAdminDto {
  @ApiProperty({ example: 1, description: 'Identifiant du membre' })
  @IsInt({ message: 'membreId doit être un entier' })
  membreId: number;
}
