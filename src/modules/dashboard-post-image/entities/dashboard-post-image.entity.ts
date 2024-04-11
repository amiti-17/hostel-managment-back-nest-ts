import { ObjectType, Field } from '@nestjs/graphql';
import { DashboardPost } from 'src/modules/dashboard-post/entities/dashboard-post.entity';

@ObjectType()
export class DashboardPostImage {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  imageSrc: string;

  @Field(() => DashboardPost, { nullable: true })
  dashboardPost?: DashboardPost;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
