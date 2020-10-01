import { LoginService } from "./login.service";
import { Module } from "@nestjs/common";
import { LoginResolver } from "./login.resolver";

@Module({
  imports: [],
  controllers: [],
  providers: [LoginResolver, LoginService],
})
export class LoginModule {}
