import "reflect-metadata";
import {ObjectType, Field, ID} from "type-graphql";
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import {UserEntity} from "../user/user.entity";
import {IAuth} from "./interfaces";

@Entity({schema: "test", name: "auth"})
@ObjectType("auth")
export class AuthEntity extends BaseEntity implements IAuth {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  public id: number;
  @Field({nullable: true})
  @Column({type: "varchar"})
  public refreshToken: string;

  @Field(() => new Date())
  @Column({type: "int"})
  public refreshTokenExpiresAt: number;
  @Field({nullable: true})
  public accessToken: string;

  @Field(() => new Date())
  @Column({type: "bigint"})
  public accessTokenExpiresAt: number;

  @JoinColumn()
  @OneToOne(_type => UserEntity)
  public user: UserEntity;

  @Column({type: "timestamptz"})
  public timeCreatedAt: string;

  @Column({type: "timestamptz"})
  public timeUpdatedAt: string;

  @BeforeInsert()
  public beforeInsert(): void {
    const date = new Date();
    this.timeCreatedAt = date.toISOString();
    this.timeUpdatedAt = date.toISOString();
  }

  @BeforeUpdate()
  public beforeUpdate(): void {
    const date = new Date();
    this.timeUpdatedAt = date.toISOString();
  }
}
