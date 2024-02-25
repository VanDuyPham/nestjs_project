import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlSchemafirstService } from './graphql-schemafirst.service';

describe('GraphqlSchemafirstService', () => {
  let service: GraphqlSchemafirstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlSchemafirstService],
    }).compile();

    service = module.get<GraphqlSchemafirstService>(GraphqlSchemafirstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
