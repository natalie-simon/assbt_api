import { Test, TestingModule } from '@nestjs/testing';
import { SignInProvider } from './sign-in.provider';
import { MembresService } from '../../membres/services/membres.service';
import { HashingProvider } from './hashing.provider';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException, RequestTimeoutException } from '@nestjs/common';
import { SigninDto } from '../dtos/signin.dto';
import jwtConfig from '../config/jwt.config';

describe('SignInProvider', () => {
  let provider: SignInProvider;
  let usersService: MembresService;
  let hashingProvider: HashingProvider;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SignInProvider,
        {
          provide: MembresService,
          useValue: {
            findOneByEmail: jest.fn(),
          },
        },
        {
          provide: HashingProvider,
          useValue: {
            comparePassword: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            signAsync: jest.fn(),
          },
        },
        {
          provide: jwtConfig.KEY,
          useValue: {
            secret: 'mockSecret',
            accessTokenTtl: '1h',
          },
        },
      ],
    }).compile();

    provider = module.get<SignInProvider>(SignInProvider);
    usersService = module.get<MembresService>(MembresService);
    hashingProvider = module.get<HashingProvider>(HashingProvider);
    jwtService = module.get<JwtService>(JwtService);
  });

  /*describe('signIn', () => {
    it('should return an access token if credentials are valid', async () => {
      const signinDto: SigninDto = {
        email: 'test@example.com',
        mot_de_passe: 'password',
      };
      const user = {
        id: '1',
        email: 'test@example.com',
        mot_de_passe: 'hashedPassword',
        role: 'user',
      };
      const accessToken = 'mockAccessToken';

      (usersService.findOneByEmail as jest.Mock).mockResolvedValue(user);
      (hashingProvider.comparePassword as jest.Mock).mockResolvedValue(true);
      (jwtService.signAsync as jest.Mock).mockResolvedValue(accessToken);

      const result = await provider.signIn(signinDto);

      expect(result).toEqual({ accessToken });
      expect(usersService.findOneByEmail).toHaveBeenCalledWith(signinDto.email);
      expect(hashingProvider.comparePassword).toHaveBeenCalledWith(
        signinDto.mot_de_passe,
        user.mot_de_passe,
      );
      expect(jwtService.signAsync).toHaveBeenCalledWith(
        { sub: user.id, email: user.email, role: user.role },
        { secret: 'mockSecret', expiresIn: '1h' },
      );
    });*/

    /*it('should throw UnauthorizedException if passwords do not match', async () => {
      const signinDto: SigninDto = {
        email: 'test@example.com',
        mot_de_passe: 'wrongPassword',
      };
      const user = {
        id: '1',
        email: 'test@example.com',
        mot_de_passe: 'hashedPassword',
        role: 'user',
      };

      (usersService.findOneByEmail as jest.Mock).mockResolvedValue(user);
      (hashingProvider.comparePassword as jest.Mock).mockResolvedValue(false);

      await expect(provider.signIn(signinDto)).rejects.toThrow(
        UnauthorizedException,
      );
    });*/

    /*it('should throw RequestTimeoutException if password comparison fails', async () => {
      const signinDto: SigninDto = {
        email: 'test@example.com',
        mot_de_passe: 'password',
      };
      const user = {
        id: '1',
        email: 'test@example.com',
        mot_de_passe: 'hashedPassword',
        role: 'user',
      };

      (usersService.findOneByEmail as jest.Mock).mockResolvedValue(user);
      (hashingProvider.comparePassword as jest.Mock).mockRejectedValue(
        new Error('Comparison error'),
      );

      await expect(provider.signIn(signinDto)).rejects.toThrow(
        RequestTimeoutException,
      );
    });*/
  });
});
