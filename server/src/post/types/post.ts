import {Field, Int, ObjectType} from "@nestjs/graphql";
import {UserType} from "../../user/types/user";
import {Author} from "../author.model";
import {IPost} from "../interfaces";

@ObjectType("post")
export class PostType implements IPost {
  @Field(_type => Int)
  public id: number;

  @Field()
  public text: string;

  public author: Author[];

  @Field()
  public comment: string;
}
