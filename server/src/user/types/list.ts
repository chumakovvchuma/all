import "reflect-metadata";
import {Field, ObjectType} from "@nestjs/graphql";
import {UserType} from ".";
import {Roles} from "../../common/decorators/roles";
import {RolesGuard} from "../../common/guards/roles";

@ObjectType("userlist")
export class UserListType {
  @Field(_type => [UserType])
  public list: UserType[];

  @Field()
  public count: number;
}
