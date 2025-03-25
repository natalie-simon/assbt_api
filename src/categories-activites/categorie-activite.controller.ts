import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
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
    return this.categorieActiviteService.createCategorieActivite(createCategorieActiviteDto, fichier);
  }
}
