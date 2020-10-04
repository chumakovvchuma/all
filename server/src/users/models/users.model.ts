import "reflect-metadata";
import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Comment } from "../../comments/models/comments.model";
import { Post } from "../../posts/models/posts.model";
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
  PrimaryColumn,
} from "typeorm";
import { Exclude, Transform } from "class-transformer/decorators";
import { Login } from "src/auth/models/login.model";

export enum UserRole {
  AUTHOR,
  ADMIN,
}

registerEnumType(UserRole, {
  name: "UserRole",
});

@Entity()
@ObjectType()
export class User {
  @PrimaryColumn()
  @Field()
  @ManyToOne((type) => Login, (userId) => userId)
  userId: string;

  @Field()
  @Column({ length: 500, nullable: true })
  email: string;

  // @Field()
  // @Column({ length: 500, nullable: true })
  // password: string;

  @Field()
  @Column({ length: 500, nullable: true })
  name: string;

  @Transform((role) => role.name)
  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.AUTHOR,
  })
  role: UserRole;

  @OneToMany((type) => Comment, (comments) => comments.author)
  comments: Comment[];

  @OneToMany((type) => Post, (post) => post.author)
  post: Post[];

  // @Field()
  // @Exclude()
  // password: string;

  // constructor(partial: Partial<User>) {
  //   Object.assign(this, partial);
  // }

  // @CreateDateColumn()
  // @Field()
  // creationDate: Date;
}
