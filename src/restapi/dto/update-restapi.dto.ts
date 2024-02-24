import { PartialType } from '@nestjs/mapped-types';
import { CreateRestapiDto } from './create-restapi.dto';

export class UpdateRestapiDto extends PartialType(CreateRestapiDto) {}
