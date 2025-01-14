import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignInDto } from 'src/auth/dtos/signin.dto';
import { Public } from 'src/auth/decorators/public.decorators';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

/**
 * Auth controller
 * Controlleur pour les routes liées à l'authentification
 */
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  /**
   * Constructeur
   * @param authService Le service AuthService
   */
  constructor(private readonly authService: AuthService) {}

  /**
   * Route de connection
   * @param signInDto la DTO correspondant au login
   * @returns
   */
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  @ApiOperation({
    summary: 'Connexion',
    description: "Permet de se connecter à l'application",
  })
  @ApiResponse({
    status: 200,
    description: 'le token de connection',
  })
  async signIn(
    @Body(new ValidationPipe())
    signInDto: SignInDto,
  ) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
}
