import {IPost} from "./interfaces";
import {UserEntity} from "../user/user.entity";

export default function createPost(): IPost[] {
  return [
    {
      id: 1,
      text: "testpost",
      author: UserEntity.profile.email("v.chumakovv@gmail.com"),
      comment: "test comment",
    },
    {
      id: 2,
      text: "testpost",
      author: UserEntity.profile.email("vchumakovv@getMaxListeners.com"),
      comment: "test comment",
    },
  ];
}
