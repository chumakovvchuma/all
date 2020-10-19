import {ConnectionOptions} from "typeorm";
import {Request, Response} from "express";
import {Injectable} from "@nestjs/common";
import {GqlOptionsFactory, GqlModuleOptions} from "@nestjs/graphql";

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): GqlModuleOptions {
    return {
      installSubscriptionHandlers: true,
      debug: process.env.NODE_ENV !== "production",
      playground: true,
      context: ({req, res}: {req: Request; res: Response}): any => ({req, res}),
      autoSchemaFile: "./schema.gql",
      cors: true,
      subscriptions: {
        path: "/subscriptions",
      },
    };
  }
}
