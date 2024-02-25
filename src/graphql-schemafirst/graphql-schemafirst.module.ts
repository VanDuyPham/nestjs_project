import { Module } from '@nestjs/common';
import { GraphqlSchemafirstService } from './graphql-schemafirst.service';
import { GraphqlSchemafirstResolver } from './graphql-schemafirst.resolver';

@Module({
  providers: [GraphqlSchemafirstResolver, GraphqlSchemafirstService],
})
export class GraphqlSchemafirstModule {}
