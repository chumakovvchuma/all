import "reflect-metadata";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Login } from "../../auth/models/login.model";
import { Comment } from "../../comments/models/comments.model";
import {
  ManyToMany,
  JoinTable,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { User } from "../../users/models/users.model";

@Entity()
@ObjectType()
export class Post {
  @PrimaryColumn()
  @Field()
  @ManyToOne((type) => Login, (userId) => userId)
  userId: string;

  @Field()
  @Column({ length: 500, nullable: false })
  text: string;

  @Field()
  @OneToOne((type) => User, (author) => author.name)
  author: string;

  @ManyToMany((type) => Comment)
  @JoinTable()
  comments: Comment[];
}
