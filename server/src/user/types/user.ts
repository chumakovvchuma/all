import {Field, Int, ObjectType, registerEnumType} from "@nestjs/graphql";
import {IUser, UserRole} from "../interfaces";

registerEnumType(UserRole, {
  name: "UserRole",
});

@ObjectType("user")
export class UserType implements IUser {
  @Field(_type => Int)
  public id: number;

  @Field()
  public email: string;

  public password: string;

  @Field(_type => [UserRole], {nullable: true})
  public roles: UserRole[];
}
