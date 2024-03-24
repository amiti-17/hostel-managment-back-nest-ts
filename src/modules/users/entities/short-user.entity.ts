import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ShortUser {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}
