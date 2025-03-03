import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../../users/services/users.service';
import { SignInProvider } from './sign-in.provider';
import { HashingProvider } from './hashing.provider';
import { MailService } from '../../mail/services/mail.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../config/jwt.config';
import { BadRequestException } from '@nestjs/common';
import { SigninDto } from '../dtos/signin.dto';
import { ForgotPasswordDto } from '../dtos/forgotpassword.dto';
import { ChangePasswordDto } from '../dtos/changePassword.dto';
import { ActiveUserData } from '../interfaces/active-user-data.interface';
import { User } from '../../database/core/user.entity';
import { usersMock } from '../../users/mocks/users.mock'; // <--- Add this line
import { UsersServiceMock } from '../../users/mocks/users.service.mock'; // <--- Add this line

const mockSignInProvider = {
  signIn: jest.fn(),
};

const mockMailService = {
  sendMailReinitialisationMDP: jest.fn(),
  sendMailMotDePasseModifie: jest.fn(),
};

const mockJwtService = {
  signAsync: jest.fn(),
};

const mockHashingProvider = {
  hashPassword: jest.fn(),
};

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useClass: UsersServiceMock,
        },
        {
          provide: SignInProvider,
          useValue: mockSignInProvider,
        },
        {
          provide: MailService,
          useValue: mockMailService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
        {
          provide: HashingProvider,
          useValue: mockHashingProvider,
        },
        {
          provide: jwtConfig.KEY,
          useValue: jwtConfig,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('signin', () => {
    it('should call signInProvider.signIn', async () => {
      const dto = { email: 'admin@test.com', mot_de_passe: '1234567890' } as SigninDto;
      mockSignInProvider.signIn.mockResolvedValueOnce('mockeed-token');
      const result = await authService.signin(dto);
      expect(mockSignInProvider.signIn).toHaveBeenCalledWith(dto);
      expect(result).toBe('mockeed-token');
    });
  });
});