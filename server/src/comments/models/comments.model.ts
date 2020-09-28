import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from '../../posts/models/posts.model';
import { ManyToMany, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from '../../users/models/users.model';

@Entity()
@ObjectType()
export class Comment {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => User, user => user.id)
  author: User;

  @ManyToOne(type => Post, post => post.author)
  post: Post;

  @Field()
  @Column()
  text: string;

  @CreateDateColumn()
  @Field()
  creationDate: Date;


}
