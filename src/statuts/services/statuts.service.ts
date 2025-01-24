import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Statut } from '../statut.entity';
import { Repository } from "typeorm";
import { CreateStatutDto } from "../dtos/create-statut.dto";

/**
 * Service de gestion des Statuts
 * Utilisation d'une seule table Statut pour toute l'application
 */
@Injectable()
export class StatutsService {
  /**
   * Constructeur
   * @param statutRepository
   */
  constructor(
    @InjectRepository(Statut)
    private readonly statutRepository: Repository<Statut>,
  ) {}

  /**
   * Création d'un statut
   * @param createStatutDto
   * @returns
   */
  createStatut(createStatutDto: CreateStatutDto) {
    const newStatut = this.statutRepository.create(createStatutDto);
    return this.statutRepository.save(newStatut);
  }

  /**
   * Récupération de tout les statuts
   * @returns
   */
  findAllStatut() {
    return this.statutRepository.find();
  }

  /**
   * Récupération d'un statut par son id
   * @param id
   * @returns
   */
  public async findStatutById(id: number) {
    return  await this.statutRepository.findOne({
      where: { id: id },
    });
  }

  /*deleteStatutById(id: number) {
    return this.statutRepository.delete(id);
  }*/
}