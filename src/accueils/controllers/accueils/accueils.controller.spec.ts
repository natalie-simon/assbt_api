import { Test, TestingModule } from '@nestjs/testing';
import { AccueilsController } from './accueils.controller';

describe('AccueilsController', () => {
  let controller: AccueilsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccueilsController],
    }).compile();

    controller = module.get<AccueilsController>(AccueilsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
