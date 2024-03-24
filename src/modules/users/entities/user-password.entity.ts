import { ObjectType, Field } from '@nestjs/graphql';
import { UserPreferences } from './user-preferences.entity';

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

  @Field(() => [String])
  role: string[];

  @Field(() => UserPreferences, { nullable: true })
  preferences?: UserPreferences;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
