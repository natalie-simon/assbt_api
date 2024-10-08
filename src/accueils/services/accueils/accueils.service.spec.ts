import { Test, TestingModule } from '@nestjs/testing';
import { AccueilsService } from './accueils.service';

describe('AccueilsService', () => {
  let service: AccueilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccueilsService],
    }).compile();

    service = module.get<AccueilsService>(AccueilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
