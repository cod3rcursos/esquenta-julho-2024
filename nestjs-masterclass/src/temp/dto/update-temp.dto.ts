import { PartialType } from '@nestjs/mapped-types';
import { CreateTempDto } from './create-temp.dto';

export class UpdateTempDto extends PartialType(CreateTempDto) {}
