import { ObjectType, Field } from '@nestjs/graphql';
import { DashboardPostImage } from 'src/modules/dashboard-post-image/entities/dashboard-post-image.entity';

@ObjectType()
export class DashboardPost {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => DashboardPostImage, { nullable: true })
  logoImage?: DashboardPostImage;

  @Field(() => String, { nullable: true })
  logoImageId?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
