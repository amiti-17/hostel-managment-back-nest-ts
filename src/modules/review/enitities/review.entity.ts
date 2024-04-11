import { ObjectType, Field } from '@nestjs/graphql';
import { Task } from 'src/modules/task/entities/task.entity';

@ObjectType()
export class Review {
  @Field()
  id: string;

  @Field()
  fromId: string;

  @Field()
  toId: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Number)
  mark: number;

  @Field({ nullable: true })
  notes?: string;

  @Field(() => Task, { nullable: true })
  task?: Task;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
