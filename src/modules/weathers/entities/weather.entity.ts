import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CurrentWeather } from 'src/modules/currentWeather/entities/currentWeather.entity';
import { DailyWeather } from 'src/modules/dailyWeather/entities/dailyWeatherService.entity';
import { Location } from 'src/modules/locations/entities/location.entity';

@ObjectType()
export class Weather {
  @Field(() => Int)
  id: number;

  @Field(() => CurrentWeather, { nullable: true })
  current?: CurrentWeather;

  @Field(() => Int)
  currentId: number;

  @Field(() => [DailyWeather], { nullable: true })
  days?: DailyWeather[];

  @Field(() => Location, { nullable: true })
  locations?: Location;
}
