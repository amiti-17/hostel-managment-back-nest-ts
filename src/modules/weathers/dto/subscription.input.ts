import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class SubscriptionInput {
  @Field(() => Int)
  id: number;
}
