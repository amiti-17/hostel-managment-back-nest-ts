import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class UpdateUserLocationsInput {
  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lon: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  state?: string;
}
