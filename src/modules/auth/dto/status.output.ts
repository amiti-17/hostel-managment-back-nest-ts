import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StatusOutput {
  @Field()
  status?: boolean;
}
