import { AuthService } from './services/auth.service';
import { Controller } from '@nestjs/common';

/**
 * Auth controller
 */
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}
}
