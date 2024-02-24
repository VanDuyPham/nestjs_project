import { Injectable } from '@nestjs/common';
import { CreateRestapiDto } from './dto/create-restapi.dto';
import { UpdateRestapiDto } from './dto/update-restapi.dto';

@Injectable()
export class RestapiService {
  create(createRestapiDto: CreateRestapiDto) {
    return 'This action adds a new restapi';
  }

  findAll() {
    return `This action returns all restapi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restapi`;
  }

  update(id: number, updateRestapiDto: UpdateRestapiDto) {
    return `This action updates a #${id} restapi`;
  }

  remove(id: number) {
    return `This action removes a #${id} restapi`;
  }
}
