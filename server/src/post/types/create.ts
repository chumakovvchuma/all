import {Field, InputType} from "@nestjs/graphql";
import {MinLength} from "class-validator";

import {IPostCreateFields} from "../interfaces";

@InputType()
export class PostCreateInputType implements IPostCreateFields {
  @Field()
  public text: string;

  @Field()
  @MinLength(6)
  public password: string;

  @Field()
  public author?: string | undefined;
}
