import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GraphqlSchemafirstService } from './graphql-schemafirst.service';
import { CreateGraphqlSchemafirstInput } from './dto/create-graphql-schemafirst.input';
import { UpdateGraphqlSchemafirstInput } from './dto/update-graphql-schemafirst.input';

@Resolver('GraphqlSchemafirst')
export class GraphqlSchemafirstResolver {
  constructor(private readonly graphqlSchemafirstService: GraphqlSchemafirstService) {}

  @Mutation('createGraphqlSchemafirst')
  create(@Args('createGraphqlSchemafirstInput') createGraphqlSchemafirstInput: CreateGraphqlSchemafirstInput) {
    return this.graphqlSchemafirstService.create(createGraphqlSchemafirstInput);
  }

  @Query('graphqlSchemafirst')
  findAll() {
    return this.graphqlSchemafirstService.findAll();
  }

  @Query('graphqlSchemafirst')
  findOne(@Args('id') id: number) {
    return this.graphqlSchemafirstService.findOne(id);
  }

  @Mutation('updateGraphqlSchemafirst')
  update(@Args('updateGraphqlSchemafirstInput') updateGraphqlSchemafirstInput: UpdateGraphqlSchemafirstInput) {
    return this.graphqlSchemafirstService.update(updateGraphqlSchemafirstInput.id, updateGraphqlSchemafirstInput);
  }

  @Mutation('removeGraphqlSchemafirst')
  remove(@Args('id') id: number) {
    return this.graphqlSchemafirstService.remove(id);
  }
}
