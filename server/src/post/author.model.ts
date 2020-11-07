import {Field, Int, ObjectType} from "@nestjs/graphql";
import {UserType} from "../user/types/user";
import {PostEntity} from "./post.entity";

@ObjectType()
export class Author {
  @Field(type => Int)
  id: number;

  @Field(() => [UserType], {nullable: true})
  email?: string;

  @Field(type => [PostEntity])
  posts: PostEntity[];
}
