import { Module } from '@nestjs/common';
import { WeathersResolver } from './weathers.resolver';
// import { WeathersService } from './weathers.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { DailyWeatherModule } from 'src/modules/dailyWeather/dailyWeather.module';
import { WeatherAPI } from '../weatherAPI/weatherAPI.service';

@Module({
  imports: [DailyWeatherModule],
  providers: [PrismaService, WeathersResolver, WeatherAPI],
  exports: [],
})
export class WeathersModule {}
