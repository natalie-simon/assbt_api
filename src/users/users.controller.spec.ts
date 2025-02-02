import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './services/users.service';
import { UsersServiceMock } from './mocks/users.service.mock';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { Auth } from '../auth/decorators/auth.decorator';


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
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

})