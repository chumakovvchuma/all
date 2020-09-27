import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { NewCommentInput } from './dto/new-Comment.input';
import { CommentsArgs } from './dto/Comments.args';
import { Comment } from './models/Comments.model';
import { CommentsService } from './Comments.service';

const pubSub = new PubSub();

@Resolver(of => Comment)
export class CommentsResolver {
  constructor(private readonly CommentsService: CommentsService) {}

  @Query(returns => Comment)
  async Comment(@Args('id') id: string): Promise<Comment> {
    const Comment = await this.CommentsService.findOneById(id);
    if (!Comment) {
      throw new NotFoundException(id);
    }
    return Comment;
  }

  @Query(returns => [Comment])
  Comments(@Args() CommentsArgs: CommentsArgs): Promise<Comment[]> {
    return this.CommentsService.findAll(CommentsArgs);
  }

  @Mutation(returns => Comment)
  async addComment(
    @Args('newCommentData') newCommentData: NewCommentInput,
  ): Promise<Comment> {
    const Comment = await this.CommentsService.create(newCommentData);
    pubSub.publish('CommentAdded', { CommentAdded: Comment });
    return Comment;
  }

  @Mutation(returns => Boolean)
  async removeComment(@Args('id') id: string) {
    return this.CommentsService.remove(id);
  }

  @Subscription(returns => Comment)
  CommentAdded() {
    return pubSub.asyncIterator('CommentAdded');
  }
}
