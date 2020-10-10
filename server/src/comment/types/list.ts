import {Field, ObjectType} from "@nestjs/graphql";
import {CommentEntity} from "../comment.entity";

@ObjectType()
export class CommentListType {
  @Field(_type => CommentEntity)
  public list: CommentEntity[];

  @Field()
  public count: number;
}
