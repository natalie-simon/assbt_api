import { Injectable, Inject, LoggerService } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategorieActivite } from "../../database/core/categorie_activite.entity";
import { Repository } from "typeorm";
import { CreateCategorieActiviteDto } from "../dtos/create-categorie-activite.dto";
import { Upload } from "../../database/core/upload.entity";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";



@Injectable()
export class CategorieActiviteService {
  constructor(
    @InjectRepository(CategorieActivite)
    private readonly categorieActiviteRepository: Repository<CategorieActivite>,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  public async createCategorieActivite(
    createCategorieActiviteDto: CreateCategorieActiviteDto,
    image: Upload | null,
  ){
    const newCategorieActivite = this.categorieActiviteRepository.create({
      ...createCategorieActiviteDto,
      image: image,
    });

    const savedCategorieActivite = await this.categorieActiviteRepository.save(newCategorieActivite);
    this.logger.log(`La catégorie d'activité suivante : ${savedCategorieActivite.lbl_categorie} created`);
    return savedCategorieActivite;
  }
}