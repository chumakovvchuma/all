import { Injectable } from '@nestjs/common';
import { User } from './users/models/users.model';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class MainService {
  private readonly users: User[] = [];

  findAll(): User[] {
    return this.users;
  }
}