import { Injectable } from "@nestjs/common";
import { NewCommentDTO } from "./dto/new-comment.dto";
import { CommentsArgs } from "./dto/comments.args";
import { Comment } from "./models/comments.model";

@Injectable()
export class CommentsService {
  async create(data: NewCommentDTO): Promise<Comment> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Comment> {
    return {} as any;
  }

  async findAll(CommentsArgs: CommentsArgs): Promise<Comment[]> {
    return [] as Comment[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
