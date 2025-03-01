import { Controller, Post, Body, UseInterceptors, UploadedFile } from "@nestjs/common";

import { CategorieActiviteService } from "./services/categorie-activite.service";
import { CreateCategorieActiviteDto } from "./dtos/create-categorie-activite.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiHeaders } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";
import { UploadService } from "../uploads/services/upload.service";
import { Upload } from "../database/core/upload.entity";
import { AuthTypes } from "../auth/enums/auth-types.enum";
import { Auth } from "../auth/decorators/auth.decorator";
import { RoleTypes } from "src/auth/enums/role-types.enum";
import { Roles } from "src/auth/decorators/roles.decorator";

@Controller("categories-activites")
@ApiTags("categories-activites")
export class CategorieActiviteController {
  constructor(
    private readonly categorieActiviteService: CategorieActiviteService,
    private readonly uploadService: UploadService
  ) {}


  @Post('create')
  @Auth(AuthTypes.Bearer)
  @Roles(RoleTypes.ADMIN)
  @UseInterceptors(FileInterceptor('fichier'))
  @ApiOperation({ summary: "Création d'une catégorie d'activité" })
  @ApiResponse({
    status: 201,
    description: "La catégorie d'activité a été créée avec succès",
  })
  public async createCategorieActivite(
    @Body() createCategorieActiviteDto: CreateCategorieActiviteDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    let image= null as Upload | null;
    if(file){
      image = await this.uploadService.uploadFile(file);
    }
    return this.categorieActiviteService.createCategorieActivite(createCategorieActiviteDto, image);
  }
}