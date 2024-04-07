import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUsersPasswordInput {
  @Field()
  id: string;

  @Field()
  newPassword: string;

  @Field()
  oldPassword: string;
}
