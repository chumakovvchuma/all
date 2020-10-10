import {Field, ObjectType} from "@nestjs/graphql";
import {PostEntity} from "../post.entity";

@ObjectType()
export class PostListType {
  @Field(_type => PostEntity)
  public list: PostEntity[];

  @Field()
  public count: number;
}
