import {
  Controller,
  Get,
  Post,
  Render,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AppService, MainService } from "./app.service";
import { AuthService } from "./auth/auth.service";
import { GqlAuthGuard } from "./auth/guards/jwt-auth.guard";
import { LocalAuthGuard } from "./auth/guards/local-auth.guard";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(GqlAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
@Controller("main")
export class MainController {
  constructor(private mainService: MainService) {}
  @Get()
  @Render("main")
  root() {
    return { message: "Hello world!" };
  }
}
