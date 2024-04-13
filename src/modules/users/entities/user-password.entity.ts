import { ObjectType, Field } from '@nestjs/graphql';
import { UserPreferences } from './user-preferences.entity';
import { ProfileImage } from 'src/modules/profile-image/entities/profile-image.entity';
import { Group } from 'src/modules/group/entities/group.entity';

@ObjectType()
export class UserWithPassword {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field(() => [String])
  roles: string[];

  @Field()
  phone: string;

  @Field(() => UserPreferences, { nullable: true })
  preferences?: UserPreferences;

  @Field(() => String, { nullable: true })
  preferencesId?: string;

  @Field(() => ProfileImage, { nullable: true })
  profileImage?: ProfileImage;

  @Field(() => String, { nullable: true })
  profileImageId?: string;

  @Field(() => [Group], { nullable: true })
  groupList?: Group[];

  @Field(() => [String], { nullable: true })
  groupIdsList?: string[];

  @Field(() => [String])
  readDashboardPostIds: string[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
