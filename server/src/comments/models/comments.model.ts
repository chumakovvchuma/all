import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Post } from "../../posts/models/posts.model";
import {
  ManyToMany,
  OneToOne,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { User } from "../../users/models/users.model";

@Entity()
@ObjectType()
export class Comment {
  @Field((type) => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne((type) => User, (user) => user.id)
  author: User;

  @ManyToOne((type) => Post, (post) => post.id)
  post: Post;

  @Field()
  @Column()
  text: string;
}
