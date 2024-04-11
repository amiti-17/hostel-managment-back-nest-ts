import { Module } from '@nestjs/common';
import { FloorResolver } from './floor.resolver';
import { FloorService } from './floor.service';

@Module({
  providers: [FloorResolver, FloorService]
})
export class FloorModule {}
