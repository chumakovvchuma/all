import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/models/users.model';
import { Comment } from '../../comments/models/comments.model';

@ObjectType()
export class Post {
  @Field(type => ID)
  id: string;

  @Field()
  text: string;

  @Field(type => [User])
  author: User[];

  @Field(type => [Comment])
  comments: Comment[]; 

  @Field()
  creationDate: Date;
}
