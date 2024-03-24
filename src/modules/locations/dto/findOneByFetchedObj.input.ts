import { CreateLocationInput } from './createLocation.input';
import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class FindOneByFetchedObjInput extends CreateLocationInput {
  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lon: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  state?: string;

  @Field({ nullable: true })
  country?: string;
}
