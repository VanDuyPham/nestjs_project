import { Module } from '@nestjs/common';
import { GraphqlCodefirstService } from './graphql-codefirst.service';
import { GraphqlCodefirstResolver } from './graphql-codefirst.resolver';

@Module({
  providers: [GraphqlCodefirstResolver, GraphqlCodefirstService],
})
export class GraphqlCodefirstModule {}
