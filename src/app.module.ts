import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestapiModule } from './restapi/restapi.module';

@Module({
  imports: [RestapiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
