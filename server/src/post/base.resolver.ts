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
  ClassType,
  Int,
} from "type-graphql";

function createBaseResolver<T extends ClassType>(suffix: string, objectTypeCls: T) {
  @Resolver({isAbstract: true})
  abstract class BaseResolver {
    protected items: T[] = [];

    @Query(type => [objectTypeCls], {name: `getAll${suffix}`})
    async getAll(@Arg("first", type => Int) first: number): Promise<T[]> {
      return this.items.slice(0, first);
    }
  }

  return BaseResolver;
}
