import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IComment} from "./interfaces";
import {PostEntity} from "../post/post.entity";

@Entity({schema: "test", name: "comment"})
export class CommentEntity extends BaseEntity implements IComment {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public author: string;

  @Column({type: "varchar"})
  public text: string;

  @Column(() => PostEntity)
  public post: string;
}
