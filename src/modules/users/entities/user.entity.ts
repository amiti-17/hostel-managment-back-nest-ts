import { ObjectType, Field } from '@nestjs/graphql';
import { UserPreferences } from './user-preferences.entity';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field(() => [String])
  role: string[];

  @Field()
  phone: string;

  @Field(() => UserPreferences, { nullable: true })
  preferences?: UserPreferences;

  @Field(() => String, { nullable: true })
  preferencesId?: string;

  // @Field(() => ProfileImage)
  // profileImage?: ProfileImage;

  // @Field(() => String, { nullable: true })
  // profileImageId?: string;

  // @Field(() => [GroupList])
  // groupList?: GroupList;

  // @Field(() => [String])
  // groupListId?: string;

  @Field(() => [String])
  readDashboardPostIds: string[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
