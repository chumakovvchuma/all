import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {registerEnumType} from "@nestjs/graphql";
import {IUser, UserRole} from "./interfaces";

registerEnumType(UserRole, {
  name: "UserRole",
});

@Entity({schema: "test", name: "user"})
export class UserEntity extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({type: "varchar"})
  public email: string;

  @Column({type: "varchar", select: false})
  public password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    array: true,
  })
  public roles: UserRole[];
}
