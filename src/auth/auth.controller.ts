import { Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { Controller } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { SigninDto } from './dtos/signin.dto';
import { AuthTypes } from './enums/auth-types.enum';
import { Auth } from './decorators/auth.decorator';

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
  ) {}

  /**
   * Méthode de connexion
   * @param signinDto
   * @returns
   */
  @Post('sign-in')
  @Auth(AuthTypes.None)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Connexion d\'un utilisateur' })
  @ApiResponse({ status: 200, description: 'Connexion réussie' })
  public async signIn(@Body() signinDto: SigninDto ){
    return await this.authService.signin(signinDto);
  }
}
