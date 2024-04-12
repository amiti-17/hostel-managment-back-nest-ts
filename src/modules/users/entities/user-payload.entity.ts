import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserPayload {
  @Field()
  id: string;

  @Field(() => [String])
  role: string[];
}
