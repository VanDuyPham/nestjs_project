import { CreateGraphqlCodefirstInput } from './create-graphql-codefirst.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGraphqlCodefirstInput extends PartialType(CreateGraphqlCodefirstInput) {
  @Field(() => Int)
  id: number;
}
