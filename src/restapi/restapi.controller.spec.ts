import { Test, TestingModule } from '@nestjs/testing';
import { RestapiController } from './restapi.controller';
import { RestapiService } from './restapi.service';

describe('RestapiController', () => {
  let controller: RestapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestapiController],
      providers: [RestapiService],
    }).compile();

    controller = module.get<RestapiController>(RestapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
