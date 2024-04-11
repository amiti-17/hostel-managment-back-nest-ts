import { ObjectType, Field } from '@nestjs/graphql';
import { Floor } from 'src/modules/floor/entities/floor.entity';

@ObjectType()
export class Room {
  @Field()
  id: string;

  @Field(() => Number)
  number: number;

  @Field()
  type: string;

  @Field(() => Number)
  capacity: number;

  @Field()
  status: string;

  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  statusDescription?: string;

  @Field(() => Boolean)
  isFree: boolean;

  @Field(() => Boolean)
  isOccupied: boolean;

  @Field(() => Floor, { nullable: true })
  floor?: Floor;

  @Field(() => String, { nullable: true })
  floorId?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
