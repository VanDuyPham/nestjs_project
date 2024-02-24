import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGraphqlCodefirstInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
