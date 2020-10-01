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
} from "typeorm";
import { Exclude, Transform } from "class-transformer/decorators";

enum UserRole {
  AUTHOR,
  ADMIN,
}

registerEnumType(UserRole, {
  name: "UserRole",
});

@Entity()
@ObjectType()
export class User {
  @Field((type) => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

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

  @OneToMany((type) => Comment, (comment) => comment.id)
  comment: Comment[];

  @OneToMany((type) => Post, (post) => post.id)
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
