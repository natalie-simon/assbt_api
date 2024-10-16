import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Accueil } from 'src/models/accueil.entity';
import { Repository } from 'typeorm';
import { CreateAccueilDto } from 'src/accueils/dtos/accueil.dtos';

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

  findAccueilById(id: number) {
    return this.accueilRepository.findOne({
      where: { id: id },
    });
  }

  deleteAccueilById(id: number) {
    return this.accueilRepository.delete(id);
  }
}
