import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from '../../database/core/role.entity';
import { Repository } from "typeorm";
import { CreateRoleDto } from  '../dtos/create-role.dto';

/**
 * Service de gestion des Roles
 */
@Injectable()
export class RolesService {
  /**
   * Constructeur
   * @param roleRepository
   */
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  /**
   * Création d'un role
   * @param createRoleDto
   * @returns
   */
  createRole(createRoleDto: CreateRoleDto) {
    const newRole = this.roleRepository.create(createRoleDto);
    return this.roleRepository.save(newRole);
  }

  /**
   * Récupération de tout les roles
   * @returns
   */
  findAllRole() {
    return this.roleRepository.find();
  }

  /**
   * Récupération d'un role par son id
   * @param id
   * @returns
   */
  public async findRoleById(id: number) {
    return  await this.roleRepository.findOne({
      where: { id: id },
    });
  }

  /*deleteRoleById(id: number) {
    return this.roleRepository.delete(id);
  }*/
}