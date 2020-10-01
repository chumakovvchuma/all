import { NotFoundException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "apollo-server-express";
import { NewLoginDTO } from "./dto/new-login.dto";
import { LoginsArgs } from "./dto/logins.args";
import { Login } from "./models/login.model";
import { LoginService } from "./login.service";
import { ApiProperty } from "@nestjs/swagger";

const pubSub = new PubSub();

@Resolver((of) => Login)
export class LoginResolver {
  constructor(private readonly LoginService: LoginService) {}
  @ApiProperty()
  @Query((returns) => Login)
  async Login(@Args("email") email: string): Promise<Login> {
    const Login = await this.LoginService.findOneByEmail(email);
    if (!Login) {
      throw new NotFoundException(email);
    }
    return Login;
  }

  @ApiProperty()
  @Query((returns) => [Login])
  Logins(@Args() LoginsArgs: LoginsArgs): Promise<Login[]> {
    return this.LoginService.findAll(LoginsArgs);
  }
  @ApiProperty()
  @Mutation((returns) => Login)
  async addLogin(
    @Args("newLoginData") newLoginData: NewLoginDTO
  ): Promise<Login> {
    const Login = await this.LoginService.create(newLoginData);
    pubSub.publish("LoginAdded", { LoginAdded: Login });
    return Login;
  }
  @ApiProperty()
  @Mutation((returns) => Boolean)
  async removeLogin(@Args("email") email: string) {
    return this.LoginService.remove(email);
  }
}
