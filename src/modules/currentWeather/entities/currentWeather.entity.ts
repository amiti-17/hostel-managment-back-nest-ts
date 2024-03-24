import { ObjectType, Field, Int } from '@nestjs/graphql';
import { JsonValue } from '@prisma/client/runtime/library';
import GraphQLJSON from 'graphql-type-json';
import { Weather } from 'src/modules/weathers/entities/weather.entity';

@ObjectType()
export class CurrentWeather {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  dt: number;

  @Field(() => GraphQLJSON)
  current: JsonValue;

  @Field(() => Weather, { nullable: true })
  weather?: Weather;
}
