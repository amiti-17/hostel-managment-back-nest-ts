import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelResolver } from './hotel.resolver';

@Module({
  providers: [HotelService, HotelResolver]
})
export class HotelModule {}
