import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantDto {
  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  location: string;

  @Field()
  phone_number: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  cuisine: string;
}
