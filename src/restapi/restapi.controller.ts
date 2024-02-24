import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestapiService } from './restapi.service';
import { CreateRestapiDto } from './dto/create-restapi.dto';
import { UpdateRestapiDto } from './dto/update-restapi.dto';

@Controller('restapi')
export class RestapiController {
  constructor(private readonly restapiService: RestapiService) {}

  @Post()
  create(@Body() createRestapiDto: CreateRestapiDto) {
    return this.restapiService.create(createRestapiDto);
  }

  @Get()
  findAll() {
    return this.restapiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restapiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestapiDto: UpdateRestapiDto) {
    return this.restapiService.update(+id, updateRestapiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restapiService.remove(+id);
  }
}
