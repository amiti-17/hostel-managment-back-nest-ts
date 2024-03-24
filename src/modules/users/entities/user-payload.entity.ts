import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserPayload {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => [String])
  role: string[];
}
