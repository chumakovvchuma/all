import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsOptional, Length, MaxLength } from "class-validator";

@InputType()
export class NewLoginDTO {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}
