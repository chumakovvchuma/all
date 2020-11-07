import {IUser} from "../../user/interfaces/user";
import {UserType} from "../../user/types/user";
import {Author} from "../author.model";

export interface IPost {
  id: number;
  text: string;
  author: Author[];
  comment: string;
}
