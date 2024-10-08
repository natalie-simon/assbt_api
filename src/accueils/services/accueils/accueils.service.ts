import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Accueil } from 'src/models/accueil.entity';
import { Repository } from 'typeorm';
import { CreateAccueilDto } from 'src/accueils/accueil.dtos';

@Injectable()
export class AccueilsService {
  constructor(
    @InjectRepository(Accueil)
    private readonly accueilRepository: Repository<Accueil>,
  ) {}

  createAccueil(createAccueilDto: CreateAccueilDto) {
    const newAccueil = this.accueilRepository.create(createAccueilDto);
    return this.accueilRepository.save(newAccueil);
  }

  findAllAccueil() {
    return this.accueilRepository.find();
  }
}
