import { NotFoundException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "apollo-server-express";
import { NewUserInput } from "./dto/new-user.input";
import { UsersArgs } from "./dto/users.args";
import { User } from "./models/users.model";
import { UsersService } from "./users.service";

const pubSub = new PubSub();

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly UsersService: UsersService) {}

  @Query((returns) => User)
  async User(@Args("id") id: string): Promise<User> {
    const User = await this.UsersService.findOneById(id);
    if (!User) {
      throw new NotFoundException(id);
    }
    return User;
  }

  @Query((returns) => [User])
  Users(@Args() UsersArgs: UsersArgs): Promise<User[]> {
    return this.UsersService.findAll(UsersArgs);
  }

  @Mutation((returns) => User)
  async addUser(@Args("newUserData") newUserData: NewUserInput): Promise<User> {
    const User = await this.UsersService.create(newUserData);
    pubSub.publish("UserAdded", { UserAdded: User });
    return User;
  }

  @Mutation((returns) => Boolean)
  async removeUser(@Args("id") id: string) {
    return this.UsersService.remove(id);
  }

  @Subscription((returns) => User)
  UserAdded() {
    return pubSub.asyncIterator("UserAdded");
  }
}
