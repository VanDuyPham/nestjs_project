import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestapiModule } from './restapi/restapi.module';
import { GraphqlCodefirstModule } from './graphql-codefirst/graphql-codefirst.module';
import { GraphqlSchemafirstModule } from './graphql-schemafirst/graphql-schemafirst.module';
import { MicroserviceModule } from './microservice/microservice.module';

@Module({
  imports: [RestapiModule, GraphqlCodefirstModule, GraphqlSchemafirstModule, MicroserviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
