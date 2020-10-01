import { Injectable } from "@nestjs/common";
import { NewPostDTO } from "./dto/new-post.dto";
import { PostsArgs } from "./dto/posts.args";
import { Post } from "./models/posts.model";

@Injectable()
export class PostsService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewPostDTO): Promise<Post> {
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
