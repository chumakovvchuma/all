import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { LoginService } from "./login.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly loginService: LoginService,
    private readonly jwtService: JwtService
  ) {}

  async validateLogin(email: string, password: string): Promise<any> {
    const login = await this.loginService.findOneByEmail(email);
    if (login && login.password === password) {
      const { password, ...result } = login;
      return result;
    }
    return null;
  }

  async login(login: any) {
    const payload = { email: login.email, password: login.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
