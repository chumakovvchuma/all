import {Field, Int, ObjectType} from "@nestjs/graphql";
import {IComment} from "../interfaces";

@ObjectType()
export class CommentType implements IComment {
  @Field(_type => Int)
  public id: number;

  @Field()
  public text: string;

  public author: string;

  @Field(_type => [Comment])
  public comment: Comment[];

  @Field()
  public post: string;
}
