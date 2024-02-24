import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlCodefirstResolver } from './graphql-codefirst.resolver';
import { GraphqlCodefirstService } from './graphql-codefirst.service';

describe('GraphqlCodefirstResolver', () => {
  let resolver: GraphqlCodefirstResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlCodefirstResolver, GraphqlCodefirstService],
    }).compile();

    resolver = module.get<GraphqlCodefirstResolver>(GraphqlCodefirstResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
