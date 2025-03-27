import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Membre } from '../../database/core/membre.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/createMembre.dto';
import { CreateUserProvider } from '../../auth/services/create-user.provider';
import { FindOneByEmailProvider } from '../../auth/services/find-one-by-email.provider';
import { Profil } from '../../database/core/profil.entity';
import { QueryExpressionMap } from 'typeorm/query-builder/QueryExpressionMap';

/**
 * Service de gestion des utilisateurs
 */
@Injectable()
export class MembresService {
  /**
   * Constructeur du service UsersService
   * @param usersRepository le repository des Users
   */
  constructor(
    @InjectRepository(Membre)
    private readonly usersRepository: Repository<Membre>,
    @InjectRepository(Profil)
    private readonly profilRepository: Repository<Profil>,
    private readonly createUserProvider: CreateUserProvider,
    private readonly findOneByEmailProvider: FindOneByEmailProvider,
  ) {}

  /**
   * Le service de création d'un utilisateur
   * @param createUserDto La DTO pour la création d'un utilisateur
   * @returns
   * @throws BadRequestException
   */
  public async createUser(createUserDto: CreateUserDto) {
    if (createUserDto.clef !== process.env.CLEF) {
      throw new BadRequestException('La clé est incorrecte, contactez le club');
    }
    return this.createUserProvider.createUser(createUserDto);
  }

  /**
   * Le service de récupération d'un utilisateur par son email
   * @param email L'email de l'utilisateur
   * @returns
   * @throws BadRequestException
   */
  public async findOneByEmail(email: string): Promise<Membre | null> {
    return this.usersRepository.findOne({
      where: { email },
      relations: ['profil', 'profil.avatar'],
    });
  }

  /**
   * Service qui récupère tous les utilisateurs
   * @returns
   */
  public async findAllUsers() {
    return this.usersRepository.find({ relations: ['role'] });
  }

  /**
   * Mise à jour d'un utilisateur
   * @param user
   * @returns
   */
  public async update(user: Membre) {
    return this.usersRepository.save(user);
  }

  /**
   * Récupération d'un utilisateur par son id
   * @param id
   * @returns
   */
  public async findUserById(id: number) {
    return this.usersRepository.findOne({ where: { id: id }, relations: ['profil'] });
  }

  /**
   * Récupération d'un utilisateur
   * @param email
   * @returns
   */
  public async findOneUserByEmailProvider(
    email: string,
  ): Promise<Membre | null> {
    return this.findOneByEmailProvider.findOneUserByEmailProvider(email);
  }

  public async findProfileByUserIdWithFilters(id: number, activites: boolean) {
    const now = new Date().toISOString();

    const query = await this.usersRepository
      .createQueryBuilder('membre')
      .select(['membre.id']) // Ne garde que l'ID du membre
      .leftJoinAndSelect('membre.profil', 'profil');

    if (activites) {
      query
        .leftJoinAndSelect('membre.inscriptions', 'inscriptions') // Inscriptions complètes
        .leftJoinAndSelect('inscriptions.activite', 'activite');
    }

    query.where('membre.id = :id', { id });

    if (activites) {
      query.andWhere('activite.date_heure_debut > :now', { now });
    }

    return query.getOne();
  }
}
