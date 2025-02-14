import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { SigninDto } from './dtos/signin.dto';
import { ForgotPasswordDto } from './dtos/forgotpassword.dto';
import { ChangePasswordDto } from './dtos/changePassword.dto';
import { ActiveUserData } from './interfaces/active-user-data.interface';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            signin: jest.fn(),
            forgotPassword: jest.fn(),
            updatePassword: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  describe('signIn', () => {
    it('should call signin method of AuthService', async () => {
      const signinDto: SigninDto = {
        email: 'test@example.com',
        mot_de_passe: 'password',
      };
      const result = { token: 'mock-token' };

      (authService.signin as jest.Mock).mockResolvedValue(result);

      const response = await controller.signIn(signinDto);

      expect(authService.signin).toHaveBeenCalledWith(signinDto);
      expect(response).toBe(result);
    });
  });

  describe('forgotPassword', () => {
    it('should call forgotPassword method of AuthService', async () => {
      const forgotPasswordDto: ForgotPasswordDto = {
        email: 'test@example.com',
      };
      const result = { message: 'Email sent' };

      (authService.forgotPassword as jest.Mock).mockResolvedValue(result);

      const response = await controller.forgotPassword(forgotPasswordDto);

      expect(authService.forgotPassword).toHaveBeenCalledWith(
        forgotPasswordDto,
      );
      expect(response).toBe(result);
    });
  });

  describe('updatePassword', () => {
    it('should call updatePassword method of AuthService', async () => {
      const changePasswordDto: ChangePasswordDto = {
        nouveau_mdp: 'newPassword',
      };
      const user: ActiveUserData = { sub: 1, email: 'test@example.com' };
      const result = { message: 'Password updated' };

      (authService.updatePassword as jest.Mock).mockResolvedValue(result);

      const response = await controller.updatePassword(changePasswordDto, user);

      expect(authService.updatePassword).toHaveBeenCalledWith(
        changePasswordDto,
        user,
      );
      expect(response).toBe(result);
    });
  });
});
