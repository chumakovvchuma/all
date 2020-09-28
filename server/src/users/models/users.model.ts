import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Comment } from '../../comments/models/comments.model';
import { Post } from '../../posts/models/posts.model';
import { ManyToMany, JoinTable, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, OneToMany, ManyToOne } from 'typeorm';


enum UserRole {
  AUTHOR,
  ADMIN
}

registerEnumType(UserRole, {
  name: 'UserRole'
})

@Entity()
@ObjectType()
export class User {

  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 500, nullable: false })
  email: string;

  @Field()
  @Column({ length: 500, nullable: false })
  name: string;

  @Field(type => [UserRole])
  role: UserRole;

  // @Field(type => Comment, { nullable: true })
  // @Column(type => Comment)
  // comment: Comment;


  @OneToMany(type => Comment, comment => comment.user)
  comment: Comment[];

  @Column(type => Post)
  @Field(type => Post)
  posts: Post[];

  @CreateDateColumn()
  @Field()
  creationDate: Date;

  // @ManyToOne(type => User, user => user.childUser)
  // parentUser: User;

  // @OneToMany(type => User, user => user.parentUser)
  // childUser: User[];
}
