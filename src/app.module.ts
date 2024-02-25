import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestapiModule } from './restapi/restapi.module';
import { GraphqlCodefirstModule } from './graphql-codefirst/graphql-codefirst.module';
import { GraphqlSchemafirstModule } from './graphql-schemafirst/graphql-schemafirst.module';

@Module({
  imports: [RestapiModule, GraphqlCodefirstModule, GraphqlSchemafirstModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
