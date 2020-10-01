import "reflect-metadata";
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
  PrimaryColumn,
  JoinTable,
} from "typeorm";
import { User } from "../../users/models/users.model";
import { Login } from "../../auth/models/login.model";

@Entity()
@ObjectType()
export class Comment {
  @PrimaryColumn()
  @Field()
  @ManyToOne((type) => Login, (userId) => userId)
  userId: string;

  @OneToMany((type) => Login, (author) => author.userId)
  author: User;

  @ManyToOne((type) => Post)
  @JoinTable()
  post: Post;

  @Field()
  @Column()
  text: string;
}
