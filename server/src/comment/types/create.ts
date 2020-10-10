import {Field, InputType} from "@nestjs/graphql";

import {ICommentCreateFields} from "../interfaces";

@InputType()
export class CommentCreateInputType implements ICommentCreateFields {
  @Field()
  public text: string;

  @Field()
  public author?: string | undefined;
}
