import "reflect-metadata";
import {ObjectType, Field, ID} from "type-graphql";
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

import {Comment} from "./comment.type";

@Entity({schema: "test", name: "post"})
@ObjectType("post")
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;
  @Column()
  @Field({nullable: true})
  title?: string;
  @Column()
  @Field({nullable: true})
  description?: string;
  @Column(() => Comment)
  @Field(() => [Comment], {nullable: true})
  comments?: Comment[] | string;
  @Field(() => Date)
  date?: Date;
}

export interface NotificationPayload {
  id: number;
  title?: string;
  description?: string;
  comments?: string;
  date?: Date;
}
