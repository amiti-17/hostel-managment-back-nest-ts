import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserPreferences {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field()
  preferredTheme: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
