import { ObjectType, Field } from '@nestjs/graphql';
import { Floor } from 'src/modules/floor/entities/floor.entity';

@ObjectType()
export class Hotel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  location?: string;

  @Field(() => Date)
  whenBuild: Date;

  @Field(() => Date)
  whenLaunched: Date;

  @Field(() => [Floor])
  floors: Floor[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
