import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProfileImageInput {
  @Field()
  type: string;

  @Field()
  name: string;

  @Field()
  imageSrc: string;
}
