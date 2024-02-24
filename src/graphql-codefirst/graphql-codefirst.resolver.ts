import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GraphqlCodefirstService } from './graphql-codefirst.service';
import { GraphqlCodefirst } from './entities/graphql-codefirst.entity';
import { CreateGraphqlCodefirstInput } from './dto/create-graphql-codefirst.input';
import { UpdateGraphqlCodefirstInput } from './dto/update-graphql-codefirst.input';

@Resolver(() => GraphqlCodefirst)
export class GraphqlCodefirstResolver {
  constructor(private readonly graphqlCodefirstService: GraphqlCodefirstService) {}

  @Mutation(() => GraphqlCodefirst)
  createGraphqlCodefirst(@Args('createGraphqlCodefirstInput') createGraphqlCodefirstInput: CreateGraphqlCodefirstInput) {
    return this.graphqlCodefirstService.create(createGraphqlCodefirstInput);
  }

  @Query(() => [GraphqlCodefirst], { name: 'graphqlCodefirst' })
  findAll() {
    return this.graphqlCodefirstService.findAll();
  }

  @Query(() => GraphqlCodefirst, { name: 'graphqlCodefirst' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlCodefirstService.findOne(id);
  }

  @Mutation(() => GraphqlCodefirst)
  updateGraphqlCodefirst(@Args('updateGraphqlCodefirstInput') updateGraphqlCodefirstInput: UpdateGraphqlCodefirstInput) {
    return this.graphqlCodefirstService.update(updateGraphqlCodefirstInput.id, updateGraphqlCodefirstInput);
  }

  @Mutation(() => GraphqlCodefirst)
  removeGraphqlCodefirst(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlCodefirstService.remove(id);
  }
}
