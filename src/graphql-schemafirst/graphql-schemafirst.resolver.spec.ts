import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlSchemafirstResolver } from './graphql-schemafirst.resolver';
import { GraphqlSchemafirstService } from './graphql-schemafirst.service';

describe('GraphqlSchemafirstResolver', () => {
  let resolver: GraphqlSchemafirstResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlSchemafirstResolver, GraphqlSchemafirstService],
    }).compile();

    resolver = module.get<GraphqlSchemafirstResolver>(GraphqlSchemafirstResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
