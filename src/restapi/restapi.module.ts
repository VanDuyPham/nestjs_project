import { Module } from '@nestjs/common';
import { RestapiService } from './restapi.service';
import { RestapiController } from './restapi.controller';

@Module({
  controllers: [RestapiController],
  providers: [RestapiService],
})
export class RestapiModule {}
