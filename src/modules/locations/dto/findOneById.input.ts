import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class FindOneById {
  @Field(() => Int)
  id: number;
}
