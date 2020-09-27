import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field(type => ID)
  id: string;

  @Field()
  text: string;

  @Field({ nullable: true })
  author: string;

  @Field(type => [String])
  comments: string[];

  @Field()
  creationDate: Date;
}
