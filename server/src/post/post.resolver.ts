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

import {Post, NotificationPayload} from "./post.type";

@Resolver()
export class PostResolver {
  private autoIncrement = 0;

  @Query(() => Date)
  currentDate() {
    return new Date();
  }

  @Mutation(() => Boolean)
  async pubSubMutation(
    @PubSub() pubSub: PubSubEngine,
    @Arg("title", {nullable: true}) title?: string,
    @Arg("description", {nullable: true}) description?: string,
    @Arg("comments", {nullable: true}) comments?: string,
    @Arg("date", {nullable: true}) date?: Date,
  ): Promise<boolean> {
    const payload: NotificationPayload = {id: ++this.autoIncrement, title, description, comments, date};
    await pubSub.publish("NOTIFICATIONS", payload);
    return true;
  }

  @Mutation(() => Boolean)
  async publisherMutation(
    @PubSub("NOTIFICATIONS") publish: Publisher<NotificationPayload>,
    @Arg("title", {nullable: true}) title?: string,
    @Arg("description", {nullable: true}) description?: string,
    @Arg("comments", {nullable: true}) comments?: string,
    @Arg("date", {nullable: true}) date?: Date,
  ): Promise<boolean> {
    await publish({id: ++this.autoIncrement, title, description, comments, date});
    return true;
  }

  // dynamic topic

  @Mutation(() => Boolean)
  async pubSubMutationToDynamicTopic(
    @PubSub() pubSub: PubSubEngine,
    @Arg("topic") topic: string,
    @Arg("title", {nullable: true}) title?: string,
  ): Promise<boolean> {
    const payload: NotificationPayload = {id: ++this.autoIncrement, title};
    await pubSub.publish(topic, payload);
    return true;
  }
}
