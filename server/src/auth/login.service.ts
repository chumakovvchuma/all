import { Injectable } from "@nestjs/common";
import { NewLoginDTO } from "./dto/new-login.dto";
import { Login } from "./models/login.model";
import { LoginsArgs } from "./dto/logins.args";

@Injectable()
export class LoginService {
  private readonly users: Login[];

  constructor() {
    this.users = [
      {
        userId: "1",
        email: "v.chumakovv@gmail.com",
        password: "chumachuma",
      },
      {
        userId: "2",
        email: "chris",
        password: "secret",
      },
      {
        userId: "3",
        email: "maria",
        password: "guess",
      },
    ];
  }

  async create(data: NewLoginDTO): Promise<Login> {
    return {} as any;
  }

  async findAll(LoginsArgs: LoginsArgs): Promise<Login[]> {
    return [] as Login[];
  }

  async findOneById(userId: string): Promise<Login> {
    return {} as any;
  }
  async findOneByEmail(email: string): Promise<Login> {
    return {} as any;
  }

  async remove(userId: string): Promise<boolean> {
    return true;
  }
}
