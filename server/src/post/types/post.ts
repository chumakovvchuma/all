import {Field, Int, ObjectType} from "@nestjs/graphql";
import {IPost} from "../interfaces";

@ObjectType()
export class PostType implements IPost {
  @Field(_type => Int)
  public id: number;

  @Field()
  public text: string;

  public author: string;

  @Field()
  public comment: string;
}
