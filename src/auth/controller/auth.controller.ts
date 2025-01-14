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

/**
 * Auth controller
 * Controlleur pour les routes liées à l'authentification
 */
@Controller('auth')
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
  async signIn(
    @Body(new ValidationPipe())
    signInDto: SignInDto,
  ) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
}
