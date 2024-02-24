import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlCodefirstService } from './graphql-codefirst.service';

describe('GraphqlCodefirstService', () => {
  let service: GraphqlCodefirstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlCodefirstService],
    }).compile();

    service = module.get<GraphqlCodefirstService>(GraphqlCodefirstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
