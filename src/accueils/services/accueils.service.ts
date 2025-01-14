import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Accueil } from 'src/models/accueil.entity';
import { Repository } from 'typeorm';
import { CreateAccueilDto } from 'src/accueils/dtos/accueil.dtos';

/**
 * Service de gestion des Accueils (informations de la page d'accueil)
 */
@Injectable()
export class AccueilsService {
  /**
   * Constructeur
   * @param accueilRepository Le repository des Accueils
   */
  constructor(
    @InjectRepository(Accueil)
    private readonly accueilRepository: Repository<Accueil>,
  ) {}

  /**
   * Le service de création d'un Accueil
   * @param createAccueilDto La DTO correspondant à la création d'un Accueil
   * @returns
   */
  createAccueil(createAccueilDto: CreateAccueilDto) {
    const newAccueil = this.accueilRepository.create(createAccueilDto);
    return this.accueilRepository.save(newAccueil);
  }

  /**
   * Le service de récupération de l'ensemble des Accueils
   * @returns
   */
  findAllAccueil() {
    return this.accueilRepository.find();
  }

  /**
   * Le service de récupération d'un Accueil par son id
   * @param id Un Entier correspondant à l'id de l'Accueil
   * @returns
   */
  findAccueilById(id: number) {
    return this.accueilRepository.findOne({
      where: { id: id },
    });
  }

  /**
   * Le service de suppression d'un Accueil par son id
   * @param id Un Entier correspondant à l'id de l'Accueil
   * @returns
   */
  deleteAccueilById(id: number) {
    return this.accueilRepository.delete(id);
  }
}
