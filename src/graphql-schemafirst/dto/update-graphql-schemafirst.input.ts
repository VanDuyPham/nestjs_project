import { CreateGraphqlSchemafirstInput } from './create-graphql-schemafirst.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateGraphqlSchemafirstInput extends PartialType(CreateGraphqlSchemafirstInput) {
  id: number;
}
