import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Location } from 'src/modules/locations/entities/location.entity';

@ObjectType()
export class UserWithPassword {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => [Location], { nullable: 'items' })
  locations?: Location[];
}
