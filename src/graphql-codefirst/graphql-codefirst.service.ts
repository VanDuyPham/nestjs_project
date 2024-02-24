import { Injectable } from '@nestjs/common';
import { CreateGraphqlCodefirstInput } from './dto/create-graphql-codefirst.input';
import { UpdateGraphqlCodefirstInput } from './dto/update-graphql-codefirst.input';

@Injectable()
export class GraphqlCodefirstService {
  create(createGraphqlCodefirstInput: CreateGraphqlCodefirstInput) {
    return 'This action adds a new graphqlCodefirst';
  }

  findAll() {
    return `This action returns all graphqlCodefirst`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphqlCodefirst`;
  }

  update(id: number, updateGraphqlCodefirstInput: UpdateGraphqlCodefirstInput) {
    return `This action updates a #${id} graphqlCodefirst`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphqlCodefirst`;
  }
}
