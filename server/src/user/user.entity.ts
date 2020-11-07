import "reflect-metadata";
import {ID, Field, ObjectType, registerEnumType} from "type-graphql";
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
// import {Field, ObjectType, registerEnumType, } from "@nestjs/graphql";
import {IUser, UserRole} from "./interfaces";
import {UserType} from "./types/user";

registerEnumType(UserRole, {
  name: "UserRole",
});

@Entity({schema: "test", name: "user"})
@ObjectType("user")
export class UserEntity extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  public id: number;
  @Field()
  @Column({type: "varchar"})
  public email: string;
  @Field()
  @Column({type: "varchar", select: false})
  public password: string;
  @Field(() => [UserRole])
  @Column({
    type: "enum",
    enum: UserRole,
    array: true,
    default: [UserRole.User],
  })
  public roles: UserRole[];
  static profile: UserType[];
}
