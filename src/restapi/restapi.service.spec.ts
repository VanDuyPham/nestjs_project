import { Test, TestingModule } from '@nestjs/testing';
import { RestapiService } from './restapi.service';

describe('RestapiService', () => {
  let service: RestapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestapiService],
    }).compile();

    service = module.get<RestapiService>(RestapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
