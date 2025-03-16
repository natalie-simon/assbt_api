import { Test, TestingModule } from '@nestjs/testing';
import { MembresController } from './membres.controller';
import { MembresService } from './services/membres.service';
import { MembresServiceMock } from './mocks/membres.service.mock';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { Auth } from '../auth/decorators/auth.decorator';
import { JwtService } from '@nestjs/jwt';
import { JwtServiceMock } from './mocks/jwt.service.mocks';
import { AccessTokenGuardMock } from '../auth/mocks/access-token.guard.mock';
import jwtConfig from '../auth/config/jwt.config';
import { jwtConfigMock } from '../auth/mocks/jwt-config.mock';
import { membresMock } from './mocks/membres.mock';
import { CreateUserDto } from './dtos/createMembre.dto';


describe('UsersController', () => {
  let controller: MembresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MembresController],
      providers: [
        {
          provide: MembresService,
          useClass: MembresServiceMock,
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

    controller = module.get<MembresController>(MembresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('registerUser', () => {
    const dto = {
      email: 'test@example.com',
      mot_de_passe:
        '$2a$10$ytMTED6Uqu./t6.gNEifTOHBZLanPWyU3BbUTVRxcp6K9yzQb0y9W',
      clef: process.env.CLEF,
    } as CreateUserDto;

    it('should return a new User', () => {
      expect(controller.registerUser(dto)).resolves.toEqual(membresMock[0]);
    });
  })

  describe('getUsers', () => {
    it('should return an array of Users', () => {
      expect(controller.getUsers()).resolves.toEqual(membresMock);
    });
  });

});