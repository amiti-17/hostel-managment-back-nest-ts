import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUsersProfileImage {
  @Field()
  usersId: string;

  @Field()
  type: string;

  @Field()
  name: string;

  @Field()
  newProfileImage: string;
}
