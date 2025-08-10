import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    IsNotEmpty,
    MinLength
} from 'class-validator';

export class AnnulationActiviteDto{
    @ApiProperty({example : 'Panne moteur', description : "Raison de l'annulation"})
    @IsString({message: 'Le motif doit être une chaine de caractères'})
    @IsNotEmpty({message: 'Le motif doit être renseigné'})
    @MinLength(5, { message: 'Minimum 5 caractères'})
    motif: string;
}