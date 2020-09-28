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

  @Field()
  @Column({ length: 500, nullable: true })
  name: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.AUTHOR,
  })
  role: UserRole;

  @OneToMany((type) => Comment, (comment) => comment.author)
  comment: Comment[];

  // @CreateDateColumn()
  // @Field()
  // creationDate: Date;
}
