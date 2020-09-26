import { Injectable } from '@nestjs/common';
import { NewPostInput } from './dto/new-Post.input';
import { PostsArgs } from './dto/Posts.args';
import { Post } from './models/Posts.model';

@Injectable()
export class PostsService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewPostInput): Promise<Post> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Post> {
    return {} as any;
  }

  async findAll(PostsArgs: PostsArgs): Promise<Post[]> {
    return [] as Post[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
