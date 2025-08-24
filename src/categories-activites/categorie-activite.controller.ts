import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { CategorieActiviteService } from './services/categorie-activite.service';
import { CreateCategorieActiviteDto } from './dtos/create-categorie-activite.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiHeaders,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { CategorieActiviteUploadService } from './services/categorie-activite-upload.service';
import { AuthTypes } from '../auth/enums/auth-types.enum';
import { Auth } from '../auth/decorators/auth.decorator';
import { RoleTypes } from '../auth/enums/role-types.enum';
import { Roles } from '../auth/decorators/roles.decorator';

/**
 * Contrôleur des catégories d'activités
 * Gestion des routes liées aux catégories d'activités
 */
@Controller('categories-activites')
@ApiTags('categories-activites')
export class CategorieActiviteController {
  /**
   * Constru
   * @param categorieActiviteService
   * @param uploadService
   */
  constructor(
    private readonly categorieActiviteService: CategorieActiviteService,
    private readonly uploadService: CategorieActiviteUploadService,
  ) {}

  /**
   * Création d'une catégorie d'activité
   * @param createCategorieActiviteDto
   * @param image
   * @returns
   */
  @Post('create')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.ADMIN)
  @UseInterceptors(FileInterceptor('image'))
  @ApiOperation({ summary: "Création d'une catégorie d'activité" })
  @ApiHeaders([
    { name: 'Content-Type', description: 'multipart/form-data' },
    { name: 'Authorization', description: 'Bearer Token' },
  ])
  @ApiResponse({
    status: 201,
    description: "La catégorie d'activité a été créée avec succès",
  })
  public async createCategorieActivite(
    @Body() createCategorieActiviteDto: CreateCategorieActiviteDto,
    @UploadedFile() image?: Express.Multer.File,
  ) {
    let fichier = null;
    if (image) {
      fichier = await this.uploadService.uploadFile(image);
    }
    return this.categorieActiviteService.createCategorieActivite(
      createCategorieActiviteDto,
      fichier,
    );
  }

  /**
   * Récupération de toutes les catégories d'activités (Admin)
   * @returns
   */
  @Get()
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.ADMIN)
  @ApiOperation({
    summary: "Récupération de toutes les catégories d'activités",
  })
  @ApiResponse({
    status: 200,
    description: "Liste de toutes les catégories d'activités",
  })
  public async findAllCategoriesActivites() {
    const result =
      await this.categorieActiviteService.findAllCategoriesActivites();

    return result;
  }

  /**
   * Récupération d'une catégorie d'activité avec filtres possibles
   * @param id
   */
  @Get(':id')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.ADMIN)
  @ApiOperation({
    summary: "Récupération d'un catégorie d'activité avec filtres possibles",
  })
  @ApiResponse({
    status: 200,
    description: "Récupération d'une catégorie d'activité",
  })
  public async findOneCategorieById(@Param('id') id: number) {
    return this.categorieActiviteService.findCategorieActiviteById(id);
  }

  /**
   * Mise à jour d'une catégorie d'activité
   * @description Met à jour une catégorie d'activité existante avec les nouvelles données fournies.
   * @param id
   * @param createCategorieActiviteDto
   * @param image
   * @returns
   */
  @Put(':id')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.ADMIN)
  @UseInterceptors(FileInterceptor('image'))
  @ApiOperation({
    summary: "Mise à jour d'une catégorie d'activité",
  })
  @ApiHeaders([
    { name: 'Content-Type', description: 'multipart/form-data' },
    { name: 'Authorization', description: 'Bearer Token' },
  ])
  @ApiResponse({
    status: 200,
    description: "Mise à jour d'une catégorie d'activité",
  })
  public async updateCategorieActivite(
    @Param('id') id: number,
    @Body() createCategorieActiviteDto: CreateCategorieActiviteDto,
    @UploadedFile() image?: Express.Multer.File,
  ) {
    const categorieActivite =
      await this.categorieActiviteService.findCategorieActiviteById(id);
    if (!categorieActivite) {
      throw new NotFoundException(
        `Catégorie d'activité avec l'id ${id} non trouvée`,
      );
    }

    let fichier = null;
    if (image) {
      if (categorieActivite?.image.id !== undefined) {
        const fichier_a_effacer_id = categorieActivite.image.id;
        console.log(fichier_a_effacer_id);
        this.uploadService.deleteFile(fichier_a_effacer_id);
      }
      fichier = await this.uploadService.uploadFile(image);
    }
    const updatedCategorieActivite = {
      ...createCategorieActiviteDto,
      imageId: fichier,
    };

    const result = await this.categorieActiviteService.updateCategorieActivite(
      id,
      updatedCategorieActivite,
    );

    return result;
  }

  /**
   * Suppression d'une catégorie d'activité
   * @param id
   * @returns
   */
  @Delete(':id')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.ADMIN)
  @ApiOperation({
    summary: "Suppression d'une catégorie d'activité",
  })
  @ApiResponse({
    status: 200,
    description: "Suppression d'une catégorie d'activité",
  })
  public async deleteCategorieActivite(@Param('id') id: number) {
    const categorieActivite =
      await this.categorieActiviteService.findCategorieActiviteById(id);
    if (!categorieActivite) {
      throw new NotFoundException(
        `Catégorie d'activité avec l'id ${id} non trouvée`,
      );
    }
    return this.categorieActiviteService.deleteCategorieActivite(id);
  }
}
