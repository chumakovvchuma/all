import { Injectable } from '@nestjs/common';
import { NewCommentInput } from './dto/new-comment.input';
import { CommentsArgs } from './dto/comments.args';
import { Comment } from './models/comments.model';

@Injectable()
export class CommentsService {

  async create(data: NewCommentInput): Promise<Comment> {
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
