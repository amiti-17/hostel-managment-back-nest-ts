import { ObjectType, Field } from '@nestjs/graphql';
import { Hotel } from 'src/modules/hotel/entities/hotel.entity';
import { Room } from 'src/modules/room/entities/room.entity';

@ObjectType()
export class Floor {
  @Field()
  id: string;

  @Field(() => Number)
  number: number;

  @Field(() => [Room])
  rooms: Room[];

  @Field(() => Hotel, { nullable: true })
  hotel?: Hotel;

  @Field({ nullable: true })
  hotelId?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
