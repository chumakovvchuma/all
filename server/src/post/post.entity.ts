import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {IPost} from "./interfaces";

@Entity({schema: "test", name: "post"})
export class PostEntity extends BaseEntity implements IPost {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public author: string;

  @Column({type: "varchar"})
  public text: string;

  @Column()
  public comment: string;
  comments: any;
}


