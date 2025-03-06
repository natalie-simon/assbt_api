import {
  Post,
  Body,
  HttpCode,
  HttpStatus,
  LoggerService,
  Inject,
} from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { Controller } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { SigninDto } from './dtos/signin.dto';
import { AuthTypes } from './enums/auth-types.enum';
import { Auth } from './decorators/auth.decorator';
import { ForgotPasswordDto } from './dtos/forgotpassword.dto';
import { ChangePasswordDto } from './dtos/changePassword.dto';
import { ActiveUser } from './decorators/active-user.decorator';
import { ActiveUserData } from './interfaces/active-user-data.interface';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

/**
 * Auth controller
 */
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  /**
   * Constructeur
   * @param authService
   */
  constructor(
    private readonly authService: AuthService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  /**
   * Méthode de connexion
   * @param signinDto
   * @returns
   */
  @Post('sign-in')
  @Auth(AuthTypes.None)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "Connexion d'un utilisateur" })
  @ApiResponse({ status: 200, description: 'Connexion réussie' })
  public async signIn(@Body() signinDto: SigninDto) {
    return await this.authService.signin(signinDto);
  }

  /**
   * Réinitialisation du mot de passe envoie du mail
   * @param forgotPasswordDto
   * @returns
   */
  @Post('forgot-password')
  @Auth(AuthTypes.None)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mot de passe oublié' })
  @ApiResponse({
    status: 200,
    description: 'Un mail vient de vous être envoyé.',
  })
  public async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    this.logger.log(`Le membre : ${forgotPasswordDto.email} a demandé une réinitialisation de son mot de passe.`);
    return await this.authService.forgotPassword(forgotPasswordDto);
  }

  /**
   * Mise à jour du mot de passe
   * @param changePasswordDto
   * @param user
   * @returns
   */
  @Post('change-password')
  @Auth(AuthTypes.Bearer)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mise à jour du mot de passe' })
  @ApiResponse({
    status: 200,
    description: 'Votre mot de passe a été mis à jour.',
  })
  public async updatePassword(
    @Body() changePasswordDto: ChangePasswordDto,
    @ActiveUser() user: ActiveUserData,
  ) {
    this.logger.log(`Le membre : ${user.email} a changé son mot de passe.`,);

    return await this.authService.updatePassword(changePasswordDto, user);
  }
}
