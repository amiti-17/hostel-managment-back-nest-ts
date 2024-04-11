import { ObjectType, Field } from '@nestjs/graphql';
import { Review } from 'src/modules/review/enitities/review.entity';

@ObjectType()
export class Task {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  shortDescription?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field()
  type: string;

  @Field(() => [String])
  roleNeeds: string[];

  @Field()
  status: string;

  @Field(() => Date, { nullable: true })
  dateStart?: Date;

  @Field(() => Date, { nullable: true })
  dateFinish?: Date;

  @Field(() => Boolean)
  isReassigned: boolean;

  @Field(() => [String])
  reassignedTo: string[];

  @Field(() => Number)
  estimated: number;

  @Field(() => String)
  importance: string;

  @Field(() => String, { nullable: true })
  executorsId?: string;

  @Field(() => Boolean)
  isAssigned: boolean;

  @Field(() => Review, { nullable: true })
  review?: Review;

  @Field(() => String, { nullable: true })
  reviewId?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
