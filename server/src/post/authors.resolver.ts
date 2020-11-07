import "reflect-metadata";
import {PubSubEngine} from "graphql-subscriptions";
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  PubSub,
  Publisher,
  Subscription,
  Root,
  ResolverFilterData,
  Args,
} from "type-graphql";
import {Author} from "./author.model";
import {PostService} from "./post.service";
import {AuthorService} from "./author.service";
import {Int, Parent, ResolveField} from "@nestjs/graphql";
import {User} from "../common/decorators/user";

@Resolver(of => Author)
export class AuthorsResolver {
  constructor(private authorsService: AuthorService, private postsService: PostService) {}

  @Query(returns => Author)
  public authors(@User() author: Author): Author {
    return author;
  }

  @Query(returns => Author)
  public listAuthors(): Promise<[Author[], number]> {
    return this.authorsService.findAndCount();
  }

  // @Query(returns => Author)
  // async author(@Args("id", { type: () => Int }) id: string) {
  //   return this.authorsService.findOne('id');
  // }

  @ResolveField()
  async authorAll(@Parent() author: Author) {
    const {id} = author;
    return this.postsService.findAll({authorId: id});
  }
}
