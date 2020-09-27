import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Comment } from '../../comments/models/comments.model'
import { Post } from '../../posts/models/posts.model'

enum UserRole {
  AUTHOR,
  ADMIN
}

registerEnumType(UserRole, {
  name: 'UserRole'
})

@ObjectType()
export class User {
  @Field(type => ID)
  id: string;

  @Field()
  email: string;

  @Field(type => [UserRole])
  role: UserRole;

  @Field(type => [Comment])
  comments: Comment[];

  @Field(type => [Post])
  posts: Post[];

  @Field()
  creationDate: Date;
}
