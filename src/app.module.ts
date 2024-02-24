import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestapiModule } from './restapi/restapi.module';
import { GraphqlCodefirstModule } from './graphql-codefirst/graphql-codefirst.module';

@Module({
  imports: [RestapiModule, GraphqlCodefirstModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
