import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CoordinatesInput {
  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lon: number;
}
