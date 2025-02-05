import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './services/users.service';
import { UsersServiceMock } from './mocks/users.service.mock';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { Auth } from '../auth/decorators/auth.decorator';
import { JwtService } from '@nestjs/jwt';
import { JwtServiceMock } from './mocks/jwt.service.mocks';
import { AccessTokenGuardMock } from '../auth/mocks/access-token.guard.mock';
import jwtConfig from '../auth/config/jwt.config';
import { jwtConfigMock } from '../auth/mocks/jwt-config.mock';


describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useClass: UsersServiceMock,
        },
        {
          provide: JwtService,
          useClass: JwtServiceMock,
        },
        {
          provide: AccessTokenGuard,
          useClass: AccessTokenGuardMock,
        },
        {
          provide: jwtConfig.KEY,
          useValue: jwtConfigMock,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

})