import { NotFoundException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "apollo-server-express";
import { NewPostDTO } from "./dto/new-post.dto";
import { PostsArgs } from "./dto/posts.args";
import { Post } from "./models/posts.model";
import { PostsService } from "./posts.service";

const pubSub = new PubSub();

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly PostsService: PostsService) {}

  @Query((returns) => Post)
  async Post(@Args("id") id: string): Promise<Post> {
    const Post = await this.PostsService.findOneById(id);
    if (!Post) {
      throw new NotFoundException(id);
    }
    return Post;
  }

  @Query((returns) => [Post])
  Posts(@Args() PostsArgs: PostsArgs): Promise<Post[]> {
    return this.PostsService.findAll(PostsArgs);
  }

  @Mutation((returns) => Post)
  async addPost(@Args("newPostData") newPostData: NewPostDTO): Promise<Post> {
    const Post = await this.PostsService.create(newPostData);
    pubSub.publish("PostAdded", { PostAdded: Post });
    return Post;
  }

  @Mutation((returns) => Boolean)
  async removePost(@Args("id") id: string) {
    return this.PostsService.remove(id);
  }

  @Subscription((returns) => Post)
  PostAdded() {
    return pubSub.asyncIterator("PostAdded");
  }
}
