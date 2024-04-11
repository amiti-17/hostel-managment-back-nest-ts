import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/modules/users/entities/user.entity';

@ObjectType()
export class Group {
  @Field()
  id: string;

  @Field()
  identification: string;

  @Field()
  type: string;

  @Field(() => Boolean)
  isGroup: boolean;

  @Field(() => Boolean)
  isPrivate: boolean;

  @Field(() => [User])
  usersList: User[];

  @Field(() => [String])
  usersIdsList: string[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
