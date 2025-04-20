import { Controller, Get, Post, Put, Body, Param, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader, ApiHeaders } from '@nestjs/swagger';
import { ProfilsService } from './services/profils.service';
import { Auth } from '../auth/decorators/auth.decorator';
import { AuthTypes } from '../auth/enums/auth-types.enum';
import { ActiveUser } from '../auth/decorators/active-user.decorator';
import { ActiveUserData } from '../auth/interfaces/active-user-data.interface';
import { CategorieActiviteUploadService } from 'src/categories-activites/services/categorie-activite-upload.service';
import { Profil } from '../../generated/prisma'; // Assurez-vous que le chemin est correct


@Controller('profils')
@ApiTags('profils')
export class ProfilsController {
  constructor(
    private readonly profilsService: ProfilsService,
    private readonly uploadService: CategorieActiviteUploadService,
  ) {}

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un profil par son id' })
  @ApiResponse({ status: 200, description: 'Un profil' })
  async findOne(@Param('id') id: string): Promise<any> {
    const profil = await this.profilsService.findOne(+id);
    if (!profil) {
      throw new BadRequestException('Profil non trouvé');
    }
    return profil;
  }

  @Put(':id')
  @Auth(AuthTypes.Bearer)
  @ApiOperation({ summary: 'Mettre à jour un profil' })
  @ApiResponse({ status: 200, description: 'Le profil mis à jour' })
  async update(
    @Param('id') id: string,
    @Body() updateProfilDto: Profil,
    @ActiveUser() activeUser: ActiveUserData,
  ): Promise<any> {
    if (+id !== activeUser.sub) {
      throw new BadRequestException('Vous ne pouvez pas modifier ce profil');
    }
    return this.profilsService.update(updateProfilDto);
  }

  @Post('create')
  @Auth(AuthTypes.Bearer)
  @ApiOperation({ summary: 'Créer un profil' })
  @ApiResponse({ status: 201, description: 'Le profil créé' })
  @UseInterceptors(FileInterceptor('avatar'))
  @ApiOperation({ summary: "Création  d'un profil" })
  @ApiHeaders([
    { name: 'Content-Type', description: 'multipart/form-data' },
    { name: 'Authorization', description: 'Bearer Token' },
  ])
  @ApiResponse({ status: 201, description: 'Le profil créé' })
  async create(
    @Body() createProfilDto: Profil,
    @UploadedFile() file: Express.Multer.File,
    @ActiveUser() activeUser: ActiveUserData,
  ){
    let fichier = null;
    if(file){
      fichier = await this.uploadService.uploadFile(file);
    }
    return this.profilsService.create(createProfilDto, fichier, activeUser);
  }

  @Post(':id/avatar')
  @Auth(AuthTypes.Bearer)
  @UseInterceptors(FileInterceptor('avatar'))
  @ApiOperation({ summary: 'Mettre à jour l\'avatar d\'un profil' })
  @ApiResponse({ status: 200, description: 'Le profil avec le nouvel avatar' })
  async updateAvatar(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @ActiveUser() activeUser: ActiveUserData,
  ): Promise<any> {
    if (+id !== activeUser.sub) {
      throw new BadRequestException('Vous ne pouvez pas modifier ce profil');
    }
    return this.profilsService.updateAvatar(+id, file);
  }
}
