import {
  Resolver,
  Query,
  Mutation,
  Arg,
  PubSub,
  Publisher,
  Subscription,
  Root,
  ID,
  ResolverFilterData,
  Args,
} from "type-graphql";

import {Post} from "./post.type";
import {CommentInput} from "./comment.input";
import {Comment} from "./comment.type";
import {NewCommentPayload} from "./newComment.interface";
import {Topic} from "./topics";
// import {PostService} from "./post.service";
import {NewCommentsArgs} from "./post.resolver.args";
import {Repository} from "typeorm";
@Resolver()
export class PostResolver {
  constructor(
    private posts: Repository<Post>, // dependency injection
  ) {}

  @Query(() => Post, {nullable: true})
  async post(@Arg("id", () => ID) id: string) {
    return this.posts.findOne(id);
  }

  @Mutation(() => Boolean)
  async addNewComment(
    @Arg("comment") input: CommentInput,
    @PubSub(Topic.NewComment) notifyAboutNewComment: Publisher<NewCommentPayload>,
  ): Promise<boolean> {
    const post = this.posts.findByIds;
    if (!post) {
      return false;
    }
    const comment: Comment = {
      content: input.content,
      nickname: input.nickname,
      date: new Date(),
    };
    post.comments.push(comment);
    await notifyAboutNewComment({
      content: comment.content,
      nickname: comment.nickname,
      dateString: comment.date.toISOString(),
      postId: input.postId,
    });
    return true;
  }

  @Subscription(() => Comment, {
    topics: Topic.NewComment,
    filter: ({payload, args}: ResolverFilterData<NewCommentPayload, NewCommentsArgs>) => {
      return payload.postId === args.postId;
    },
  })
  newComments(@Root() newComment: NewCommentPayload, @Args() {}: NewCommentsArgs): Comment {
    return {
      content: newComment.content,
      date: new Date(newComment.dateString), // limitation of Redis payload serialization
      nickname: newComment.nickname,
    };
  }
}
