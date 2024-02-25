import { Injectable } from '@nestjs/common';
import { CreateGraphqlSchemafirstInput } from './dto/create-graphql-schemafirst.input';
import { UpdateGraphqlSchemafirstInput } from './dto/update-graphql-schemafirst.input';

@Injectable()
export class GraphqlSchemafirstService {
  create(createGraphqlSchemafirstInput: CreateGraphqlSchemafirstInput) {
    return 'This action adds a new graphqlSchemafirst';
  }

  findAll() {
    return `This action returns all graphqlSchemafirst`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphqlSchemafirst`;
  }

  update(id: number, updateGraphqlSchemafirstInput: UpdateGraphqlSchemafirstInput) {
    return `This action updates a #${id} graphqlSchemafirst`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphqlSchemafirst`;
  }
}
