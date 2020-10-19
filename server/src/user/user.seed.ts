import {UserRole} from "./interfaces/roles";
import {IUser} from "./interfaces/user";

export default function createUsers(): IUser[] {
  return [
    {
      id: 1,
      email: "v.chumakovv@gmail.com",
      password: "chumakovv",
      roles: [UserRole.Admin],
    },
    {
      id: 2,
      email: "vchumakovv@gmail.com",
      password: "chumakovv",
      roles: [UserRole.User],
    },
  ];
}
