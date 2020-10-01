import { Injectable } from "@nestjs/common";
import { NewLoginDTO } from "./dto/new-login.dto";
import { Login } from "./models/login.model";
import { LoginsArgs } from "./dto/logins.args";

@Injectable()
export class LoginService {
  async create(data: NewLoginDTO): Promise<Login> {
    return {} as any;
  }

  async findAll(LoginsArgs: LoginsArgs): Promise<Login[]> {
    return [] as Login[];
  }

  async findOneByEmail(email: string): Promise<Login> {
    return {} as any;
  }

  async remove(email: string): Promise<boolean> {
    return true;
  }
}
