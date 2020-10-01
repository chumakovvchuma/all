import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, Length, MaxLength } from "class-validator";

@InputType()
export class NewPostDTO {
  @Field()
  @MaxLength(50)
  text: string;
}
