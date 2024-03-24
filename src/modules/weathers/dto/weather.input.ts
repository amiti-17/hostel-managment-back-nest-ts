import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class WeatherInput {
  @Field(() => Int)
  id: number;
}
