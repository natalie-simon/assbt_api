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

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
