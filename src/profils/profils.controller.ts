import { Controller, Get, Post, Put, Body, Param, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProfilsService } from './services/profils.service';
import { Profil } from '../database/core/profil.entity';
import { Auth } from '../auth/decorators/auth.decorator';
import { AuthTypes } from '../auth/enums/auth-types.enum';
import { ActiveUser } from '../auth/decorators/active-user.decorator';
import { ActiveUserData } from '../auth/interfaces/active-user-data.interface';

@Controller('profils')
@ApiTags('profils')
export class ProfilsController {
  constructor(private readonly profilsService: ProfilsService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un profil par son id' })
  @ApiResponse({ status: 200, description: 'Un profil' })
  async findOne(@Param('id') id: string): Promise<Profil> {
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
  ): Promise<Profil> {
    if (+id !== activeUser.sub) {
      throw new BadRequestException('Vous ne pouvez pas modifier ce profil');
    }
    return this.profilsService.update(updateProfilDto);
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
  ): Promise<Profil> {
    if (+id !== activeUser.sub) {
      throw new BadRequestException('Vous ne pouvez pas modifier ce profil');
    }
    return this.profilsService.updateAvatar(+id, file);
  }
}
