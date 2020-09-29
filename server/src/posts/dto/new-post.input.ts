import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, Length, MaxLength } from "class-validator";

@InputType()
export class NewPostInput {
  @Field()
  @MaxLength(50)
  text: string;
}
