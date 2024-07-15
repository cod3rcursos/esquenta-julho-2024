import { Module } from '@nestjs/common';
import { TempService } from './temp.service';
import { TempController } from './temp.controller';

@Module({
  controllers: [TempController],
  providers: [TempService],
})
export class TempModule {}
