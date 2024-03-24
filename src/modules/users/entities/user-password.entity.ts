import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserWithPassword {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
