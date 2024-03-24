import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { User } from 'src/modules/users/entities/user.entity';
import { Weather } from 'src/modules/weathers/entities/weather.entity';

@ObjectType()
export class Location {
  @Field(() => Int)
  id: number;

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

  @Field(() => [User], { nullable: 'items' })
  users?: User[];

  @Field(() => Weather, { nullable: true })
  weather?: Weather;

  @Field(() => Int, { nullable: true })
  weatherId?: number;
}
