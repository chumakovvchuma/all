import { NotFoundException, UseGuards } from "@nestjs/common";
import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
  ID,
} from "@nestjs/graphql";
import { PubSub } from "apollo-server-express";
import { NewLoginDTO } from "./dto/new-login.dto";
import { LoginsArgs } from "./dto/logins.args";
import { Login } from "./models/login.model";
import { LoginService } from "./login.service";
import { ApiProperty } from "@nestjs/swagger";
import { CurrentUser } from "./current-user.decorator";
import { GqlAuthGuard } from "./guards/jwt-auth.guard";

const pubSub = new PubSub();

@Resolver((of) => Login)
export class LoginResolver {
  constructor(private readonly LoginService: LoginService) {}
  @ApiProperty()
  @Query((returns) => Login)
  async Login(
    @Args("email") email: string,
    @Args("password") password: string
  ): Promise<Login> {
    const Login = await this.LoginService.findOneById(email);

    if (!Login) {
      throw new NotFoundException(email);
    }
    return Login;
  }

  @Query((returns) => Login)
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() login: Login) {
    return this.LoginService.findOneById(login.userId);
  }

  @Query((returns) => Login)
  @Query((returns) => [Login])
  Logins(@Args() LoginsArgs: LoginsArgs): Promise<Login[]> {
    return this.LoginService.findAll(LoginsArgs);
  }

  @Mutation((returns) => Login)
  async addLogin(
    @Args("newLoginData") newLoginData: NewLoginDTO
  ): Promise<Login> {
    const Login = await this.LoginService.create(newLoginData);
    pubSub.publish("LoginAdded", { LoginAdded: Login });
    return Login;
  }

  @Mutation((returns) => Boolean)
  async removeLogin(@Args("email") email: string) {
    return this.LoginService.remove(email);
  }
}
