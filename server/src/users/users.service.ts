import { Injectable } from "@nestjs/common";
import { NewUserInput } from "./dto/new-user.input";
import { UsersArgs } from "./dto/users.args";
import { User } from "./models/users.model";

// export type User = any;

@Injectable()
export class UsersService {
  // private readonly users: User[];

  // constructor() {
  //   this.users = [
  //     {
  //       userId: 1,
  //       name: 'john',
  //       email: 'changeme',
  //       password: 'changeme',
  //       comment: "my comment test",
  //       author: 'john',
  //       username: 'john',
  //     },
  //     {
  //       userId: 2,
  //       username: 'chris',
  //       password: 'secret',
  //     },
  //     {
  //       userId: 3,
  //       username: 'maria',
  //       password: 'guess',
  //     },
  //   ];
  // }

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find(user => user.username === username);
  // }

  async create(data: NewUserInput): Promise<User> {
    return {} as any;
  }

  async findOneById(id: string): Promise<User> {
    return {} as any;
  }

  async findAll(UsersArgs: UsersArgs): Promise<User[]> {
    return [] as User[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
