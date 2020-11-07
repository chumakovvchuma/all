import {Field, ObjectType} from "@nestjs/graphql";
import "reflect-metadata";
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {UserType} from "../user/types/user";
import {Author} from "./author.model";
import {IPost} from "./interfaces";

@Entity({schema: "test", name: "post"})
export class PostEntity extends BaseEntity implements IPost {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column(() => [Author].push)
  public author: Author[];

  @Column({type: "varchar"})
  public text: string;

  @Column()
  public comment: string;
  comments: any;
}
